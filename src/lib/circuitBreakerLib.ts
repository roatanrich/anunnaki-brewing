import axios from 'axios';

enum CircuitBreakerTypes {
  OPEN,
  HALF,
  CLOSED,
}

interface ICircuitBreakerOptions {
  timeout?: number;
  failureThreshold?: number;
  successThreshold?: number;
}

export class CircuitBreaker {
  private timeout: number;
  private failThreshold: number;
  private successThreshold: number;
  private state = CircuitBreakerTypes.CLOSED;
  private failureCount = 0;
  private successCount = 0;
  private nextAttempt = Date.now();
  private url: string;

  constructor(url: string, options?: ICircuitBreakerOptions) {
    this.timeout = options?.timeout ?? 3000;
    this.failThreshold = options?.failureThreshold ?? 2;
    this.successThreshold = options?.successThreshold ?? 1;
    this.url = url;
  }

  private success(res: any) {
    this.failureCount = 0;
    if (this.state === CircuitBreakerTypes.HALF) {
      this.successCount++;
      if (this.successCount > this.successThreshold) {
        this.state = CircuitBreakerTypes.CLOSED;
        this.successCount = 0;
      }
    }

    return res;
  }

  private failure(res: any) {
    this.failureCount++;
    if (this.failureCount >= this.failThreshold) {
      this.state = CircuitBreakerTypes.OPEN;
      this.nextAttempt = Date.now() + this.timeout;
    }
    return res;
  }

  async exec() {
    if (this.state === CircuitBreakerTypes.OPEN) {
      if (Date.now() >= this.nextAttempt) {
        this.state = CircuitBreakerTypes.HALF;
      } else {
        throw new Error('Circuit is broken');
      }
    }

    try {
      const response = await axios.get(this.url);
      if (response.status === 200) {
        return this.success(response.data);
      }

      return this.failure(response);
    } catch (error: any) {
      return this.failure(error.message);
    }
  }
}

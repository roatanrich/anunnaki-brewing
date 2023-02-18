import { ExpirationStatusType, IJwtSession } from './jwtInterfaces';

function checkExpirationStatus(token: IJwtSession): ExpirationStatusType {
  const now = Date.now();

  if (token.expires > now) {
    return 'active';
  }

  // if token has been expired for less than grace period hours, it can be automatically renewed
  const gracePeriodHours: number = Number(process.env.JWT_GRACE_PERIOD_HOURS);
  const hoursInMs = gracePeriodHours * 60 * 60 * 1000;
  const hoursAfterExpiration = token.expires + hoursInMs;

  if (hoursAfterExpiration > now) {
    return 'grace';
  }

  return 'expired';
}

export default checkExpirationStatus;

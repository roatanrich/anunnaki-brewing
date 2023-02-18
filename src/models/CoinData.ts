export default class Root {
  status: Status;
  //data: Data;

  constructor(data: any) {
    this.status = new Status();
    //this.data = new Data();

    // Map the properties from the JSON to the class
    Object.assign(this, data);
  }
}

export class Status {
  timestamp: string = '';
  error_code: number = 0;
  error_message: any = '';
  elapsed: number = 0;
  credit_count: number = 0;
}

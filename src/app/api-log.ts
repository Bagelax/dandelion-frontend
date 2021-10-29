export class ApiLog {
  constructor(
    public date: Date,
    public method: String,
    public url: String,
    public response: Number
  ) {  }
}

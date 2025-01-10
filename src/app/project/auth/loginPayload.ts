export class LoginPayload {
  email: string;
  password: string;
  constructor() {
    this.email = 'syaniya.ravi@gmail.com';
    this.password = `${new Date().getTime()}`;
  }
}

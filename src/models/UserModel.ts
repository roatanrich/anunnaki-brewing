export default class UserModel {
  id: number = 0;
  username: string = '';
  first_name: string = '';
  last_name: string = '';
  password: string = '';
  api_key: string = '';
  roles: string[] = [];

  constructor() {}

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username: string) {
    this.username = username;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password: string) {
    this.password = password;
  }

  getFirstName() {
    return this.first_name;
  }

  setFirstName(first_name: string) {
    this.first_name = first_name;
  }

  getLastName() {
    return this.last_name;
  }

  setLastName(last_name: string) {
    this.last_name = last_name;
  }

  getApiKey() {
    return this.api_key;
  }

  setApiKey(api_key: string) {
    this.api_key = api_key;
  }

  getRoles() {
    return this.roles;
  }

  setRoles(roles: string[]) {
    this.roles = roles;
  }

  toString = (): string => {
    return `${this.id}, ${this.username}, ${this.first_name}, ${this.last_name}, ${this.password}, ${this.api_key}, ${this.roles}`;
  };
}

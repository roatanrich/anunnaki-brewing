import UserModel from '../../src/models/UserModel';

const userData: UserModel[] = [
  {
    id: 1,
    username: 'roatanrich@gmail.com',
    first_name: 'Rich',
    last_name: 'Henry',
    password: 'Passw0rd',
    api_key: '1ab2c3d4e5f61ab2c3d4e5f6',
    roles: ['ADMIN', 'MANAGER', 'INSPECTOR'],
  },
  {
    id: 2,
    username: 'jsmalls@gmail.com',
    first_name: 'John',
    last_name: 'Smalls',
    password: 'Passw0rd',
    api_key: '1ab2c3d4e5f61ab2c3d4e5f7',
    roles: ['USER', 'TESTER'],
  },
] as UserModel[];

export default userData;

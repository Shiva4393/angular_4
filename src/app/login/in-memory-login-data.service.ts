import { InMemoryDbService } from 'angular-in-memory-web-api';

import { LoginFormat } from '../formats/login-format';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const logins: LoginFormat[] = [
            { id: 1, first_name: 'admin', last_name: 'angular', username: 'angular_V4', password: '123456', email: 'admin@angular.com', phone_no: 9676424893, age: 24 },
            { id: 2, first_name: 'shiva', last_name: 'kumar', username: 'shiva451', password: '123456', email: 'shiva451@gmail.com', phone_no: 9676424893, age: 24 }
        ];
        return { logins };
    }
}
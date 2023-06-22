import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Adriano",
        lastName: "Escarabote",
        email: "adriano@hotmail.com",
        password: "1234",
      },
    ];
  }
}

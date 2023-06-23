import {
  IUpdateUserRepository,
  UpdateUserParams,
} from "../../controllers/update-user/protocols";
import { User } from "../../models/user";
import { MongoClient } from "../../database/mongo";
import { ObjectId } from "mongodb";

export class MongoUpdateUserRepository implements IUpdateUserRepository {
  async updateUser(id: string, params: UpdateUserParams): Promise<User> {
    await MongoClient.db.collection("users").updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          ...params,
        },
      }
    );

    const user = MongoClient.db
      .collection<Omit<User, "id">>("users")
      .findOne({ _id: new ObjectId(id) });
  }
}

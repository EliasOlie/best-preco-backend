import { Collections } from "../../dbal/mongo.service";
import { BuyerUser, BuyerUserDTO } from "../../domain/models/BuyerUser";
import { IBuyerUserRepo } from "../../domain/repositories/BuyerUserRepo";
import { ObjectId } from "mongodb";
import * as crypto from "crypto";

class MongoDBBuyerUserImplementation implements IBuyerUserRepo {
  async createBuyerUser(bUser: BuyerUserDTO): Promise<void> {
    const salt = crypto.randomBytes(16).toString("hex");

    if (!bUser.id) {
      let payload = {
        ...bUser,
        createdAt: new Date(Date.now()).toLocaleDateString("pt-BR"),
        modifiedAt: new Date(Date.now()).toLocaleDateString("pt-BR"),
        userPassword: crypto
          .pbkdf2Sync(bUser.userPassword, salt, 1000, 64, "sha512")
          .toString("hex"),
        id: new ObjectId().toString(),
      };
      let user = new BuyerUser(payload);
      const transaction = await Collections.BuyerUserCollection?.insertOne(
        user
      );
      if (!transaction?.insertedId) {
        throw new Error("Operation falied");
      }
    } else {
      const transaction = await Collections.BuyerUserCollection?.insertOne(
        new BuyerUser({
          ...bUser,
          userPassword: crypto
            .pbkdf2Sync(bUser.userPassword, salt, 1000, 64, "sha512")
            .toString("hex"),
        })
      );
      if (!transaction?.insertedId) {
        throw new Error("Operation falied");
      }
    }
  }

  async deleteBuyerUser(email: string): Promise<void> {
    const transaction = await Collections.BuyerUserCollection?.findOneAndDelete(
      { "props.userEmail": email }
    );
    if (!transaction) {
      throw new Error("Operation falied");
    }
  }

  async getAll(): Promise<BuyerUserDTO[]> {
    const users = (await Collections.BuyerUserCollection?.find(
      {}
    ).toArray()) as unknown as BuyerUserDTO[];
    return users;
  }

  async readBuyerUser(email: string): Promise<BuyerUserDTO | null> {
    const user = (await Collections.BuyerUserCollection?.findOne(
      { "props.userEmail": email },
      { projection: { _id: 0 } }
    )) as unknown as BuyerUserDTO;
    return user;
  }

  async updateUserEmail(user: BuyerUserDTO, newEmail: string): Promise<void> {
    const email = user.props.userEmail;
    const newUser = new BuyerUser(user.props);
    newUser.updateUserEmail(newEmail);
    let modificationAt = new Date(Date.now());
    newUser.updateModifiedAt(modificationAt.toLocaleDateString("pt-BR"));

    let transaction = await Collections.BuyerUserCollection?.replaceOne(
      { "props.userEmail": email },
      newUser
    );
    if (transaction?.modifiedCount == 0) {
      throw new Error("Operation falied");
    }
  }

  async updateUserName(user: BuyerUserDTO, newName: string): Promise<void> {
    const email = user.props.userEmail;
    const newUser = new BuyerUser(user.props);
    newUser.updateUserName(newName);
    let modificationAt = new Date(Date.now());
    newUser.updateModifiedAt(modificationAt.toLocaleDateString("pt-BR"));

    let transaction = await Collections.BuyerUserCollection?.replaceOne(
      { "props.userEmail": email },
      newUser
    );
    if (transaction?.modifiedCount == 0) {
      throw new Error("Operation falied");
    }
  }

  async updateUserPassword(
    user: BuyerUserDTO,
    newPassword: string
  ): Promise<void> {
    const salt = crypto.randomBytes(16).toString("hex");
    const email = user.props.userEmail;
    const newUser = new BuyerUser(user.props);
    const encryptedNewPassword = crypto
      .pbkdf2Sync(newPassword, salt, 1000, 64, "sha512")
      .toString("hex");
    newUser.updateUserPassword(encryptedNewPassword);
    let modificationAt = new Date(Date.now());
    newUser.updateModifiedAt(modificationAt.toLocaleDateString("pt-BR"));

    let transaction = await Collections.BuyerUserCollection?.replaceOne(
      { "props.userEmail": email },
      newUser
    );
    if (transaction?.modifiedCount == 0) {
      throw new Error("Operation falied");
    }
  }
}

export { MongoDBBuyerUserImplementation };

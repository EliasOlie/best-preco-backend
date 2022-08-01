import { Collections } from "../../dbal/mongo.service";
import { SellerUser, SellerUserDTO, ISellerUserDTO } from "../../domain/models/SellerUser";
import { ISellerUser } from "../../domain/repositories/SellerUserRepo";
import { ObjectId } from "mongodb";
import * as crypto from "crypto";

class MongoDBSellerUserImplementation implements ISellerUser {
  async createSellerUser(sUser: SellerUserDTO): Promise<void> {
    const salt = crypto.randomBytes(16).toString("hex");

    if (!sUser.id) {
      let payload = {
        ...sUser,
        createdAt: new Date(Date.now()).toLocaleDateString("pt-BR"),
        modifiedAt: new Date(Date.now()).toLocaleDateString("pt-BR"),
        userPassword: crypto
          .pbkdf2Sync(sUser.userPassword, salt, 1000, 64, "sha512")
          .toString("hex"),
        id: new ObjectId().toString(),
      };
      let user = new SellerUser(payload);
      const transaction = await Collections.SellerUserCollection?.insertOne(
        user
      );
      if (!transaction?.insertedId) {
        throw new Error("Operation falied");
      }
    } else {
      const transaction = await Collections.SellerUserCollection?.insertOne(
        new SellerUser({
          ...sUser,
          userPassword: crypto
            .pbkdf2Sync(sUser.userPassword, salt, 1000, 64, "sha512")
            .toString("hex"),
        })
      );
      if (!transaction?.insertedId) {
        throw new Error("Operation falied");
      }
    }
  }

  async deleteSellerUser(email: string): Promise<void> {
    const transaction =
      await Collections.SellerUserCollection?.findOneAndDelete({
        "props.userEmail": email,
      });
    if (!transaction) {
      throw new Error("Operation falied");
    }
  }

  async getAll(): Promise<SellerUser[]> {
    const users = await Collections.SellerUserCollection?.find(
      {}
    ).toArray() as unknown as SellerUser[];
    return users;
  }

  async readSellerUser(email: string): Promise<SellerUser | null> {
    const user = (await Collections.SellerUserCollection?.findOne(
      { "props.userEmail": email },
      { projection: { _id: 0 } }
    )) as unknown as SellerUser;
    return user;
  }

  async updateUserCnpj(user: ISellerUserDTO, newCnpj: string): Promise<void> {
    const email = user.props.userEmail;
    const newUser = new SellerUser(user.props);
    newUser.updateCnpj(newCnpj);
    let modificationAt = new Date(Date.now());
    newUser.updateModifiedAt(modificationAt.toLocaleDateString("pt-BR"));

    let transaction = await Collections.SellerUserCollection?.replaceOne(
      { "props.userEmail": email },
      newUser
    );
    if (transaction?.modifiedCount == 0) {
      throw new Error("Operation falied");
    }
  }

  async updateUserEmail(user: ISellerUserDTO, newEmail: string): Promise<void> {
    const email = user.props.userEmail;
    const newUser = new SellerUser(user.props);
    newUser.updateUserEmail(newEmail);
    let modificationAt = new Date(Date.now());
    newUser.updateModifiedAt(modificationAt.toLocaleDateString("pt-BR"));

    let transaction = await Collections.SellerUserCollection?.replaceOne(
      { "props.userEmail": email },
      newUser
    );
    if (transaction?.modifiedCount == 0) {
      throw new Error("Operation falied");
    }
  }

  async updateUserName(user: ISellerUserDTO, newName: string): Promise<void> {
    const email = user.props.userEmail;
    const newUser = new SellerUser(user.props);
    newUser.updateUserName(newName);
    let modificationAt = new Date(Date.now());
    newUser.updateModifiedAt(modificationAt.toLocaleDateString("pt-BR"));

    let transaction = await Collections.SellerUserCollection?.replaceOne(
      { "props.userEmail": email },
      newUser
    );
    if (transaction?.modifiedCount == 0) {
      throw new Error("Operation falied");
    }
  }

  async updateUserPassword(
    user: ISellerUserDTO,
    newPassword: string
  ): Promise<void> {
    const salt = crypto.randomBytes(16).toString("hex");
    const email = user.props.userEmail;
    const newUser = new SellerUser(user.props);
    const encryptedNewPassword = crypto
      .pbkdf2Sync(newPassword, salt, 1000, 64, "sha512")
      .toString("hex");
    newUser.updateUserPassword(encryptedNewPassword);
    let modificationAt = new Date(Date.now());
    newUser.updateModifiedAt(modificationAt.toLocaleDateString("pt-BR"));

    let transaction = await Collections.SellerUserCollection?.replaceOne(
      { "props.userEmail": email },
      newUser
    );
    if (transaction?.modifiedCount == 0) {
      throw new Error("Operation falied");
    }
  }
}

export { MongoDBSellerUserImplementation }

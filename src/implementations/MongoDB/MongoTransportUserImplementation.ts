import { TransportUser, TransportUserDTO, ITransportUserDTO } from "../../domain/models/TransportUser";
import { ITransportUser } from "../../domain/repositories/TransportUserRepo";
import { Collections } from "../../dbal/mongo.service";
import * as crypto from "crypto";
import { ObjectId } from "mongodb";
import { Vehicle } from "../../domain/models/Vehicle";

class MongoDBTransportUserImplementation implements ITransportUser {
  async createTransportUser(tUser: TransportUserDTO): Promise<void> {
    const salt = crypto.randomBytes(16).toString("hex");

    if (!tUser.id) {
      let payload = {
        ...tUser,
        createdAt: new Date(Date.now()).toLocaleDateString("pt-BR"),
        modifiedAt: new Date(Date.now()).toLocaleDateString("pt-BR"),
        userPassword: crypto
          .pbkdf2Sync(tUser.userPassword, salt, 1000, 64, "sha512")
          .toString("hex"),
        id: new ObjectId().toString(),
      };
      let user = new TransportUser(payload);
      const transaction = await Collections.TransportUserCollection?.insertOne(
        user
      );
      if (!transaction?.insertedId) {
        throw new Error("Operation falied");
      }
    } else {
      const transaction = await Collections.TransportUserCollection?.insertOne(
        new TransportUser({
          ...tUser,
          userPassword: crypto
            .pbkdf2Sync(tUser.userPassword, salt, 1000, 64, "sha512")
            .toString("hex"),
        })
      );
      if (!transaction?.insertedId) {
        throw new Error("Operation falied");
      }
    } 
  }

  async deleteTransportUser(email: string): Promise<void> {
    const transaction = await Collections.TransportUserCollection?.findOneAndDelete({"props.userEmail": email})

    if (!transaction) {
      throw new Error("Operation failed!")
    }
  }

  async getAll(): Promise<TransportUserDTO[]> {
    const Users = await Collections.TransportUserCollection?.find({}).toArray() as unknown as TransportUserDTO[]
    return Users
  }

  async readTransportUser(email: string): Promise<ITransportUserDTO | null> {
    return Collections.TransportUserCollection?.findOne({"props.userEmail": email}, {projection: {_id: 0}}) as unknown as ITransportUserDTO
  }

  async updateTransportUserCNH(user: ITransportUserDTO, newCNH: string): Promise<void> {
    const email = user.props.userEmail
    let nUser = new TransportUser(user.props)
    nUser.updateCnh(newCNH)
    let modificatedAt = new Date(Date.now())
    nUser.updateModifiedAt(modificatedAt.toLocaleDateString("pt-BR"))

    const transaction = await Collections.TransportUserCollection?.replaceOne({"props.userEmail": email}, nUser)

    if(transaction?.modifiedCount === 0) {
      throw new Error("Operation falied!")
    }
  
  }

  async updateTransportUserEmail(user: ITransportUserDTO, newEmail: string): Promise<void> {
    const email = user.props.userEmail
    let nUser = new TransportUser(user.props)
    nUser.updateUserEmail(newEmail)
    let modificatedAt = new Date(Date.now())
    nUser.updateModifiedAt(modificatedAt.toLocaleDateString("pt-BR"))

    const transaction = await Collections.TransportUserCollection?.replaceOne({"props.userEmail": email}, nUser)

    if(transaction?.modifiedCount === 0) {
      throw new Error("Operation falied!")
    }
    
  }

  async updateTransportUserName(user: ITransportUserDTO, newName: string): Promise<void> {
    const email = user.props.userEmail
    let nUser = new TransportUser(user.props)
    nUser.updateUserName(newName)
    let modificatedAt = new Date(Date.now())
    nUser.updateModifiedAt(modificatedAt.toLocaleDateString("pt-BR"))

    const transaction = await Collections.TransportUserCollection?.replaceOne({"props.userEmail": email}, nUser)

    if(transaction?.modifiedCount === 0) {
      throw new Error("Operation falied!")
    }
  }

  async updateTransportUserPassword(user: ITransportUserDTO, newPassword: string): Promise<void> {
    const salt = crypto.randomBytes(16).toString("hex");
    const encryptedNewPassword = crypto
    .pbkdf2Sync(newPassword, salt, 1000, 64, "sha512")
    .toString("hex")

    const email = user.props.userEmail
    let nUser = new TransportUser(user.props)
    nUser.updateUserPassword(encryptedNewPassword)
    let modificatedAt = new Date(Date.now())
    nUser.updateModifiedAt(modificatedAt.toLocaleDateString("pt-BR"))

    const transaction = await Collections.TransportUserCollection?.replaceOne({"props.userEmail": email}, nUser)

    if(transaction?.modifiedCount === 0) {
      throw new Error("Operation falied!")
    }
  }

  async addVehicleToTransportUser(user: ITransportUserDTO, vehicle: Vehicle): Promise<void> {
    const email = user.props.userEmail
    let nUser = new TransportUser(user.props)
    nUser.addVehicle(vehicle)
    let modificatedAt = new Date(Date.now())
    nUser.updateModifiedAt(modificatedAt.toLocaleDateString("pt-BR"))

    const transaction = await Collections.TransportUserCollection?.replaceOne({"props.userEmail": email}, nUser)

    if(transaction?.modifiedCount === 0) {
      throw new Error("Operation falied!")
    }
  }
}

export { MongoDBTransportUserImplementation }
import { ITransportUser } from "../../../repositories/TransportUserRepo";

class ReadTransportUserCase {
  constructor(private transportUserRepo: ITransportUser) {}

  async handle(email: string) {
    const user = await this.transportUserRepo.readTransportUser(email)

    if(!user) {
      throw new Error("This user does not exists!")
    }

    return user
  }
}

export { ReadTransportUserCase }
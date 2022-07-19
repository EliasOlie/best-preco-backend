import { BuyerUser } from "./BuyerUser";

describe("Buyer user tests", () => {
    let validPayload =  {
    id: "123",
    userName: "Elias",
    userEmail: "a@b.com",
    userPassword: "1234",
    createdAt: "10/11/2011",
    modifiedAt: "10/11/2011",
    cpf: "391.360.920-29",
  };
  test("Constructor", () => {
    const newUser = new BuyerUser(validPayload)
    expect(newUser.User).toStrictEqual(validPayload)
  })
  test("Constructor fail", () => {
    let invalidPayload =  {
        id: "123",
        userName: "Elias",
        userEmail: "a@b.com",
        userPassword: "1234",
        createdAt: "10/11/2011",
        modifiedAt: "10/11/2011",
        cpf: "123.456.789-01",
      };
    expect(() => {
        new BuyerUser(invalidPayload)
    }).toThrow("Invalid CPF")
  })  

})
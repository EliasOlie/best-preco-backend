import { SellerUser } from "./SellerUser";

describe("SellerUser Tests", () => {
  let validPayload = {
    id: "123",
    userName: "Elias",
    userEmail: "a@b.com",
    userPassword: "1234",
    createdAt: "10/11/2011",
    modifiedAt: "10/11/2011",
    cnpj: "62.311.654/0001-93",
  };
  test("Constructor valid CNPJ", () => {
    new SellerUser(validPayload);
  });
  test("Constructor invalid CNPJ", () => {
    let invalidPayload = {
      id: "123",
      userName: "Elias",
      userEmail: "a@b.com",
      userPassword: "1234",
      createdAt: "10/11/2011",
      modifiedAt: "10/11/2011",
      cnpj: "11.222.333/0001-01",
    };
    const t = () => {
      new SellerUser(invalidPayload);
    };
    expect(t).toThrow("Invalid CNPJ");
  });
});

import { SellerUser } from "./SellerUser"

describe('SellerUser Tests', () => {
  let validPayload = {
    "id": "123",
    "userName": "Elias",
    "userEmail": "a@b.com",
    "userPassword": "1234",
    "createdAt": "10/11/2011",
    "modifiedAt": "10/11/2011",
    "cnpj": "62.311.654/0001-93"
  }
  test("Constructor valid CNPJ", () => {
    new SellerUser(validPayload)
  })
  test("Constructor invalid CNPJ", () =>{
    let payload = {
      "id": "123",
      "userName": "Elias",
      "userEmail": "a@b.com",
      "userPassword": "1234",
      "createdAt": "10/11/2011",
      "modifiedAt": "10/11/2011",
      "cnpj": "11.222.333/0001-01"
    }
    const t = () => {
      new SellerUser(payload)
    }
    expect(t).toThrow("Invalid CNPJ")
  })

  describe("Update methods", () => {
    let newUser = new SellerUser(validPayload)
    test("Update user name", () => {
      newUser.updateUserName("Eliax")
      expect(newUser.getUserName === "Eliax")
    })

    test("Update user email", () => {
      newUser.updateUserEmail("a@c.com")
      expect(newUser.getUserEmail === "a@c.co")
    })

    test("Update user password", () => {
      newUser.updateUserPassword("123")
      expect(newUser.getUserPassword === "123")
    })

    test("Update user modified at", () => {
      newUser.updateModifiedAt("10/01/2022")
      expect(newUser.getUserModifiedAt === "10/01/2022")
    })

    test("Update user name fail", () => {
      expect(() => {newUser.updateUserName("Eliax")}).toThrow("You need to supply a new name, not the same")
    })
    test("Update user email fail", () => {
      expect(() => {newUser.updateUserEmail("a@c.com")}).toThrow("You need to supply a new email, not the same")
    })
    test("Update user password fail", () => {
      expect(() => {newUser.updateUserPassword("123")}).toThrow("You need to supply a new password, not the same")
    })
  })
})
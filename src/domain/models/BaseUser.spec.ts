import { BaseUser, BaseUserDTO } from "./BaseUser";


describe("Base user", () => {
  const validPayload: BaseUserDTO = {
    id: "123",
    userName: "Elias",
    userEmail: "a@b.com",
    userPassword: "1234",
    createdAt: "10/11/2011",
    modifiedAt: "10/11/2011",
  };
  let newUser = new BaseUser(validPayload);

  test("Update user name", () => {
    newUser.updateUserName("Eliax");
    expect(newUser.userName === "Eliax");
  });

  test("Update user email", () => {
    newUser.updateUserEmail("a@c.com");
    expect(newUser.userEmail === "a@c.co");
  });

  test("Update user password", () => {
    newUser.updateUserPassword("123");
    expect(newUser.userPassword === "123");
  });

  test("Update user modified at", () => {
    newUser.updateModifiedAt("10/01/2022");
    expect(newUser.modifiedAt === "10/01/2022");
  });

  test("Update user name fail", () => {
    expect(() => {
      newUser.updateUserName(newUser.userName);
    }).toThrow("You need to supply a new name, not the same");
  });
  test("Update user email fail", () => {
    expect(() => {
      newUser.updateUserEmail(newUser.userEmail);
    }).toThrow("You need to supply a new email, not the same");
  });
  test("Update user password fail", () => {
    expect(() => {
      newUser.updateUserPassword(newUser.userPassword);
    }).toThrow("You need to supply a new password, not the same");
  });
});

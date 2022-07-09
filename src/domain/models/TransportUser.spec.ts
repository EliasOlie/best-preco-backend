import { TransportUser, TransportUserDTO } from "./TransportUser";
import { IVehicleDTO } from "./Vehicle";

const validPayload: TransportUserDTO = {
  id: "123",
  userName: "Elias",
  userEmail: "a@b.com",
  userPassword: "1234",
  createdAt: "10/11/2011",
  modifiedAt: "10/11/2011",
  cpf: "391.360.920-29",
  cnh: "123.456",
  vehicles: []
};

const vehiclePayload: IVehicleDTO = {
    ano: "2022",
    modelo: "Fiat Lux",
    placa: "ABC1D23",
    carro: true
}

const vehicleInvalidPayload: IVehicleDTO = {
    ano: "2022",
    modelo: "Fiat Lux",
    placa: "ABCD123",
    carro: true
}

describe("Constructor", () => {
  const newUser = new TransportUser(validPayload);
  expect(newUser.User).toStrictEqual(validPayload);
});

describe("Update methods", () => {
  let user = new TransportUser(validPayload);
  test("Update CNH fail", () => {
    expect(() => {
      user.updateCnh("123.456");
    }).toThrow();
  });
  test("Update CNH success", () => {
    user.updateCnh("789.012");
    expect(user.cnh).toBe("789.012");
  });

  test("Insert a new vehicle success", () => {
    user.addVehicle(vehiclePayload)
    expect(user.vehicles?.length).toBe(1)
  })

  test("Insert new vehicles fail invalid placa", () => {
    expect(() => {user.addVehicle(vehicleInvalidPayload)}).toThrow()
  })

});

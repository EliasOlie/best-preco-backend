import { IVehicleDTO, Vehicle } from "./Vehicle";

describe("Vehicle test suite cases", () => {
  const carroPayload: IVehicleDTO = {
    placa: "ABC1D23",
    modelo: "Fiat Lux",
    ano: "2020",
    carro: true,
  };

  const carroPayloadInvalid: IVehicleDTO = {
    placa: "AB1CD23",
    modelo: "Fiat Lux",
    ano: "2020",
    carro: true,
  };

  const motoPayload: IVehicleDTO = {
    placa: "ABC1D23",
    modelo: "Honda Bros",
    ano: "2021",
    moto: true,
  };

  const motoPayloadInvalid: IVehicleDTO = {
    placa: "AB1CD23",
    modelo: "Honda Bros",
    ano: "2021",
    moto: true,
  };

  let Carro = new Vehicle(carroPayload);
  let CarroPayload = Object.assign({}, carroPayload, Carro.vehicle);

  let Moto = new Vehicle(motoPayload);
  let MotoPayload = Object.assign({}, motoPayload, Moto.vehicle);

  test("Vehicle carro constructor", () => {
    expect(Carro.vehicle).toStrictEqual(CarroPayload);
  });
  test("Is carro moto? Should not!", () => {
    expect(Carro.moto).toBe(false);
  });
  test("Placa carro validity", () => {
    expect(() => {
      new Vehicle(carroPayloadInvalid);
    }).toThrow();
  });

  test("Vehicle moto constructor", () => {
    expect(Moto.vehicle).toStrictEqual(MotoPayload);
  });

  test("Is moto carro? Should not!", () => {
    expect(Moto.carro).toBe(false);
  });

  test("Placa moto validity", () => {
    expect(() => {
      new Vehicle(motoPayloadInvalid);
    }).toThrow();
  });

  test("Update Placa fail same placa", () => {
    expect(() => {
      Carro.updatePlaca("ABC1D23");
    }).toThrow();
  });

  test("Update Placa success", () => {
    Carro.updatePlaca("ABC1D24");
    expect(Carro.placa).toBe("ABC1D24");
  });

  test("Update modelo fail", () => {
    expect(() => {
      Carro.updateModelo("Fiat Lux");
    }).toThrow("You need to supply a new modelo, not the same");
  });

  test("Update modelo success", () => {
    Carro.updateModelo("Marea pegando fogo");
    expect(Carro.modelo).toBe("Marea pegando fogo");
  });
});

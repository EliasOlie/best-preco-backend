import { TransportUser, TransportUserDTO } from "./TransportUser";

const validPayload: TransportUserDTO = {
  id: "123",
  userName: "Elias",
  userEmail: "a@b.com",
  userPassword: "1234",
  createdAt: "10/11/2011",
  modifiedAt: "10/11/2011",
  cpf: "391.360.920-29",
  cnh: "123.456",
  placa: "AAA4A53",
  modelo: "Fiat Uno com escada",
};

const invalidPayload: TransportUserDTO = {
  id: "123",
  userName: "Elias",
  userEmail: "a@b.com",
  userPassword: "1234",
  createdAt: "10/11/2011",
  modifiedAt: "10/11/2011",
  cpf: "391.360.920-29",
  cnh: "123.456",
  placa: "A5A4A53",
  modelo: "Fiat Uno com escada",
};

const placaValidPayload: TransportUserDTO = {
    id: "123",
    userName: "Elias",
    userEmail: "a@b.com",
    userPassword: "1234",
    createdAt: "10/11/2011",
    modifiedAt: "10/11/2011",
    cpf: "391.360.920-29",
    cnh: "123.456",
    placa: "AAA4A53",
    modelo: "Fiat Uno com escada",
    isValidPlaca: true
}; 

describe("Constructor validation", () => {
    test("Constructor valid withou isValidPlaca property", () => {
        const nUser = new TransportUser(validPayload)
        expect(nUser).toBeInstanceOf(TransportUser)
        expect(nUser.getIsValidPlaca).toBe(false)
    })
    test("Constructor valid with isValidPlaca property", () => {
        
        const nUser = new TransportUser(placaValidPayload)
        expect(nUser.getIsValidPlaca).toBe(true)
    }),
    test("Constructor invalid placa", () => {
        const test = () => {
            new TransportUser(invalidPayload)
        }

        expect(test).toThrow("Your placa is invalid or/and outdated")
    })
});

describe("Update methods", () => {
    let user = new TransportUser(validPayload)
    let validPlacaUser = new TransportUser(placaValidPayload)
    test("Update CNH fail", () => {
        expect(() => {
            user.updateCnh("123.456")
        }).toThrow()
    })
    test("Update CNH success", () => {
        user.updateCnh("789.012")
        expect(user.getCnh).toBe("789.012")
    })
    
    test("Update Placa fail same placa", () => {
        expect(() => {
            validPlacaUser.updatePlaca("AAA4A53")
        }).toThrow("You need to inform a different placa")
    })
    test("Update Placa fail invalid placa", () => {
        expect(() => {
            validPlacaUser.updatePlaca("A5A4A53")
        }).toThrow("Your placa is inválid or outdated")
    })
    test("Update Placa fail placa not verified", () => {
        expect(() => {
            user.updatePlaca("AAA4A53")
        }).toThrow("You need a verified placa to be able to change your placa")
    })
    
    test("Update Placa success", () => {
        validPlacaUser.updatePlaca("ABC1D23")
        expect(validPlacaUser.getPlaca).toBe("ABC1D23")
    })

    test("Update modelo fail", () => {
        expect(() => {
            user.updateModelo("Fiat Uno com escada")
        }).toThrow("You need to supply a new modelo, not the same")
    })

    test("Update modelo success", () => {
        user.updateModelo("Marea pegando fogo")
        expect(user.getModelo).toBe("Marea pegando fogo")
    })

})
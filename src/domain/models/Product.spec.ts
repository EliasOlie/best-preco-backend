import { Product, IProductDTO } from "./Product"

describe("Product Tests", () => {

  const productPayload:IProductDTO = {
    owner: "Elias",
    branding: "Nescafe",
    name: "'Café' soluvel",
    price: 7.99,
    validDate: "15/08/2025"
  }

  let testProduct = new Product(productPayload)

  test("Product constructor", () => {
    expect(testProduct.Product).toStrictEqual(productPayload)
  })

  test("Product change name fail", () => {
    expect(() => testProduct.updateName("'Café' soluvel")).toThrow()
  })

  test("Product change name success", () => {
    testProduct.updateName('"Café" solúvel')
    expect(testProduct.name).toBe('"Café" solúvel')
  })
  test("Product change branding fail", () => {
    expect(() => testProduct.updateBranding("Nescafe")).toThrow()
  })

  test("Product change branding success", () => {
    testProduct.updateBranding("Nescafé")
    expect(testProduct.branding).toBe("Nescafé")
  })

  test("Product change price", () => {
    testProduct.updatePrice(7.50)
    expect(testProduct.price).toBe(7.50)
  })

  test("Product change valid date", () => {
    testProduct.updateValidDate("15/09/2025")
    expect(testProduct.validDate).toBe("15/09/2025")
  })

})
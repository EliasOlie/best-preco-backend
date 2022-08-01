import { BaseUser, BaseUserDTO } from "./BaseUser";

interface IBuyerUserDTO {
  props: BuyerUserDTO
}

class BuyerUserDTO extends BaseUserDTO {
  cpf: string;
}

class BuyerUser extends BaseUser {
  protected props: BuyerUserDTO;

  constructor(props: BuyerUserDTO) {
    super(props);
    if (this.isCpfValid(props.cpf)) {
      this.props = props
    } else {
      throw new Error("Invalid CPF");
    }
  }

  public get cpf() {
    return this.props.cpf;
  }
  //CPF Wont change
  private isCpfValid(cpf: any) {
    //https://gist.github.com/joaohcrangel/8bd48bcc40b9db63bef7201143303937?permalink_comment_id=3781326#gistcomment-3781326
    if (typeof cpf !== "string") return false;
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
    cpf = cpf.split("");
    const validator = cpf
      .filter(
        (digit: number, index: number, array: Array<number>) =>
          index >= array.length - 2 && digit
      )
      .map((el: number) => +el);
    const toValidate = (pop: number) =>
      cpf
        .filter(
          (digit: number, index: number, array: Array<number>) =>
            index < array.length - pop && digit
        )
        .map((el: number) => +el);
    const rest = (count: number, pop: number) =>
      ((toValidate(pop).reduce(
        (soma: number, el: number, i: number) => soma + el * (count - i),
        0
      ) *
        10) %
        11) %
      10;
    return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1]);
  }
  public get User() {
    return this.props
  }
}

export { BuyerUser, BuyerUserDTO, IBuyerUserDTO };

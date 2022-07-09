class BaseUserDTO {
  id: string;
  userName: string;
  userEmail: string;
  userPassword: string;
  createdAt: string;
  modifiedAt: string;
}
class BaseUser {
  private props: BaseUserDTO

  public constructor(props: BaseUserDTO) {
    this.props = props
  }

  public get getId() {
    return this.props.id;
  }

  public get userName() {
    return this.props.userName;
  }

  public updateUserName(newName: string) {
    if (this.props.userName.toLocaleLowerCase() !== newName.toLocaleLowerCase()) {
      this.props.userName = newName;
    } else {
      throw new Error("You need to supply a new name, not the same");
    }
  }

  public get userEmail() {
    return this.props.userEmail;
  }

  public updateUserEmail(newEmail: string) {
    if (this.props.userEmail.toLocaleLowerCase() !== newEmail.toLocaleLowerCase()) {
      this.props.userEmail = newEmail;
    } else {
      throw new Error("You need to supply a new email, not the same");
    }
  }

  public get userPassword() {
    return this.props.userPassword;
  }

  public updateUserPassword(newPassword: string) {
    if (
      this.props.userPassword.toLocaleLowerCase() !== newPassword.toLocaleLowerCase()
    ) {
      this.props.userPassword = newPassword;
    } else {
      throw new Error("You need to supply a new password, not the same");
    }
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get modifiedAt() {
    return this.props.modifiedAt;
  }

  public updateModifiedAt(newDate: string) {
    this.props.modifiedAt = newDate;
  }

  public get User() {
    return this.props
  }
}

export { BaseUser, BaseUserDTO };
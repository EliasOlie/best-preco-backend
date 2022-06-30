class BaseUser {
  private readonly id: string;
  private userName: string;
  private userEmail: string;
  private userPassword: string;
  private createdAt: string;
  private modifiedAt: string;

  public constructor(props: BaseUserDTO) {
    Object.assign(this, props);
  }

  public get getId() {
    return this.id;
  }

  public get getUserName() {
    return this.userName;
  }

  public updateUserName(newName: string) {
    if (this.userName.toLocaleLowerCase() !== newName.toLocaleLowerCase()) {
      this.userName = newName;
    } else {
      throw new Error("You need to supply a new name, not the same");
    }
  }

  public get getUserEmail() {
    return this.userEmail;
  }

  public updateUserEmail(newEmail: string) {
    if (this.userEmail.toLocaleLowerCase() !== newEmail.toLocaleLowerCase()) {
      this.userEmail = newEmail;
    } else {
      throw new Error("You need to supply a new email, not the same");
    }
  }

  public get getUserPassword() {
    return this.userPassword;
  }

  public updateUserPassword(newPassword: string) {
    if (
      this.userPassword.toLocaleLowerCase() !== newPassword.toLocaleLowerCase()
    ) {
      this.userPassword = newPassword;
    } else {
      throw new Error("You need to supply a new password, not the same");
    }
  }

  public get getUserCreatedAt() {
    return this.createdAt;
  }

  public get getUserModifiedAt() {
    return this.modifiedAt;
  }

  public updateModifiedAt(newDate: string) {
    this.modifiedAt = newDate;
  }
}

class BaseUserDTO {
  id: string;
  userName: string;
  userEmail: string;
  userPassword: string;
  createdAt: string;
  modifiedAt: string;
}

export { BaseUser, BaseUserDTO };

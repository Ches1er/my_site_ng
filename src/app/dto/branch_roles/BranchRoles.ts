export class BranchRoles {


  constructor(private pId: number, private pRole: string) {
  }

  get id(): number {
    return this.pId;
  }

  set id(value: number) {
    this.pId = value;
  }

  get role(): string {
    return this.pRole;
  }

  set role(value: string) {
    this.pRole = value;
  }
  public static fromJson(jsonObj: any): BranchRoles {
    return new BranchRoles(jsonObj.id, jsonObj.role);
  }
}

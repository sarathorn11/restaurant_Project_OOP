export enum Gender{
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export abstract class Person{
    protected phone?: number;

  constructor(
    protected id:number,
    protected name: string,
    protected age: number,
    protected gender: Gender
  ) {}

  setPhone(phone: number) {
    this.phone = phone;
  }

  abstract getName():string;
  abstract getAge():number;
  abstract getGender():Gender;
}
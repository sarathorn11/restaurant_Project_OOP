export class DateTime {
  constructor(
    public day: number,
    public month: number,
    public year: number,
    public time: number
  ) {}

  isEqual(other: DateTime): boolean {
    return (
      this.day === other.day &&
      this.month === other.month &&
      this.year === other.year &&
      this.time === other.time
    );
  }
}

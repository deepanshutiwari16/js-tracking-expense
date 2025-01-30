export class Cash {
  #dollor;
  #cent;

  constructor(dollor, cent) {
    this.#dollor = dollor;
    this.#cent = cent;
  }

  static parse(expense) {
    const [dollor, cent] = expense.toFixed(2).split(".");

    return new Cash(parseInt(dollor), parseInt(cent));
  }

  add(other) {
    const totalCents = this.#cent + other.#cent;
    const totalDollor =
      this.#dollor + other.#dollor + Math.floor(totalCents / 100);

    return new Cash(totalDollor, totalCents % 100);
  }

  toString() {
    return `${this.#dollor}.${this.#cent.toString().padStart(2, "0")}`;
  }
}

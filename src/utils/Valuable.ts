export abstract class Valuable {
  protected static getPrice(value: number): number {
    return parseFloat((value / 100).toFixed(2));
  }

  protected static setPrice(value: number): number {
    return Math.ceil(value * 100);
  }
}

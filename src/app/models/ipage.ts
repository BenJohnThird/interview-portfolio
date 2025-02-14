export class IPage<T> {
  public itemsFrom!: number;
  public itemsTo!: number;
  public totalItemsCount!: number;
  public items!: T[];
}

type CartItem = { name: string; price: number };
type OrderStatus = "open" | "closed";

export class ShoppinCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = "open";

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get item(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log("Seu carrinho está vazio");
      return;
    }

    this._orderStatus = "closed";
    this.sendMessage(`seu pedido com total ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log("mensagem enviada: ", msg);
  }

  saveOrder(): void {
    console.log("Pedido salvo com sucesso!");
  }

  clear(): void {
    console.log("Carrinho de compra foi limpo...");
    this._items.length = 0;
  }
}

const shoppinCart = new ShoppinCart();
shoppinCart.addItem({ name: "Camiseta", price: 49.9 });
shoppinCart.addItem({ name: "Caderno", price: 50.9 });
shoppinCart.addItem({ name: "Lapis", price: 1.5 });

console.log(shoppinCart.item);
console.log(shoppinCart.total());
console.log(shoppinCart.orderStatus);
shoppinCart.checkout();
console.log(shoppinCart.orderStatus);
import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppinCart } from "./classes/shopping-cart";
import { NoDiscount, TenPercentDiscount } from "./classes/discount";

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppinCart = new ShoppinCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppinCart, messaging, persistency);

shoppinCart.addItem(new Product("Camiseta", 49.9));
shoppinCart.addItem(new Product("Caderno", 50.9));
shoppinCart.addItem(new Product("Lapis", 1.5));

console.log(shoppinCart.item);
console.log(shoppinCart.total());
console.log(shoppinCart.totalWithDiscount());
console.log(order.orderStatus);

order.checkout();

console.log(order.orderStatus);

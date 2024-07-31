import { Messaging } from "./services/messaging";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";
import { ShoppinCart } from "./entities/shopping-cart";

const shoppinCart = new ShoppinCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppinCart, messaging, persistency);

shoppinCart.addItem(new Product("Camiseta", 49.9));
shoppinCart.addItem(new Product("Caderno", 50.9));
shoppinCart.addItem(new Product("Lapis", 1.5));

console.log(shoppinCart.item);
console.log(shoppinCart.total());
console.log(order.orderStatus);

order.checkout();

console.log(order.orderStatus);

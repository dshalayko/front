import { IProduct } from "../globalTypes";

export function getPriceAccordingToQuantity(product: IProduct, quantity: number): number{
    let finalPrice = 0;
    const price = product.price;
    if(quantity >= price[0].quantity && quantity < price[1].quantity) {
        finalPrice = price[0].amount;
    } else if (quantity >= price[1].quantity && quantity < price[2].quantity) {
        finalPrice = price[1].amount;
    } else if (quantity >= price[2].quantity && quantity < price[3].quantity) {
        finalPrice = price[2].amount;
    } else if (quantity >= price[3].quantity) {
        finalPrice = price[3].amount;
    } else {
        finalPrice = price[0].amount;
    }
    return finalPrice;
}
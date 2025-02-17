export class Product {
  constructor(
    id,
    name,
    description,
    price,
    photos,
    sku,
    barcode,
    quantity,
    category,
    status
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.photos = photos;
    this.sku = sku;
    this.barcode = barcode;
    this.quantity = quantity;
    this.category = category;
    this.status = status;
    this.products = [];
  }
}

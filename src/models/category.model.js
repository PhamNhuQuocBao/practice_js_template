export class Category {
  constructor(id, name, description, photos) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.photos = photos;
    this.categories = [];
  }
}

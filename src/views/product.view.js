export class ProductView {
  constructor() {
    this.render();
  }

  render() {
    document.querySelector(".content").innerHTML = `<div><h1>Hello, Product!</h1></div>`;
  }
}

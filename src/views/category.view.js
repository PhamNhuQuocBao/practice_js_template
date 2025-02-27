export class CategoryView {
  constructor() {
    this.render();
  }

  render() {
    document.querySelector(".content").innerHTML = `<div><h1>Hello, Category!</h1></div>`;
  }
}

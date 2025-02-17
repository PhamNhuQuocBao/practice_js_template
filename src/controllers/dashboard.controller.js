export class DashboardController {
  constructor(view) {
    this.view = view;
  }

  render() {
    this.view.render();
  }
}

import Layout from "../views/layouts/layout";

export class Router {
  constructor(routes) {
    this.routes = routes;
    this.loadInitialRoute();
    window.addEventListener("popstate", () => this.loadRoute());
  }

  loadInitialRoute() {
    this.loadRoute(location.pathname);
  }

  navigate(path) {
    history.pushState({}, "", path);
    this.loadRoute(path);
  }

  loadRoute(path = location.pathname) {
    const route = this.routes.find((r) => r.path === path);
    if (route) {
      document.querySelector("#app").innerHTML = Layout();
      new route.controller(new route.view());
    } else {
      document.getElementById("app").innerHTML = "<h2>404 Not Found</h2>";
    }
  }
}

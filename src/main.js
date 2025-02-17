import { CategoryController } from "./controllers/category.controller";
import { DashboardController } from "./controllers/dashboard.controller";
import { ProductController } from "./controllers/product.controller";
import { Router } from "./routes";
import { DashboardView } from "./views/dashboard.view";
import { ProductView } from "./views/product.view";
import { CategoryView } from "./views/category.view";

const routes = [
  { path: "/", controller: DashboardController, view: DashboardView },
  { path: "/product", controller: ProductController, view: ProductView },
  { path: "/category", controller: CategoryController, view: CategoryView },
];

new Router(routes);

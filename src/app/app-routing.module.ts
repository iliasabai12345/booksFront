import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from "src/app/pages/cart/cart.component";
import {CartEnum} from "src/app/pages/cart/cart.enum";
import {CategoryComponent} from "src/app/pages/category/category.component";
import {CategoryEnum} from "src/app/pages/category/category.enum";
import {ProductDetailComponent} from "src/app/pages/product-detail/product-detail.component";
import {ProductDetailEnum} from "src/app/pages/product-detail/product-detail.enum";
import {MainComponent} from "./pages/main/main.component";
import {MainEnum} from "./pages/main/main.enum.ts";

const routes: Routes = [
  {path: MainEnum.Route, component: MainComponent},
  {path: CategoryEnum.Route, component: CategoryComponent},
  {path: ProductDetailEnum.Route, component: ProductDetailComponent},
  {path: CartEnum.Route, component: CartComponent},
  {path: '**', redirectTo: '/' + MainEnum.Route},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

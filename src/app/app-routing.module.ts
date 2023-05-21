import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from "src/app/pages/category/category.component";
import {CategoryEnum} from "src/app/pages/category/category.enum";
import {MainComponent} from "./pages/main/main.component";
import {MainEnum} from "./pages/main/main.enum.ts";

const routes: Routes = [
  {path: MainEnum.Route, component: MainComponent},
  {path: CategoryEnum.Route, component: CategoryComponent},
  {path: '**', redirectTo: '/' + MainEnum.Route},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

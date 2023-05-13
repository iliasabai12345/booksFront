import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {MainEnum} from "./pages/main/main.enum.ts";

const routes: Routes = [
  {path: MainEnum.Route, component: MainComponent},
  {path: '**', redirectTo: '/' + MainEnum.Route},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

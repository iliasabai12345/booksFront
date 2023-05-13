import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {LanguageButtonComponent} from "src/app/components/buttons/language-button/language-button.component";



@NgModule({
  declarations: [LanguageButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports:[LanguageButtonComponent]
})
export class LanguageButtonModule { }

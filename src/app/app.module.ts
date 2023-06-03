import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TabComponent } from "./tab/tab.component";
import { TabContentDirective } from "./tab/tab-content.directive";
import { ModalComponent } from "./modal/modal.component";
import { FormsModule } from "@angular/forms";
import { Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { TabContentComponent } from "./tab-content/tab-content.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabContentDirective,
    ModalComponent,
    TabContentComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}

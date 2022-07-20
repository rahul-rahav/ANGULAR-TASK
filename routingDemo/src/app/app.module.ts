import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdListComponent } from './prod-list/prod-list.component';


@NgModule({
  imports: [BrowserModule,
    AppRoutingModule,
  ],
    declarations: [
      AppComponent,
      HomeComponent,
      ProdListComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}

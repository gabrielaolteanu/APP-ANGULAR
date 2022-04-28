import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DashboardModule } from './modules/dashboard/pages/dashboard.module';
import { AuthIncterceptor } from './core/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
     DashboardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthIncterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

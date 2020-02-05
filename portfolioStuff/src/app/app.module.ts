import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FinishedWorkComponent } from './pages/finished-work/finished-work.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './body/header/header.component';
import { MainComponent } from './body/main/main.component';
import { FooterComponent } from './body/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    FinishedWorkComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

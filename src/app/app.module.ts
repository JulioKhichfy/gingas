import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SendEmailService } from './send-email.service';
import { InstitutoComponent } from './instituto/instituto.component';
import { DindowndownComponent } from './dindowndown/dindowndown.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DoacaoComponent,
    InstitutoComponent,
    DindowndownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    SendEmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

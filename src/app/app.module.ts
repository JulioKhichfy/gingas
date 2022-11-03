import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyVideosComponent } from './body-videos/body-videos.component';

import * as $ from 'jquery';
import { BodySejaComponent } from './body-seja/body-seja.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { AulaCapoeiraComponent } from './aula-capoeira/aula-capoeira.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyVideosComponent,
    BodySejaComponent,
    HomeComponent,
    FooterComponent,
    DoacaoComponent,
    AulaCapoeiraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuTituloComponent } from './components/menu-titulo/menu-titulo.component';
import { CardGrandeComponent } from './components/card-grande/card-grande.component';
import { CardPequenoComponent } from './components/card-pequeno/card-pequeno.component';
import { InicioComponent } from './pages/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuTituloComponent,
    CardGrandeComponent,
    CardPequenoComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

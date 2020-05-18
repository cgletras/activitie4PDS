import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComprasComponent } from './compras/compras.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    ComprasComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CarrinhoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

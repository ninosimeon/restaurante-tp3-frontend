import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AlmacenService } from './providers/almacen.service';
import { ProductoService } from './providers/producto.service';
import { NotaPedidoService } from './providers/nota-pedido.service';
import { ApiService } from './providers/api.service';

import { AppComponent } from './app.component';
import { NotaPedidoModule } from './nota-pedido/nota-pedido.module';
import { SolicitudCotizacionModule } from './solicitud-cotizacion/solicitud-cotizacion.module';

import { AppRoutingModule } from './app.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    NotaPedidoModule,
    SolicitudCotizacionModule,
    AppRoutingModule
  ],
  providers: [
    AlmacenService,
    ProductoService,
    NotaPedidoService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

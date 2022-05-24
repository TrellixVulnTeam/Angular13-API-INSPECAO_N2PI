import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InspecaoComponent } from './inspecao/inspecao.component';
import { MostrarInspecaoComponent } from './inspecao/mostrar-inspecao/mostrar-inspecao.component';
import { AdicionarEditarInspecaoComponent } from './inspecao/adicionar-editar-inspecao/adicionar-editar-inspecao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InspecaoApiService } from '../services/inspecao-api.service';

@NgModule({
  declarations: [
    AppComponent,
    InspecaoComponent,
    MostrarInspecaoComponent,
    AdicionarEditarInspecaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InspecaoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

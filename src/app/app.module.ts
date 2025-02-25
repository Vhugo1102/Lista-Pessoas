import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPessoasComponent } from './components/lista-pessoas/lista-pessoas.component';
import { FormPessoaComponent } from './components/form-pessoa/form-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPessoasComponent,
    FormPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPessoasComponent } from './components/lista-pessoas/lista-pessoas.component';
import { FormPessoaComponent } from './components/form-pessoa/form-pessoa.component';

const routes: Routes = [
  { path: '', component: ListaPessoasComponent }, // Página inicial - Lista de pessoas
  { path: 'cadastro', component: FormPessoaComponent }, // Cadastro de nova pessoa
  { path: 'editar/:id', component: FormPessoaComponent } // Edição de pessoa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa } from 'src/app/models/pessoa';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss']
})
export class ListaPessoasComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas(): void {
    this.pessoaService.getPessoas().subscribe((dados) => {
      this.pessoas = dados;
    }, error => {
      console.error('Erro ao carregar lista:', error);
    });
  }


  excluirPessoa(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
      this.pessoaService.deletePessoa(id).subscribe(() => {
        this.carregarPessoas(); // Atualiza a lista após excluir
      });
    }
  }
}

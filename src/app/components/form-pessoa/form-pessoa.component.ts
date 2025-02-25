import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa } from 'src/app/models/pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { ViaCepService } from 'src/app/services/via-cep.service';

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.scss']
})
export class FormPessoaComponent implements OnInit {
  pessoaForm!: FormGroup;
  pessoaId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoaService,
    private viaCepService: ViaCepService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    // Criar estrutura do formulário
    this.pessoaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cep: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      ativo: [true]
    });

    // Verificar se há um ID na URL para edição
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.pessoaId = +id;
        this.carregarPessoa(this.pessoaId);
      }
    });
  }

  carregarPessoa(id: number): void {
    this.pessoaService.getPessoaById(id).subscribe(pessoa => {
      this.pessoaForm.patchValue(pessoa);
    });
  }

  salvarPessoa(): void {
    if (this.pessoaForm.valid) {
      const pessoa: Pessoa = this.pessoaForm.value;

      if (this.pessoaId) {
        // Atualizar pessoa existente
        this.pessoaService.updatePessoa(this.pessoaId, pessoa).subscribe(() => {
          alert('Pessoa atualizada com sucesso!');
          this.router.navigate(['/']);
        });
      } else {
        // Criar nova pessoa
        this.pessoaService.addPessoa(pessoa).subscribe(() => {
          alert('Pessoa cadastrada com sucesso!');
          this.router.navigate(['/']);
        }, error => {
          console.error('Erro ao cadastrar pessoa:', error);
          alert('Erro ao cadastrar pessoa. Verifique a API.');
        });
      }
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }

  buscarCep(): void {
    const cep = this.pessoaForm.get('cep')?.value;

    if (cep && cep.length === 8) {
      this.viaCepService.buscarEndereco(cep).subscribe(dados => {
        if (!dados.erro) {
          this.pessoaForm.patchValue({
            endereco: dados.logradouro,
            cidade: dados.localidade,
            uf: dados.uf
          });
        } else {
          alert('CEP não encontrado!');
        }
      });
    }
  }

}


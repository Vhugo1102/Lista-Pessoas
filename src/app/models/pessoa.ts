export interface Pessoa {
  id: number;
  nome: string;
  cep: string;
  endereco: string;
  cidade: string;
  uf: string;
  ativo: boolean;
  contatos?: string[]; // Lista de contatos (opcional)
}


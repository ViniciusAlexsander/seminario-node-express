import { Entity, Column } from "typeorm";
import Base from "./Base";

@Entity("pessoas")
export class Pessoa extends Base {
  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  endereco: string;

  @Column()
  telefone: string;

  constructor(
    nome: string,
    email: string,
    cpf: string,
    endereco: string,
    telefone: string
  ) {
    super();
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
  }

  alterarUsuario = (
    nome: string,
    email: string,
    endereco: string,
    telefone: string
  ): void => {
    this.nome = nome;
    this.email = email;
    this.endereco = endereco;
    this.telefone = telefone;
  };
}

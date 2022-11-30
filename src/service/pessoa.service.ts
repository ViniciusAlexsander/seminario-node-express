import { AppDataSource } from "../data-source";
import { Pessoa } from "../entity/Pessoa";

export const PessoaService = AppDataSource.getRepository(Pessoa).extend({
  criarPessoa: async function (
    nome: string,
    email: string,
    cpf: string,
    endereco: string,
    telefone: string
  ) {
    try {
      const pessoa = new Pessoa(nome, email, cpf, endereco, telefone);
      return await this.save(pessoa);
    } catch (error) {
      throw error;
    }
  },

  buscarPessoaPorId: async function (id: number) {
    try {
      const pessoa = await this.findOne({
        where: { id },
      });
      return pessoa;
    } catch (error) {
      throw error;
    }
  },

  buscarPessoaPorEmail: async function (email: string) {
    try {
      const pessoa = await this.findOne({
        where: { email },
      });
      return pessoa;
    } catch (error) {
      throw error;
    }
  },

  alterarPessoa: async function (
    id: number,
    nome: string,
    email: string,
    endereco: string,
    telefone: string
  ) {
    try {
      const pessoa: Pessoa = await this.buscarPessoaPorId(id);
      pessoa.alterarUsuario(nome, email, endereco, telefone);
      return await this.save(pessoa);
    } catch (error) {
      throw error;
    }
  },

  deletarPessoa: async function (id: number) {
    try {
      const pessoa: Pessoa = await this.buscarPessoaPorId(id);
      pessoa.invalidar();
      await this.save(pessoa);
    } catch (error) {
      throw error;
    }
  },
});

import { Component } from '@angular/core';
import { Pessoa } from './models/pessoa.model';
import { CommonModule } from '@angular/common';
import { Filho } from "../filho/filho";

@Component({
  selector: 'app-pai',
  imports: [CommonModule, Filho],
  templateUrl: './pai.html',
  styleUrl: './pai.scss',
})
export class Pai {

  //public string nome = "Tiago";
  public nome: string = 'Tiago';
  //public int idade = 27;
  public idade: number = 27;
  //public bool vivo = true;
  public vivo: boolean = false;

  public html: string = `
    oi <br> oi
  `;
  public pessoa: Pessoa = {
    nome: 'Tiago',
    vivo: true,
    idade: 27,
  };

  //public pessoas: [] = []; - Não tipado
  //public pessoas: Pessoa[] = [];
  public pessoas: Array<Pessoa> = [];

  //public Pai() {}
  constructor() {}

  public getPessoa(): Pessoa {
    return this.pessoa;
  }

  public alertNomePessoa(pessoa: Pessoa): void {
    alert(pessoa.nome);
  }

  //public void DizerOi() {}
  public dizerOi(): void {}

  vivoMorto(): void {
    this.vivo = !this.vivo;
  }

  public addPessoa() {
    this.pessoas.push({
      nome: `Tiago ${this.pessoas.length}`,
      vivo: true,
      idade: 27,
    });
    console.log(this.pessoas);
  }

  public matar(i: number) {
    console.log(i);
    if (i == this.pessoas.length) {
      return;
    }

    this.pessoas[i].vivo = !this.pessoas[i].vivo;
    setTimeout(() => {
      this.matar(i + 1);
    }, 1000);
  }

  public remove(pessoa: string, index: number ) {
    this.pessoas.splice(index, 1);
    alert(`Removido ${pessoa}`)
  }
}

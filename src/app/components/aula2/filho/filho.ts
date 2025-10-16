import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pessoa } from '../pai/models/pessoa.model';

@Component({
  selector: 'app-filho',
  imports: [],
  templateUrl: './filho.html',
  styleUrl: './filho.scss',
})
export class Filho {
  @Input()
  public pessoa?: Pessoa;

  @Output()
  public onRemove = new EventEmitter<string>();

  remover() {
    this.onRemove.emit(this.pessoa?.nome);
  }
}

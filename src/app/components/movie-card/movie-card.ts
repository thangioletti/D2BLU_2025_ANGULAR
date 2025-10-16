import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss'
})
export class MovieCard {

  @Input()
  public titulo: string = "";

  @Input()
  public texto: string = "";

  @Input()
  public img: string = "";

  @Output()
  public onRemoveClicked = new EventEmitter<string>();

  onClick(titulo: string) {
    this.onRemoveClicked.emit(titulo);

  }
}

import { Component } from '@angular/core';
import { Pai } from "./components/aula2/pai/pai";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Pai]
})
export class App {


}

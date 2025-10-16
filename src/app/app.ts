import { Component } from '@angular/core';
import { Menu } from "./core/menu/menu";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Menu, RouterOutlet]
})
export class App {


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuAberto:boolean = false

  ativarMenu(){
    this.menuAberto = !this.menuAberto
  }
}

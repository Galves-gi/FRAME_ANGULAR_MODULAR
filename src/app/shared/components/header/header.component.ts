import { Component } from '@angular/core';
import { FeedService } from '../../../features/feed/services/feed.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuAberto:boolean = false

  constructor(private feedService: FeedService) {}

  ativarMenu(){
    this.menuAberto = !this.menuAberto
  }

  onSearch(event: Event){
    const value = (event.target as HTMLInputElement).value

    this.feedService.setSearch(value)
  }
}

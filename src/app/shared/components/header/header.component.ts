import { Component } from '@angular/core';
import { FeedService } from '../../../features/feed/services/feed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuAberto:boolean = false

  constructor(private feedService: FeedService, private router: Router) {}

  ativarMenu(){
    this.menuAberto = !this.menuAberto
  }

  onSearch(event: Event){
    const value = (event.target as HTMLInputElement).value

    this.feedService.setSearch(value)
    this.router.navigate(['/'])
  }
}

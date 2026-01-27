import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { Photo } from '../../../../shared/models/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  photos: Photo[] = []
  filteredPhotos: Photo[] = []

  constructor(private feedService: FeedService){}

  ngOnInit(): void {
    this.feedService.getPhotos().subscribe(data => {
      this.photos = data
      this.filteredPhotos = data
    })
  }


  ngDoCheck(){
    this.filteredPhotos = this.feedService.filterPhotos(this.photos)
  }
}

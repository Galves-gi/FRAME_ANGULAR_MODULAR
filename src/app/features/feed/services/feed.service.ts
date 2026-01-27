import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Photo } from '../../../shared/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private searchTerm = ''

  constructor(private api: ApiService) { }

  getPhotos(){
    return this.api.getPost<Photo[]>('post')
  }
  /* pega o que foi digita */
  setSearch(term: string){
    this.searchTerm = term.toLocaleLowerCase()
  }

  /* filtra os dados da api */
  filterPhotos(photos: Photo[]){
    if(!this.searchTerm) return photos

    return photos.filter(photo => 
      photo.text.toLocaleLowerCase().includes(this.searchTerm) ||
      photo.hashtag!.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }

}

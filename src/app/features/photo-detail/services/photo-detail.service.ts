import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Photo } from '../../../shared/models/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoDetailService {

  constructor(private api: ApiService) { }

  /* import core e fazer crud completo */
  getPhotoById(id: string){
    return this.api.getPost<Photo>(`post/${id}`)
  }

  deletePhotoById(id: string){
    return this.api.deletePost<Photo>(`post/${id}`)
  }

  updatePhoto(id: string, data: any): Observable<Photo> {
    return this.api.putPost<Photo>(`post/${id}`, data);
  }
}

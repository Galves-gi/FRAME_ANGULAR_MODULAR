import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';


@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private api: ApiService) { }
  /* import core, pega o metodo post para adicionar os dados do formulario */

  uploadPost(data: any){
    return this.api.postPost('post', data)
  }
}

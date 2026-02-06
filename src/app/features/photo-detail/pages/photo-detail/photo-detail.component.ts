import { Component, OnInit } from '@angular/core';
import { Photo } from '../../../../shared/models/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoDetailService } from '../../services/photo-detail.service';
import { faTimes, faEdit, faComment } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrl: './photo-detail.component.css',
})
export class PhotoDetailComponent implements OnInit {

  faTimes = faTimes
  faEdit = faEdit
  faComment = faComment

  photo!: Photo
  showComments = false;

  newComment = {
    user: '',
    text: ''
  };

  constructor(
    private route: ActivatedRoute,
    private detailService: PhotoDetailService,
    private messageService: MessageService,
    private router: Router  
  ){}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!

    this.detailService.getPhotoById(id).subscribe(data => {
      this.photo = data

      if (!Array.isArray(this.photo.comment)) {
        this.photo.comment = [];
      }
    })

  }

  removeHandler(id: string){
    this.detailService.deletePhotoById(id).subscribe()

    this.messageService.show('Foto excluída!')

    this.router.navigate(['/'])

  }

  /* se apertar no botão comentario */
  toggleComments() {
    this.showComments = !this.showComments;
  }

  submitComment() {
  console.log(this.newComment);

  const user = this.newComment.user?.trim();
  const text = this.newComment.text?.trim();

  if (!user || !text) {
    this.messageService.show('Preencha todos os campos!');
    return;
  }

  if (user.length < 3) {
    this.messageService.show('Nome deve ter pelo menos 3 caracteres');
    return;
  }

  if (text.length < 5) {
    this.messageService.show('Comentário muito curto');
    return;
  }

  console.log('VALIDAÇÃO PASSOU');

    this.photo.comment.push({...this.newComment})

    this.detailService.updatePhoto(this.photo.id!, this.photo).subscribe(()=>{
      this.messageService.show('Comentário adicionado!')
    })

    this.newComment = {
      user: '',
      text: ''
    }
  }


}

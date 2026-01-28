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
    })
  }

  removeHandler(id: string){
    this.detailService.deletePhotoById(id).subscribe()

    this.messageService.show('Foto excluída!')

    this.router.navigate(['/'])

  }

}

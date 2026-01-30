import { Component } from '@angular/core';
import { PhotoDetailService } from '../../services/photo-detail.service';
import { MessageService } from '../../../../shared/services/message.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrl: './edit-photo.component.css'
})
export class EditPhotoComponent {
  photo: any;
  id!: string;

  constructor(
    private photoDetailService: PhotoDetailService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router    
  ){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.photoDetailService.getPhotoById(this.id).subscribe(data => {
      this.photo = data;
    });
  }

  update(data: any) {

      this.photoDetailService.updatePhoto(this.id, data).subscribe(() => {
        this.messageService.show('Foto editada!');

        this.router.navigate(['/detail', this.id]);
      });
    }

}

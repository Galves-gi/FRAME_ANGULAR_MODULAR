import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from '../../services/share.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-share-photo',
  templateUrl: './share-photo.component.html',
  styleUrl: './share-photo.component.css'
})
export class SharePhotoComponent implements OnInit{

  constructor(
    private shareService: ShareService,
    private messageService: MessageService,
    private router: Router  
  ){}

  ngOnInit(): void {}
 
  create(data: any, photoForm: any) {

    this.shareService.uploadPost(data).subscribe({
      next: () => {
        this.messageService.show('Foto enviada!');

        photoForm.resetForm(); 
        this.router.navigate(['/']);
      },
      error: () => {
        this.messageService.show('Erro ao enviar!');
      }
    });
  }



}

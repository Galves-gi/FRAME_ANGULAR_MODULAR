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
  inputForm!: FormGroup
  selectedFile!: File | null

  constructor(
    private shareService: ShareService,
    private messageService: MessageService,
    private router: Router  
  ){}
  /* 
    iniciar as funções do angular
  */
  ngOnInit(): void {
    this.inputForm = new FormGroup({
      hashtag: new FormControl('', [Validators.required]),
      text: new FormControl('' , [Validators.required]),
    })

    this.selectedFile = null
  }

  get text(){
    return this.inputForm.get('text')!
  }

  get hashtag(){
    return this.inputForm.get('hashtag')!
  }

  /* pega a ultima imagem selecionada */
  onFileSelected(event: any){
    const imageInput = event.target as HTMLInputElement

    if(imageInput.files && imageInput.files.length > 0)
      this.selectedFile = imageInput.files[0]
  }

  submit(){
    if (this.inputForm.invalid || !this.selectedFile) {
      this.messageService.show('Preenche os campos!')
      return
    }

    console.log(`Enviou o formulario! \n ${this.inputForm.value}`);

    const payload = {
      text: this.inputForm.get('text')!.value,
      hashtag: this.inputForm.get('hashtag')!.value,
      image: this.selectedFile.name
    }

    this.shareService.uploadPost(payload).subscribe({
      next:()=>{
        this.inputForm.reset()
        this.selectedFile = null
        
        this.messageService.show('Foto enviada com sucesso!')
        /* this.router.navigate(['/']) */
      },
      error:(err)=>{
        console.error('Erro completo:', err);
        console.error('Erro da API:', err.error);
        
        this.messageService.show('Erro ao enviar a foto!')
      }
    })
    
  } 
}

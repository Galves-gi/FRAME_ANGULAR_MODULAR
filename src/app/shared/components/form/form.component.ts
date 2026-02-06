import {Component,Input,Output,EventEmitter,OnChanges,SimpleChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnChanges {

  @Input() initialData: any = null;

  @Output() formSubmit = new EventEmitter<any>();

  form: FormGroup;
  selectedFile: File | null = null;

  constructor(private messageService: MessageService,) {
    this.form = new FormGroup({
      text: new FormControl('', Validators.required),
      hashtag: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    });
  }

  ngOnChanges(changes: SimpleChanges): void { /*  verifica se precisa atualizar os dados */

    if (changes['initialData'] && this.initialData) {
      this.form.patchValue({
        text: this.initialData.text,
        hashtag: this.initialData.hashtag,
        image: this.initialData.image
      });
    }
  }

  submit() {
  if (this.form.invalid) {
    this.form.markAllAsTouched(); // mostra erros visuais
    this.messageService.show('Preencha todos os campos!');
    return;
  }

    const payload = this.form.value;
    this.formSubmit.emit(payload);
  }

  resetForm() {
    this.form.reset();
  }
}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  @Input() initialData: any = null;

  @Output() formSubmit = new EventEmitter<any>();

  form!: FormGroup;
  selectedFile!: File | null;

  ngOnInit(): void {

    this.form = new FormGroup({
      text: new FormControl('', Validators.required),
      hashtag: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    });

    if (this.initialData) {
      this.form.patchValue({
        text: this.initialData.text,
        hashtag: this.initialData.hashtag,
        image: this.initialData.image
      });
    }
  }


  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  submit() {
    if (this.form.invalid) return;

    const payload = this.form.value;

    this.formSubmit.emit(payload);
  }

  resetForm() {
    this.form.reset();
  }

}
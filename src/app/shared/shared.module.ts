import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { MessageComponent } from './components/message/message.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MessageComponent,
    FormComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports:[
    HeaderComponent,
    MessageComponent,
    FormComponent,
    InputComponent,
    MessageComponent
  ]
})
export class SharedModule { }

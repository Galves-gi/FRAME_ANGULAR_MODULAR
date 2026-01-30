import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { MessageComponent } from './components/message/message.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MessageComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    MessageComponent,
    FormComponent
  ]
})
export class SharedModule { }

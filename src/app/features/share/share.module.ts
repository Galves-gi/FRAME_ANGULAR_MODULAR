import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ShareRoutingModule } from './share-routing.module';
import { SharePhotoComponent } from './pages/share-photo/share-photo.component';


@NgModule({
  declarations: [
    SharePhotoComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    ReactiveFormsModule
  ]
})
export class ShareModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShareRoutingModule } from './share-routing.module';
import { SharePhotoComponent } from './pages/share-photo/share-photo.component';


@NgModule({
  declarations: [
    SharePhotoComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ShareModule { }

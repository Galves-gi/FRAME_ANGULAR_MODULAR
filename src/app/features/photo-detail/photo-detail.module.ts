import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoDetailRoutingModule } from './photo-detail-routing.module';
import { PhotoDetailComponent } from './pages/photo-detail/photo-detail.component';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { EditPhotoComponent } from './pages/edit-photo/edit-photo.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    PhotoDetailComponent,
    EditPhotoComponent
  ],
  imports: [
    CommonModule,
    PhotoDetailRoutingModule,
    FaIconComponent,
    SharedModule
]
})
export class PhotoDetailModule { }

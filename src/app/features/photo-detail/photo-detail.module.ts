import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoDetailRoutingModule } from './photo-detail-routing.module';
import { PhotoDetailComponent } from './pages/photo-detail/photo-detail.component';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    PhotoDetailComponent
  ],
  imports: [
    CommonModule,
    PhotoDetailRoutingModule,
    FaIconComponent
]
})
export class PhotoDetailModule { }

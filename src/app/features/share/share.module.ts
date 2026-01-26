import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareRoutingModule } from './share-routing.module';
import { SharePhotoComponent } from './pages/share-photo/share-photo.component';
import { ShareService } from './services/share.service';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    SharePhotoComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    ReactiveFormsModule,
    SharedModule
],
    providers: [
    ShareService
  ]
})
export class ShareModule { }

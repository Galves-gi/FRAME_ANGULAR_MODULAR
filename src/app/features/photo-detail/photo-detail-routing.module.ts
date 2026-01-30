import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailComponent } from './pages/photo-detail/photo-detail.component';
import { EditPhotoComponent } from './pages/edit-photo/edit-photo.component';

const routes: Routes = [
  {
    path: ':id',
    component: PhotoDetailComponent
  },
  {
    path: 'edit/:id',
    component: EditPhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoDetailRoutingModule { }

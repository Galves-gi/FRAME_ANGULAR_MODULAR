import { Routes } from '@angular/router';

export const rotas: Routes = [
    {
        path: '',
        loadChildren:()=> import('./features/feed/feed.module').then(m=> m.FeedModule)
    },
    {
        path: 'share',
        loadChildren:()=> import('./features/share/share.module').then(m=> m.ShareModule)
    },
    {
        path: 'detail',
        loadChildren:()=> import('./features/photo-detail/photo-detail.module').then(m=> m.PhotoDetailModule)
    },
    {
        path: '**',
        loadChildren:()=> import('./features/not-found/not-found.module').then(m=> m.NotFoundModule)
    },
];

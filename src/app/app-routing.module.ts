import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',    redirectTo: 'home',    pathMatch: 'full'
  // },
  {
    path: '',    redirectTo: 'books',    pathMatch: 'full'
  },
  { path: 'books',
  children: [
    {
      path:'',
      loadChildren: () => import('./books/books.module').then(m=>m.BooksPageModule)
    },
    {
      path: ':bookId',
      loadChildren: () => import('./books/book-detail/book-detail.module').then(m=>m.BookDetailPageModule)
    }
  ]
  },
  // {
  //   path: 'books',
  //   loadChildren: () => import('./books/books.module').then( m => m.BooksPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

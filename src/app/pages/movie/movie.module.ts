import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import * as fromComponents from './';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MovieListComponent },
  { path: 'new', pathMatch: 'full', component: MovieEditComponent },
  { path: ':id', pathMatch: 'full', component: MovieDetailComponent },
  { path: ':id/edit', pathMatch: 'full', component: MovieEditComponent },
];

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class MovieModule {}

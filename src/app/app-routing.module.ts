import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailComponent } from './pages/entity/detail/detail.component';
import { EditComponent } from './pages/entity/edit/edit.component';
import { EntityComponent } from './pages/entity/entity.component';
import { MovieDetailComponent } from './pages/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from './pages/movie/movie-edit/movie-edit.component';
import { MovieListComponent } from './pages/movie/movie-list/movie-list.component';
import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'component-a', pathMatch: 'full', component: AComponent },
  { path: 'component-b', pathMatch: 'full', component: BComponent },
  { path: 'movies', pathMatch: 'full', component: MovieListComponent },
  { path: 'movies/new', pathMatch: 'full', component: MovieEditComponent },
  { path: 'movies/:id', pathMatch: 'full', component: MovieDetailComponent },
  { path: 'movies/:id/edit', pathMatch: 'full', component: MovieEditComponent },
  {
    path: 'users',
    component: EntityComponent,
    children: [
      { path: ':id', pathMatch: 'full', component: DetailComponent },
      { path: ':id/edit', pathMatch: 'full', component: EditComponent },
    ],
  },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

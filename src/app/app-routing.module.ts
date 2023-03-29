import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpostDetailComponent } from './blogpost/blogpost-detail/blogpost-detail.component';
import { BlogpostResolver } from './blogpost/blogpost.resolver';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'blogpost/:id',
    component: BlogpostDetailComponent,
    resolve: {
      blogpost: BlogpostResolver,
    },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

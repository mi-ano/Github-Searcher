import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { UsersComponent } from '../app/components/users/users.component';
import { RepositoriesComponent } from '../app/components/repositories/repositories.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'repository', component: RepositoriesComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
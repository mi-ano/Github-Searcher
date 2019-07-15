import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitBarComponent } from './components/git-bar/git-bar.component';
import { UsersComponent } from './components/users/users.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { FinalPipe } from './custompipe/final.pipe';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'repository', component: RepositoriesComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    GitBarComponent,
    UsersComponent,
    SearchFormComponent,
    RepositoriesComponent,
    FinalPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

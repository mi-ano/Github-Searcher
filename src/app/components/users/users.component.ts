import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Repos} from '../../class/repos/repos';
import {Users} from '../../class/users/users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [SearchService],
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public searchMe = 'mi-ano';
  public githubUser: string;

 
  findUser(username) {
    this.githubUser = '';
    this.searchMe  = username;
    this.ngOnInit();
    
  }
  
  constructor(public githubUserRequest: SearchService, public userRepos: SearchService) { }

  ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
  }
  
  searchRepos() {
    this.searchRepo = '';
    this.resultCount = 10;
  }
}


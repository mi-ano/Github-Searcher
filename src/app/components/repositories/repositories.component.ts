import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'
import { Repos } from '../../class/repos/repos'


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  providers: [SearchService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repository: Repos;
  public searchRepo: string;
  public resultCount = 12;
  
  searchRepos() {
    this.searchRepo = '';
    this.resultCount = 10;
    this.getDataFunction();
  }
  
  constructor(public gitRequest: SearchService ) { }
  
  ngOnInit() {
    this.resultCount = 5;
    this.gitRequest.gitRepos(this.searchRepo);
  }

  getDataFunction() {
    this.gitRequest.gitRepos(this.searchRepo);
  }

}

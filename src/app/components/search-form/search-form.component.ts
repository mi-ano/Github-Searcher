import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchParams } from '../../search-params'
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchInfo = new SearchParams('');
  @Output() getName = new EventEmitter<SearchParams>();

  searchFor(data){
    this.getName.emit(data.value.find);
    console.log(data.value.find);
    data.reset();
  }

  constructor() { }

  ngOnInit() {
  }

}

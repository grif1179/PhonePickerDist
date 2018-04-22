import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FilterService } from '../filter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private filterService: FilterService,
              private router: Router) {}

  ngOnInit() {
  }

  setSearchTerm(searchTerm: string) {
    this.router.navigate(['/devices/search'], { queryParams: { title: searchTerm }});
  }
}

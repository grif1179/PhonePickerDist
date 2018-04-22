import { Component, OnInit } from '@angular/core';

import { DevicesService } from '../devices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter-view',
  templateUrl: './filter-view.component.html',
  styleUrls: ['./filter-view.component.css']
})
export class FilterViewComponent implements OnInit {
  filterParams = {
    os: '',
    storage: '',
    ram: '',
    display: '',
    front_camera: '',
    back_camera: '',
    cpu: '',
    gpu: '',
    length: '',
    width: '',
    depth: '',
    weight: '',
    color: '',
    battery: '',
    location: '',
    screen: '',
    network: ''
  };

  constructor(private devicesService: DevicesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  applyFilter() {
    this.router.navigate(['/devices/search'], { queryParams: this.filterParams});
  }
}

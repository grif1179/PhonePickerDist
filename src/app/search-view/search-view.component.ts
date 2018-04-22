import { Component, OnInit, Input } from '@angular/core';

import { Device } from '../device';
import { DevicesService } from '../devices.service';
import { FilterService } from '../filter.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})

export class SearchViewComponent implements OnInit {
  devices: Device[] = [];
  compareArr: string[] = [];
  indexOfSlug: number;

  constructor(private devicesService: DevicesService,
              private filterService: FilterService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.getDevices(params);
    });
    console.log(this.devices);
  }

  getDevices(params: Params): void {
    console.log(params);
    this.devicesService.getDevices(params)
    .subscribe(devices => this.devices = devices);
  }

  compareArrManager(deviceSlug: string) {
    this.indexOfSlug = this.compareArr.findIndex(device => device === deviceSlug);
    if (this.indexOfSlug === -1) {
      this.compareArr.push(deviceSlug);
    } else {
      this.compareArr.splice(this.indexOfSlug, 1);
    }
    console.log(this.compareArr);
  }

  routeToCompare() {
    this.router.navigate(['/devices/compare'], { queryParams: this.compareArr});
  }
}

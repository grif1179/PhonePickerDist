import { Component, OnInit, Input } from '@angular/core';

import { Device } from '../device';
import { DevicesService } from '../devices.service';
import { FilterService } from '../filter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices: Device[] = [];
  compareArr: string[] = [];
  indexOfSlug: number;

  constructor(private devicesService: DevicesService,
              private filterService: FilterService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.getDevices();
    console.log(this.devices);
  }

  getDevices(): void {
    this.devicesService.getDevices({})
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

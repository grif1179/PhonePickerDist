import { Component, OnInit } from '@angular/core';

import { Device } from '../device';
import { DevicesService} from '../devices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  devices: Device[] = [];

  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
    this.getDevices();
  }

  getDevices(): void {
    this.devicesService.getDevices({})
      .subscribe(devices => this.devices = devices.slice(0, 4));
  }

}

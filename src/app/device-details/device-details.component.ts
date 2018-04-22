import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Device } from '../device';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {
  device: Device;

  constructor(
    private route: ActivatedRoute,
    private devicesService: DevicesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDevice();
  }

  getDevice(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    console.log(slug);
    this.devicesService.getDevice(slug)
      .subscribe(device => this.device = device);
  }

  goBack(): void {
    this.location.back();
  }

}

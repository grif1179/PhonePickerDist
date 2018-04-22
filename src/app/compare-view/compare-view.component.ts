import { Component, OnInit } from '@angular/core';

import { Device } from '../device';
import { DevicesService } from '../devices.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-compare-view',
  templateUrl: './compare-view.component.html',
  styleUrls: ['./compare-view.component.css']
})
export class CompareViewComponent implements OnInit {
  slugs: string[];
  devices: Device[] = [];
  constructor(private devicesService: DevicesService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.slugs = Object.values(params);
      console.log(this.slugs);
      this.getDevs();
    });
  }

  getDevs() {
    for (let i = 0; i < this.slugs.length; i++) {
      this.devicesService.getDevice(this.slugs[i]).subscribe((device) => {
          this.devices.push(device);
        });
    }
    console.log(this.devices);
  }
}

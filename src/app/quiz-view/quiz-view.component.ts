import { Component, OnInit } from '@angular/core';

import { DevicesService } from '../devices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.css']
})
export class QuizViewComponent implements OnInit {
  questionIndex = 1;
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

  submitQuiz() {
    this.router.navigate(['/devices/search'], { queryParams: this.filterParams});
  }

  increaseIndex() {
    this.questionIndex++;
  }
}

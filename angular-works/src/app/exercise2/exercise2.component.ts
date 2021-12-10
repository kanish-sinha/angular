import { Component, OnInit } from '@angular/core';
import { ExerciseServiceService } from './exercise-service.service';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {
  authors;
  count = 0;
  constructor(service: ExerciseServiceService) {
    this.authors = service.get();
    this.count = this.authors.length;
  }

  ngOnInit(): void {
  }

}

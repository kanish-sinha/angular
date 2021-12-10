import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseServiceService {

  constructor() { }
  get() {
    return ['author1', 'author2', 'author3', 'author4', 'author5']
  }
}

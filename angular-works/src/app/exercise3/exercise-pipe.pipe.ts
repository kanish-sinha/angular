import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exercisePipe'
})
export class ExercisePipePipe implements PipeTransform {
  transform(value: string, args?: any): any {
    let arr = value.split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toLowerCase();
      let s = arr[i].charAt(0).toUpperCase();
      arr[i] = s + arr[i].slice(1, arr[i].length);
      if (arr[i] === 'The' || arr[i] === "Of") {
        if (i === 0 && arr[i] === "The")
          arr[0] = arr[0];
        else
          arr[i] = arr[i].toLowerCase();
      }
    }
    return arr.join(' ');
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    let [a, b, c, d] = args;
    if (a && b && c && d) {
      return value.split('').reverse().join("") + c + d + '名字叫' + a + b;
    }
    return value.split('').reverse().join("");
  }

}

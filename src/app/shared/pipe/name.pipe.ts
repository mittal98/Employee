import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  transform(firstName: string,...lastName:string[]): string {
    return firstName +" "+ lastName.join(" ");
  }
}

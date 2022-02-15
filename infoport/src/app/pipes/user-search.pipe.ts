import { filter } from '@angular-devkit/schematics';
import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(value: User[], name?: string, rating?: string): User[] {
    let filteredRating: User[] = value;
    console.log(name, rating)
    if (!!rating) {
      if (rating === 'mayor') {
        filteredRating = value.filter(v => v.rating > 4.5);
      }
      if (rating === 'minor') {
        filteredRating = value.filter(v => v.rating <= 4.5);
      }
      if (!!name) {
        if (!!name) {
          return filteredRating.filter(v => v.name.toLowerCase().includes(name.toLowerCase()));
        } else {
          return filteredRating;
        }
      } else {
        return filteredRating;
      }
    } else if (!!name) {
      return value.filter(v => v.name.toLowerCase().includes(name.toLowerCase()));
    } else {
      return value;
    }

  }
}

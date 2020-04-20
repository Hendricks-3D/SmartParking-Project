import { Pipe, PipeTransform } from '@angular/core';
import { IParkSpaces } from './Interfaces/ipark-spaces';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(spaces: IParkSpaces[], searchTerm: string): any {
    if (!spaces|| !searchTerm) {
        return spaces;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return spaces.filter(space => (space.location).toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
}
}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'toggleCasePipe'
})
export class ToogleCasePipe implements PipeTransform{
  transform(value: string):string {
    return value.toUpperCase();
  }

}

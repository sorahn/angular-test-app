import { Pipe, PipeTransform } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Pipe({ name: "autocompleteFilter" })
export class AutocompleteFilter implements PipeTransform {
  transform(value: Observable<any[]>, search: string): Observable<any[]> {
    if (!search) {
      return value;
    }

    const foo = value.pipe(
      map(value =>
        value.filter(v => v.name.toLowerCase().includes(search.toLowerCase()))
      )
    );

    console.log(foo);
    return foo;
  }
}

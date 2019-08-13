import { Component, OnInit } from "@angular/core";
import { PeopleService } from "./people.service";
import { AutocompleteFilter } from "./autocomplete-filter.pipe";
import { count, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [AutocompleteFilter]
})
export class AppComponent implements OnInit {
  constructor(
    public peopleService: PeopleService,
    private autocompleteFilter: AutocompleteFilter
  ) {}

  name: string = "";
  peopleLength: number = 0;

  get hasName(): boolean {
    this.autocompleteFilter
      .transform(this.peopleService.people$, name)
      .subscribe(data => {
        // the filter doesn't apply for some reason
        console.log(data);
      });

    // console.log(this.peopleLength);
    return this.peopleLength > 0;
  }

  ngOnInit() {
    this.peopleService.getPeople().subscribe();
  }
}

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
interface People {
  results: Person[];
}

interface Person {
  name: string;
}

@Injectable({ providedIn: "root" })
export class PeopleService {
  constructor(private http: HttpClient) {}

  people$ = new BehaviorSubject<Person[]>([]);

  getPeople(): Observable<People> {
    return this.http
      .get<People>("https://swapi.co/api/people")
      .pipe(tap(data => this.people$.next(data.results)));
  }
}

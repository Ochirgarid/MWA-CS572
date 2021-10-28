import { ChangeDetectionStrategy, Component, ViewChild, OnInit, Output, EventEmitter} from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import * as cities  from '../../assets/iowa-cities.json';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitySearchComponent implements OnInit {

  @Output() citySearchEvent = new EventEmitter<string>();

  options: string[];
  filteredOptions$: Observable<string[]>;

  @ViewChild('autoInput') input;

  ngOnInit() {
    this.options = cities.iowaCities.map(
      c => {return c+", IA";}
    );
    this.filteredOptions$ = of(this.options);
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
    this.citySearchEvent.emit(this.input.nativeElement.value);
  }

  onSelectionChange($event: string) {
    this.filteredOptions$ = this.getFilteredOptions($event);
    console.log($event);
    this.citySearchEvent.emit($event);
  }  
}

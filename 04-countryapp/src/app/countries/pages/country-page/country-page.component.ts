import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/search.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [` /* img { width: 50px } */ `]
})
export class CountryPageComponent implements OnInit{
  public placeholder: string = `Search by Country`;
  public isLoading: boolean = false;
  public initValue: string = '';
  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}

  ngOnInit(): void {
    this.initValue  = this.countriesService.cacheStore.byCapital.term;
    this.country    = this.countriesService.cacheStore.byCountry.countries[0];

    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id) )
    )
    .subscribe( country => {
      if (!country) return this.router.navigateByUrl('');
        //console.log({ country });
      return this.country = country;
    })
  }
}

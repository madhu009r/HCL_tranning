import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit {

  countries: any[] = [];
  user: any;

  constructor(
    private countryService: CountryService,
    private favService: FavouriteService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.user = this.auth.getUser();
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  addToFavourite(country: any) {
    const fav = {
      userId: this.user.userId,
      countryName: country.name,
      capital: country.capital,
      region: country.region,
      flagUrl: country.flagUrl
    };

    this.favService.addFavourite(fav).subscribe(() => {
      alert("Added to favourites");
    });
  }
}

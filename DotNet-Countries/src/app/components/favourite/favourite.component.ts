import { Component, OnInit } from '@angular/core';
import { FavouriteService } from 'src/app/services/favourite.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourite.component.html'
})
export class FavouritesComponent implements OnInit {

  favourites: any[] = [];
  user: any;

  constructor(
    private favService: FavouriteService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.user = this.auth.getUser();

    this.favService.getUserFavourites(this.user.userId)
      .subscribe(data => {
        this.favourites = data;
      });
  }
}

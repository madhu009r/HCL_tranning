import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CountriesComponent } from './components/countries/countries.component';
import { FavouritesComponent } from './components/favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CountriesComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,     
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'countries', component: CountriesComponent },
      { path: 'favourites', component: FavouritesComponent }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

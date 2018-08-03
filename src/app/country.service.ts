import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

public baseUrl ='https://restcountries.eu/rest/v2';
  constructor(private _http:HttpClient) { }
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }
  public getAllCountries(Region):any{
    let country = this._http.get(this.baseUrl+`/region/${Region}`);
    console.log(country);
    return country;
  }
public getSingleCountry(countryName):any{
  let singleCountry = this._http.get(this.baseUrl + `/name/${countryName}`);
  console.log(singleCountry);
  return singleCountry;
}
public getCurrencyBasedCountries(currencyCode) :any{
let currency = this._http.get(this.baseUrl + '/currency' +'/' + currencyCode)
  console.log(currency);
  return currency;
}
public getlanguageBasedCountries(languageCode) :any{
  let language = this._http.get(this.baseUrl + '/lang' +'/' + languageCode)
  console.log(language);
  return language;
}
}


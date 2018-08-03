import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { CountryService } from '../country.service';
import{Location} from '@angular/common';




@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public allCountry;
 

  constructor(private _route: ActivatedRoute, private router: Router, public countryService: CountryService , public location:Location,
) {

   
  }
  

  ngOnInit() {
    let Region = this._route.snapshot.paramMap.get('name');
    console.log(Region);

    this.allCountry = this.countryService.getAllCountries(Region).subscribe(
      data => {
        console.log(data);
        this.allCountry = data;

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);

      }) 
      this._route.params.subscribe(param => { 
      let currency_Code = this._route.snapshot.paramMap.get('currencyCode');
      console.log(currency_Code);
  
      this.countryService.getCurrencyBasedCountries(currency_Code).subscribe(
  
        data => {
          console.log(data);
         
          this.allCountry = data;
        },
        error => {
          console.log("some error occured");
          
          console.log(error.errorMessage)
        }
  
  
      )});
      this._route.params.subscribe(param => { 
        let language_Code = this._route.snapshot.paramMap.get('languageCode');
        console.log(language_Code);
    
        this.countryService.getlanguageBasedCountries(language_Code).subscribe(
    
          data => {
            console.log(data);
            this.allCountry = data;
          },
          error => {
            console.log("some error occured");
            console.log(error.errorMessage)
          }
    
    
        )});

   
      

  }
  goBackToPreviousPage():any
  {
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { CountryService } from '../country.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-singlecountry',
  templateUrl: './singlecountry.component.html',
  styleUrls: ['./singlecountry.component.css'],


})
export class SinglecountryComponent implements OnInit {
  public currentCountry;
  constructor(private _route: ActivatedRoute, private router: Router, public countryService: CountryService,public location:Location ) { }

  ngOnInit() {
    let countryName = this._route.snapshot.paramMap.get('name');
    console.log(countryName );

    this.currentCountry = this.countryService.getSingleCountry(countryName).subscribe(
      data => {
        console.log(data);
        this.currentCountry = data;

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);

      })
  }
  goBackToPreviousPage(): any {

    this.location.back();

  }

}

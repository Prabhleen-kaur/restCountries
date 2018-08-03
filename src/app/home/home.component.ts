import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allRegions =[{
    
    "name":"Europe",
    "description":"With a land area of only 4,000,000 square miles, Europe is the second smallest continent in the world, just behind Australia."

  }, 
   {
     "name":"Americas", 
   "description":"The United States has the largest economy in the world. The nation's economy accounts for about 25% of the world's nominal GDP." },
   {
     "name": "Oceania"
    , "description":"The region of Oceania and Australia includes the continent of Australia as well as many surrounding island countries."},
    {"name": "Africa",
  "description":"The African continent has the second largest population in the world, at about one billion people, Over one thousand languages are spoken by the people of Africa. "},{"name": "Asia",
"description":"It is the largest continent by area (about a third of the world’s land is here), with the most people living on it. For every ten people alive today, six of them live in Asia.Asia is a continent of uniqueness, fascination and bewilderment all brought about by its cultures, economies, populations, landscapes, plants and animals.",
}];
  constructor() { }

  ngOnInit() {
  
  }

}

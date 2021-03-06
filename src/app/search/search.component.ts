import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { YelpService } from '../services/yelp.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
   'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
   'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
  restaurants: any;
  i: number;
  rating: number;

  city = new FormControl();
  state = new FormControl();
  price = new FormControl();

  constructor(private yelp: YelpService) { }

  ngOnInit() {

  }

  search() {
    this.yelp.search(this.city.value, this.state.value, this.price.value).subscribe(data => {
      this.restaurants = data;
      this.i = Math.floor(Math.random() * 50);
      this.rating = this.restaurants.businesses[this.i].rating;
    });
  }

  changeText() {
    document.getElementById('search').innerHTML = 'Search Again';
  }


}

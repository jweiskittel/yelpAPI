import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({'Authorization': 'Bearer PhGPmwz5PWVoD6jfPBfkKNdoquC2B428Y5ChiKt3lV8lSOh8QUS0q7jYDifqPvbcWCtBxUFu5-Y7NfCgswUFsVSU8XOFyk3ZarzKJgq9I1041VtuZlglf_egZerqW3Yx'})
}

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  constructor(private http: HttpClient) { }

  search(city, state, price) {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city},-${state}&price=${price}&open_now=true&limit=50`, httpOptions)
  }

}

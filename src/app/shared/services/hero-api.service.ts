import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {
  private base_url = "https://superheroapi.com/api/";
  private access_token = "10159966285628737";

  constructor(private http: HttpClient) { }

  searchByName(name: string) {
    const searchEndpoint = "/search/"
    return this.http.get(this.base_url + this.access_token + searchEndpoint + name);
  }
}

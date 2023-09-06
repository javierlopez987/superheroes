import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {
  private baseUrl = environment.heroApi.baseUrl;
  private accessToken = environment.heroApi.accessToken;

  constructor(private http: HttpClient) { }

  searchByName(name: string) {
    const searchEndpoint = environment.heroApi.searchEndpoint;
    return this.http.get(this.baseUrl + this.accessToken + searchEndpoint + name);
  }
}

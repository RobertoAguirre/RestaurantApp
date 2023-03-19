import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DishesService {
  constructor(private http: HttpClient) {}

  //Get all
  public GetAll() {
    return this.http.get(environment.SERVER_URL + 'dishes');
  }

  public Post(data) {
    return this.http.post(environment.SERVER_URL + 'dishes', data);
  }
}

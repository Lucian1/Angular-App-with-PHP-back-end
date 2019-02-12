import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import { throwError, Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { car } from '../car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl = "http://localhost/api";
  cars: car[];
  constructor(private http : HttpClient) { }

  //get car list
  getAll(): Observable<car[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.cars = res['data'];
        return this.cars;
    }),
    catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

  //add a car
  store(car: car): Observable<car[]> {
    return this.http.post(`${this.baseUrl}/store`, { data: car })
      .pipe(map((res) => {
        this.cars.push(res['data']);
        return this.cars;
      }),
      catchError(this.handleError));
}

//update car information
update(car: car): Observable<car[]> {
  return this.http.put(`${this.baseUrl}/update`, { data: car })
    .pipe(map((res) => {
      const theCar = this.cars.find((item) => {
        return +item['id'] === +car['id'];
      });
      if (theCar) {
        theCar['price'] = +car['price'];
        theCar['model'] = car['model'];
      }
      return this.cars;
    }),
    catchError(this.handleError));
}
//delete
delete(id: number): Observable<car[]> {
  const params = new HttpParams()
    .set('id', id.toString());

  return this.http.delete(`${this.baseUrl}/delete`, { params: params })
    .pipe(map(res => {
      const filteredCars = this.cars.filter((car) => {
        return +car['id'] !== +id;
      });
      return this.cars = filteredCars;
    }),
    catchError(this.handleError));
}

}


import { Component } from '@angular/core';
import { car } from '../app/car'
import { CarService } from './service/car.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars : car[];
  success : String;
  error : String;
  constructor(private carService : CarService) {

  }

  ngOnInit() {
    this.getCars();
  }
  getCars() : void {
    this.carService.getAll().subscribe(
      (res: car[]) => {
        this.cars = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}

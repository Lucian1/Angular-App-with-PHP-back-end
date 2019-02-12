import { Component, OnInit } from '@angular/core';
import { car } from '../../car'
import { CarService } from 'src/app/service/car.service';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private carService : CarService) { }
  cars : car[];
  success = "";
  error = "";
  ngOnInit() {
  }
  car = new car('', 0);
  addCar(f) {
    this.error = '';
    this.success = '';

    this.carService.store(this.car)
      .subscribe(
        (res: car[]) => {
          // Update the list of cars
          this.cars = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
}

}

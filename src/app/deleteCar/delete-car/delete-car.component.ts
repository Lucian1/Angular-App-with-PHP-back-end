import { Component, OnInit } from '@angular/core';
import { car } from 'src/app/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {

  constructor(private carService : CarService) { }
  cars : car[];
  success = "";
  error = "";

  ngOnInit() {
    this.getCars();
  }
  getCars() : void {
    this.carService.getAll().subscribe(
      (res : car[]) => {
        this.cars = res;
      },
      (err) => {
        this.error = err;
      }
    )
  }

  deleteCar(id) {
    this.success = '';
    this.error   = '';
    
    this.carService.delete(+id)
      .subscribe(
        (res: car[]) => {
          this.cars = res;
          this.success = 'Deleted successfully';
        },
        (err) => this.error = err
      );
}
}

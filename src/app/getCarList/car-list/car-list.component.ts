import { Component, OnInit } from '@angular/core';
import { car } from '../../car'
import { CarService } from 'src/app/service/car.service';
import { getLocaleNumberSymbol } from '@angular/common';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

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

}

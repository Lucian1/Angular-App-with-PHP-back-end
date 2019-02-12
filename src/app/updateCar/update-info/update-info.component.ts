import { Component, OnInit } from '@angular/core';
import { car } from 'src/app/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {

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
  //update a car info
  updateCar(name, price, id) {
    this.success = '';
    this.error = '';

    this.carService.update({ model: name.value, price: price.value, id: +id })
      .subscribe(
        (res) => {
          this.cars    = res;
          this.success = 'Updated successfully';
        },
        (err) => this.error = err
      );
}
}

  
   

   
    
        
    

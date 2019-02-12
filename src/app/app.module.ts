import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { CarListComponent } from './getCarList/car-list/car-list.component';
import { AddCarComponent } from './postCar/add-car/add-car.component';
import { UpdateInfoComponent } from './updateCar/update-info/update-info.component';
import { DeleteCarComponent } from './deleteCar/delete-car/delete-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    AddCarComponent,
    UpdateInfoComponent,
    DeleteCarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

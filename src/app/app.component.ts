import { Component, OnInit } from '@angular/core';
import { BevService } from './bev.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  beverageorderForm: FormGroup;
  inQueue: any = [];
  beingMixed: any = [];
  readyToCollect: any = [];
  beverages: any;
  constructor(
    private bevService: BevService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.getBeverages();
    this.buildOrderForm();
  }

  buildOrderForm() {
    this.beverageorderForm = this.formBuilder.group({
      name : [''],
      beveragename : ['']
    });
  }

  saveOrder(orderInfo: any) {
    this.inQueue.push(orderInfo);
    console.log(this.inQueue);
    if (this.inQueue && this.inQueue.length > 0) {
      setInterval(function () {
        const res: any = this.inQueue.splice(0, 1);
       }, 3000);
       console.log(this.inQueue);
    }
  }

  getBeverages() {
    this.bevService.getBeveragesList().subscribe(res => {
      console.log(res);
      this.beverages = res.Beverages;
    });
  }
}

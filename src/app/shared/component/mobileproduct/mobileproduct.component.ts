import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { mobileproducts } from '../../consts/product';

@Component({
  selector: 'app-mobileproduct',
  templateUrl: './mobileproduct.component.html',
  styleUrls: ['./mobileproduct.component.scss']
})
export class MobileproductComponent implements OnInit {
mobiledata:Array<Iproduct>=mobileproducts;
  constructor() { }

  ngOnInit(): void {
  }

}

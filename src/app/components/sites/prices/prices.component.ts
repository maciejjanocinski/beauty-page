import {Component, OnInit} from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    AOS.init();
    window.scrollTo(0, 0);
  }
}

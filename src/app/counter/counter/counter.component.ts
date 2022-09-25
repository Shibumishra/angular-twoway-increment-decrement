import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public onIncrement() {
    this.counter++;
  }
  public onDecrement() {
    this.counter > 0 ? this.counter-- : 0;
  }
  public onReset() {
    this.counter = 0;
  }
}

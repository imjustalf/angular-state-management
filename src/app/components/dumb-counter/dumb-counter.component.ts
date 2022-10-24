import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dumb-counter',
  templateUrl: './dumb-counter.component.html',
  styleUrls: ['./dumb-counter.component.css'],
})
export class DumbCounterComponent {
  current = 0;

  increment() {
    this.current += 1;
  }

  decrement() {
    this.current -= 1;
  }

  disableButton() {
    return this.current === 0;
  }
}

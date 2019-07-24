import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs';
import { decrement, increment } from '../ngrx'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter$: Observable<any>;

  constructor(private store: Store<{ counter: number }>) { }

  ngOnInit() {
    this.counter$ = this.store.pipe(
      select('counterReducer')
    )
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  increment() {
    this.store.dispatch(increment())
  }

}

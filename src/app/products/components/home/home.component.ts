import { Component, OnInit } from '@angular/core';
import { ProductActions, ProductState } from '../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<ProductState>) {}

  ngOnInit(): void {
     this.store.dispatch(ProductActions.product());
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {CheckoutService} from "src/app/pages/checkout/checkout.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  readonly destroy$: Subject<undefined> = new Subject<undefined>();
  step: number = 1;

  ngOnInit(): void {
    this.checkoutService.step$
      .pipe(takeUntil(this.destroy$))
      .subscribe((step: number) => {
        this.step = step;
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }

  constructor(public readonly checkoutService: CheckoutService) {
  }

  submit(): void {
  }
}

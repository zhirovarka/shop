import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  constructor(private router: Router) {}

  public returnToMainPage(): void {
    this.router.navigate(['/']);
  }
}

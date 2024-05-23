import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
    constructor(private Router : Router) {
    }

    goToFlight() {
       window.location.href = 'https://www.turkishairlines.com/tr-tr/miles-and-smiles/hesap/wallet/payment.html';
    }
}

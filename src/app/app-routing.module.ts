import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletComponent } from './extension/wallet/wallet.component';
import { FlightComponent } from './extension/flight/flight.component';

const routes: Routes = [
  { path: 'wallet', component: WalletComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'extension', loadChildren: () => import('./extension/extension.module').then(m => m.ExtensionModule) },
  { path: '', redirectTo: '/wallet', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

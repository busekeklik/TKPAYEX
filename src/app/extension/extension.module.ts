import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { MoreOppComponent } from './more-opp/more-opp.component';
import { ExtensionRoutingModule } from './extension-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WalletComponent } from './wallet/wallet.component';
import { FlightComponent } from './flight/flight.component';

@NgModule({
  declarations: [
    OpportunityComponent,
    MoreOppComponent,
    FlightComponent,
    WalletComponent
  ],
  imports: [
    CommonModule,
    ExtensionRoutingModule,
    HttpClientModule
  ],
  exports: [
    OpportunityComponent,
    MoreOppComponent,
    FlightComponent,
    WalletComponent
    
  ]
})
export class ExtensionModule { }

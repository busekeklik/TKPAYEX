import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { MoreOppComponent } from './more-opp/more-opp.component';

const routes: Routes = [
  { path: 'opportunity', component: OpportunityComponent },
  { path: 'more-opportunities', component: MoreOppComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtensionRoutingModule { }

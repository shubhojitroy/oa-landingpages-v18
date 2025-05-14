import { Routes } from '@angular/router';
import { InvestorComponent } from './investor/investor.component';

export const routes: Routes = [
  {
    path: 'investor/:theme',
    component: InvestorComponent,
  },
];

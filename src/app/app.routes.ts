import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { PricesComponent } from './components/prices/prices.component';
import { MetarComponent } from './components/metar/metar.component';


export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: 'full'},
    {path: "home", component: BodyComponent},
    {path: "prices", component: PricesComponent},
    {path: "metar", component: MetarComponent},
];
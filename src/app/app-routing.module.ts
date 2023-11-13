import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
//Basic UI Elements
import { ButtonsComponent } from './Pages/buttons/buttons.component';
import { TypographyComponent } from './Pages/typography/typography.component';
//Icon
import { IconsComponent } from './Pages/icons/icons.component';
//Forms
import { FormsComponent } from './Pages/forms/forms.component';
//Charts
import { ChartsComponent } from './Pages/charts/charts.component';
//Tables
import { TablesComponent } from './Pages/tables/tables.component';
//Samples
import { BlankpageComponent } from './Pages/blankpage/blankpage.component';
import { LoginComponent } from './Pages/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomePageComponent, children: [
    { path: '', component: DashboardComponent, outlet: "ComponentRouting", pathMatch: 'full' },
    { path: 'buttons', component: ButtonsComponent, outlet: "ComponentRouting" },
    { path: 'typography', component: TypographyComponent, outlet: "ComponentRouting" },
    { path: 'icons', component: IconsComponent, outlet: "ComponentRouting" },
    { path: 'forms', component: FormsComponent, outlet: "ComponentRouting" },
    { path: 'charts', component: ChartsComponent, outlet: "ComponentRouting" },
    { path: 'tables', component: TablesComponent, outlet: "ComponentRouting" },
    { path: 'blankpage', component: BlankpageComponent, outlet: "ComponentRouting" },
  ] }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

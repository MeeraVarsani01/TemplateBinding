import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ButtonsComponent } from './Pages/buttons/buttons.component';
import { TypographyComponent } from './Pages/typography/typography.component';
import { IconsComponent } from './Pages/icons/icons.component';
import { FormsComponent } from './Pages/forms/forms.component';
import { ChartsComponent } from './Pages/charts/charts.component';
import { TablesComponent } from './Pages/tables/tables.component';
import { BlankpageComponent } from './Pages/blankpage/blankpage.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ButtonsComponent,
    TypographyComponent,
    IconsComponent,
    FormsComponent,
    ChartsComponent,
    TablesComponent,
    BlankpageComponent,
    LoginComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

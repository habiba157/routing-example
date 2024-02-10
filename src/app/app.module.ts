import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsnavbarComponent } from './componentsnavbar/componentsnavbar.component';
import { ComponentshomeComponent } from './componentshome/componentshome.component';
import { ComponentsaboutComponent } from './componentsabout/componentsabout.component';
import { ComponentscontactComponent } from './componentscontact/componentscontact.component';
import { ComponentsfooterComponent } from './componentsfooter/componentsfooter.component';
import { ComponentsportfolioComponent } from './componentsportfolio/componentsportfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsnavbarComponent,
    ComponentshomeComponent,
    ComponentsaboutComponent,
    ComponentscontactComponent,
    ComponentsfooterComponent,
    ComponentsportfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

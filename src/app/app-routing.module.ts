import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentshomeComponent } from './componentshome/componentshome.component';
import { ComponentscontactComponent } from './componentscontact/componentscontact.component';
import { ComponentsaboutComponent } from './componentsabout/componentsabout.component';
import { ComponentsportfolioComponent } from './componentsportfolio/componentsportfolio.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:ComponentshomeComponent},
  {path:'about',component:ComponentsaboutComponent},
  {path:'portfolio',component:ComponentsportfolioComponent},
  {path:'contact',component:ComponentscontactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { LeftPageComponent } from './left-page/left-page.component';
import { RightPageComponent } from './right-page/right-page.component';

const routes: Routes = [
  {path:'about', component:AboutPageComponent},
  {path:'left', component:LeftPageComponent, data:{animation: 'isRight'} },
  {path:'right', component:RightPageComponent,data:{animation: 'isLeft'}}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

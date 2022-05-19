import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DefaultComponent } from './default/default.component';
import { Photo1Component }  from './Photos/Components/photo1/photo1.component';
import { Photo2Component }  from './Photos/Components/photo2/photo2.component';

const routes: Routes = [

  { path: ''               , component: DefaultComponent },
  { path: 'photo1'         , component: Photo1Component },
  { path: 'photo1/:photoid', component: Photo1Component },
  { path: 'photo2'         , component: Photo2Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

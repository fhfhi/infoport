import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { GeneralPageComponent } from './general-page/general-page.component';

const routes: Routes = [{ path: '', component: GeneralPageComponent }, { path: 'details/:id', component: DetailsPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

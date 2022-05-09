import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { OffreListComponent } from './offre-list/offre-list.component';
import { OffreAddComponent } from './offre-add/offre-add.component';
import { UpdateOffreComponent } from './update-offre/update-offre.component';

const routes: Routes = [
  {
    path : '',
    component:HomeComponent},
    {path: 'offre-list', component: OffreListComponent },
    {path: 'offre-add', component:OffreAddComponent},
    {path: 'update-offre/:id', component:UpdateOffreComponent }
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

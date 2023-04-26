import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './Components/user-add/user-add.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UserTableComponent } from './Components/user-table/user-table.component';
import { ErrorComponent } from './Components/error/error.component';
import { UserUpdateComponent } from './Components/user-update/user-update.component';

const routes: Routes = [
  {path:'', component:UserTableComponent},
  // {path:'users', component:UserTableComponent},
  {path:'user-details/:id', component:UserDetailsComponent},
   {path:'user-update/:id', component:UserUpdateComponent},
  {path:'adduser', component:UserAddComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

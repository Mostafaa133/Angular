import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { UserTableComponent } from './Components/user-table/user-table.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UserUpdateComponent } from './Components/user-update/user-update.component';
import { UserAddComponent } from './Components/user-add/user-add.component';
import {HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './Components/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    UserTableComponent,
    UserDetailsComponent,
    UserUpdateComponent,
    UserAddComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

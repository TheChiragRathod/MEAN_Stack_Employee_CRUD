import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",component:EditTableComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

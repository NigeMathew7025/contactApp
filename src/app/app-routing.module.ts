import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  //to redirect automatically freom localhostr:4200 to contactManager
  {
    path:'',redirectTo:'contacts/admin',pathMatch:'full'
  },//path for ContactManagerComponent
  {
     path:'contacts/admin',component:ContactManagerComponent
  },//addContactComponent
  {
    path:'contacts/add',component:AddContactComponent
  },
//UpdateContactComponent
  {
path:'contacts/edit/:contactId',component:UpdateContactComponent
  },
  //viewContact
  {
    path:'contacts/view/:contactId',component:ViewContactComponent
  },
  //PageNotFoundComponent
  {
    path:'**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

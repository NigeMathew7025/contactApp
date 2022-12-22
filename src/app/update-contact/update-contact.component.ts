import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/myContacts';
import { myGroup } from 'src/models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit{
  contactId:string=''
  contact:MyContact={} as MyContact
  groups:myGroup[]= [] as myGroup[]
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService,private router:Router){}
 ngOnInit(): void {
  //get contact id from url parameter using ActivatedRoute class
   this.activatedRoute.params
   .subscribe((data:any)=>{
    console.log(data['contactId']);
    this.contactId=data['contactId']
    
   })

   //call api for getting particular contacr id details
   this.api.viewContact(this.contactId).subscribe((data:any)=>{this.contact=data}
   
   )
   //call api for getting all groups
   this.api.getAllGroups().subscribe(
    (data:any)=>{
      this.groups=data
    }
   )
  

   
 }
 //update contact
 updateContact()
 {
  //api call for updating the contact,arg:updated contact,contact id
 this.api.updateContact(this.contactId,this.contact).subscribe((data:any)=>{
  this.router.navigateByUrl('')
 })
 }
}

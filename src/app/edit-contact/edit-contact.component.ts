import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ActivatedRoute} from '@angular/router';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
mode = 1;
contact: Contact = new Contact();
idcontact: number;
  constructor(public activatedRoute: ActivatedRoute, public contactService: ContactsService) {

  this.idcontact = activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {
   this.contactService.getContact(this.idcontact)
     .subscribe(data => {
       this.contact = data ;},
      err => {console.log(err) })
  }

  updateContact() {
    this.contactService.updateContact(this.contact).subscribe(data => {
      alert('mis à jour effectué');
      console.log(data);
      },err => {
      alert('Probeleme ');
      console.log(err);
    });
  }

}

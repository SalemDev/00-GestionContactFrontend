import {Component, inject, OnInit} from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
mode = 1;
  constructor(public contactService: ContactsService) {

  }

  contact: Contact = new Contact();

  ngOnInit() {
  }

  saveContact() {
// @ts-ignore
    this.contactService.saveContact(this.contact).subscribe(data => {
    this.contact = data;
      this.mode = 2;
      }
      , err => {
        console.log(err);
      })

  }
}

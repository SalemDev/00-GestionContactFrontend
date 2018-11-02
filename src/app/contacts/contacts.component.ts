import { Component, OnInit } from '@angular/core';


import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {ContactsService} from '../../services/contacts.service';
import {Router} from "@angular/router";
import {Contact} from "../../model/model.contact";




@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 pageContacts: any;
 motCle: String = '';
 currentPage = 0;
 size = 5;
 pages: any;

  constructor( public contactService: ContactsService, public router: Router) {
  }

  ngOnInit() {

}

doSearch() {
  // @ts-ignore
  this.contactService.getContacts(this.motCle, this.currentPage, this.size)
    .subscribe(data => {
      this.pageContacts = data;
      this.pages = Array( data.totalPages);
    }, err => {
      console.log(err);
    });
}

  goToPage(i: number) {
    this.currentPage = i;
    this.doSearch();
  }


chercher() {
this.doSearch();
}
  onEditContact(id: number) {
    this.router.navigate(['editContact', id]);

}

  onDeleteContact(contact: Contact) {

    let  confirm = window.confirm('ete vous sur ?')

    if (confirm) {
this.contactService.deleteContact(contact.id).subscribe(data => {
  this.pageContacts.content.splice(this.pageContacts.content.indexOf(contact), 1);
  }, err => {alert('not delted');
  });}
  }

}

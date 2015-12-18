import {Component} from 'angular2/core';

import {Contact} from './contact';
import {ContactDetailComponent} from './contact-detail.component';

import * as force from './force';

interface Contact {
    Id: string;
    Name: string;
};

@Component({
    selector: 'my-app',
    template: `
        <header><h1>Salesforce Contacts</h1></header>
        <div class="content">
            <ul class="contacts">
                <li *ngFor="#contact of contacts" (click)="onSelect(contact)" [class.selected]="contact === selectedContact">
                    {{contact.FirstName}} {{contact.LastName}}
                </li>
            </ul>
            <contact-detail [contact]="selectedContact"></contact-detail>
        </div>`,
    styles:[`
        header {background-color:#03A9F4; padding:14px; margin-bottom:12px; box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)}
        h1 {font-weight:300}
        header > h1 {font-weight:300; font-size:24px; margin:0; color: #FFFFFF}
        .content {display:flex}
        .contacts {list-style-type: none; width: 220px; margin: 0 24px 0 -24px}
        .contacts li {padding:4px 8px; cursor:pointer}
        .contacts li:hover {color:#369; background-color:#EEE}
        .selected { background-color:#EEE; color:#369}
    `],
    directives: [ContactDetailComponent]
})

export class AppComponent {

    public contacts:Contact[];
    public selectedContact:Contact;

    constructor() {

        force.init({
            appId: "3MVG9sG9Z3Q1Rlbc4tkIx2fI3ZUDVyYt86Ypl8ZqBXTpzPbQNHxq7gpwKcN75BB.fpgHxzSWgwgRY6nVfvBUe",
            proxyURL: "https://dev-cors-proxy.herokuapp.com/"
        });
        force.login().then(() => {
            force.query("select id, firstname, lastname, phone from contact").then(result => this.contacts = (<any>result).records);
        });
    }

    onSelect(contact: Contact) {
        this.selectedContact = contact;
    }

}
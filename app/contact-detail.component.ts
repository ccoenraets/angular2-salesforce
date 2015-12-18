import {Component} from 'angular2/core';

import {Contact} from './contact';

@Component({
    selector: 'contact-detail',
    inputs: ['contact'],
    template: `
        <div *ngIf="contact">
            <h2>{{contact.FirstName}} {{contact.LastName}} Details</h2>
            <div>
                <div><label>id: </label>{{contact.Id}}</div>
                <div>
                    <label>First Name:</label>
                    <input type="text" [(ngModel)]="contact.FirstName"/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" [(ngModel)]="contact.LastName"/>
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" [(ngModel)]="contact.Phone"/>
                </div>
            </div>
        </div>
    `,
    styles:[`
        label {display:inline-block; width:100px; padding:8px}
        h2 {margin-top:0; font-weight:300}
        input[type=text] {-webkit-appearance:none; width:150px; height:24px; padding:4px 8px; font-size:14px; line-height:1.42857143; border:1px solid #ccc; border-radius:2px;-webkit-box-shadow:none; box-shadow:none}
    `],
})

export class ContactDetailComponent {
    public contact: Contact;
}
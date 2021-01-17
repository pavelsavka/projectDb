import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from 'src/app/backend.service'; //was enigste manier om backend service te importeren.
import { Observable} from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http'; //import HTTP
import { Router, NavigationStart } from '@angular/router';







@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
@Input() name: string;


users: Observable<any>; //users en newUsers hebben wij nodig, hier maken wij deze aan.
newUser: Observable<any>;
notes: Observable<any>;
userWithNotes: Observable<any>;
userRemove: Observable<any>;
newNote: Observable<any>;
noteToRemove: Observable<any>;

constructor(private backendService: BackendService){ //geimporteerde service BackendService


}
ngOnInit(): void {



}

//getUsers method die wij oproepen in users.component.html
getUsers = () => {

 this.backendService.getUsers(); //via geimporteerde service roepen wij getUsers METHOD op.
 this.users = this.backendService.users; //via geimporteerde service roepen wij USERS op.
};

createUser = (userId, name) => {

this.backendService.createUser(userId, name); //via geimporteerde service roepen wij methode newUser
this.newUser = this.backendService.newUser; //via geimporteerde service roepen wij newUser op (variabele)
};



removeUser = (name) => {
this.backendService.removeUser(name); //v eimporteerde service roepen wij methode newUser
this.userRemove = this.backendService.userRemove; //via geimporteerde service roepen wij newUser op (variabele)
};



//NOTES ------------------------------------------------------------------------------
getNotes = (name) => {
 this.backendService.getNotes(name); //via geimporteerde service roepen wij getUsers METHOD op.
 this.userWithNotes = this.backendService.userWithNotes; //via geimporteerde service roepen wij USERS op.
};


addNote = (name, notes, cat) => {

this.backendService.addNote(name, notes, cat); //via geimporteerde service roepen wij methode newUser
this.newNote = this.backendService.newNote; //via geimporteerde service roepen wij newUser op (variabele)
};

removeNote = (userId, id) => {

this.backendService.removeNote(userId, id); //via geimporteerde service roepen wij methode newUser
this.noteToRemove = this.backendService.noteToRemove; //via geimporteerde service roepen wij newUser op (variabele)
};




//delete(user: User): Void{
  //this.users = this.users.filter(u => u!== user);
//  }








}

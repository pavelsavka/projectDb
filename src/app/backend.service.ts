import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'; //import HTTP
import { User } from "./user"; //Import zelf gemaakte USER
import { UserToAddNotes } from "./userToAddNotes"; //Import zelf gemaakte USERREMOVE
import { Observable} from 'rxjs'; //Import Observable
import { UserRemove } from "./userRemove"; //Import zelf gemaakte USERREMOVE
import { UserWithNotes } from "./userWithNotes"; //Import zelf gemaakte USERREMOVE


@Injectable({
  providedIn: 'root'
})
export class BackendService {


  // Link naar API op GLITCH
  readonly ROOT_URL = 'https://deep-honored-lavender.glitch.me';

  //users en newUser aangemaakt
  users: Observable<any>;
  newUser: Observable<any>;
  userRemove: Observable<any>;
  notes: Observable<any>;
  userNotes: Observable<any>;

  constructor(private http: HttpClient) { // Import in constructor HTTP



   }

   // Get users from API+++++++++++++++++++++++++++++++++++++werkt++++++++++++++++++++++++++++++++++++++++++++++
   getUsers = () => {
     //http.get wordt hier aangesproken
     this.users = this.http.get(this.ROOT_URL+'/users');
        console.log( this.users );
   };

   // Post user to API+++++++++++++++++++++++++++++++++++++++werkt++++++++++++++++++++++++++++++++++++++++++++++++
   createUser = (userId,name) => {
     const data: User = {
       userId: userId,
       name: name
     }
     //http.post user to api
     this.newUser = this.http.post(this.ROOT_URL+'/users', data);

   };

    // Post remove user to API++++++++++++++++++++++++++++++++++werkt++++++++++++++++++++++++++++++++++++++++++++
    removeUser = (name) => {
      const data: UserRemove = {
       name: name
      }

      this.userRemove = this.http.post(this.ROOT_URL+'/del', data);
     };


//NOTES TO DO..............................................

     getNotes = (name) => {
       const data: UserRemove = {
        name: name
      }

       //http.get wordt hier aangesproken
       this.notes = this.http.get(this.ROOT_URL+'/notes', {params: {name: name}});

       console.log( this.notes );
     };

     addNotes = (name, notes) => {
       const data: UserToAddNotes = {
         name: name,
         note: notes
       }
       //http.post user to api
       this.userNotes = this.http.post(this.ROOT_URL+'/addNotes', {params: {data}});

     };



};

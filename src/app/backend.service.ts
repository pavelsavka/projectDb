import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http'; //import HTTP
import { User } from "./user"; //Import zelf gemaakte USER
import { Note } from "./note"; //Import zelf gemaakte USERREMOVE
import { NewNotes } from "./newNotes"; //Import zelf gemaakte USERREMOVE
import { Observable} from 'rxjs'; //Import Observable
import { UserRemove } from "./userRemove"; //Import zelf gemaakte USERREMOVE
import { UserWithNotes } from "./userWithNotes"; //Import zelf gemaakte USERREMOVE
import { NoteToRemove } from "./noteToRemove"; //Import zelf gemaakte USERREMOVE


@Injectable({
  providedIn: 'root'
})
export class BackendService {


  // Link naar API op GLITCH
  readonly ROOT_URL = 'https://deep-honored-lavender.glitch.me';

  //users en newUser aangemaakt
  users: Observable<any>;
  notes: Observable<any>;
  userWithNotes: Observable<any>;
  noteToRemove: Observable<any>;

  newUser: Observable<any>;
  userRemove: Observable<any>;
  newNote: Observable<any>;

  constructor(private http: HttpClient) { // Import in constructor HTTP



   }

   // Get users from API+++++++++++++++++++++++++++++++++++++werkt++++++++++++++++++++++++++++++++++++++++++++++
   getUsers = () => {
     //http.get wordt hier aangesproken
     this.users = this.http.get(this.ROOT_URL+'/users');
               console.log(this.ROOT_URL+'/users');

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
      this.userRemove = this.http.post(this.ROOT_URL+'/remove', data);
     };


//NOTES API++++++++++++++++++++++++++++++++++werkt++++++++++++++++++++++++++++++++++++++++++++

     getNotes = (name) => {
       const data: UserRemove = {
        name: name
      }
      this.userWithNotes = this.http.get(this.ROOT_URL+'/notes', {params: {name: name}});
       console.log(this.userWithNotes);
     };

//NOTES API++++++++++++++++++++++++++++++++++werkt++++++++++++++++++++++++++++++++++++++++++++

     addNote = (name, content, cat) => {
       const data: Note = {
         content: content,
         name: name,
         cat: cat
       }
       //http.post user to api
       this.newNote = this.http.post(this.ROOT_URL+'/addnote', data);
        console.log("name " + name + " content " + content + " Categorie: "+cat);
     };

     //REMOVE // NOTE:
     removeNote = (userId, id) => {
       const data: NoteToRemove = {
         userId: userId,
         id: id
       }
       //http.post user to api
       this.noteToRemove = this.http.post(this.ROOT_URL+'/removeNote', data);
       console.log("user id: " + userId + "  note ID: " + id);
     };






};

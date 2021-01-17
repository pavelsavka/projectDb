import { Component,OnInit, Inject} from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { BackendService } from './backend.service';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'projectDb';
  notes: string[];


  constructor(private backendService: BackendService){



  }




  ngOnInit(): void {


  }

  }

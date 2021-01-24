import { Component } from '@angular/core';
import { Observable,interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { 
    // Observable.interval(10000).takeWhile(() => true).subscribe(() => this.function());
  }
  title = 'portfolio';

  function(){

  }
}



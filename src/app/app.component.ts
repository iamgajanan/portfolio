import { Component } from '@angular/core';
import { Observable,interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { 
   
  }
  title = 'portfolio';

  typeWriter(){
    var i = 0;
    var txt = 'Lorem ipsum dummy text blabla.';
    
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      var speed = 50;
      // Observable.interval(10000).takeWhile(() => true).subscribe(() => this.function());
      setTimeout(this.typeWriter,speed);
    }
  }
}



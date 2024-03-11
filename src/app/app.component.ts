import { Component, OnInit } from '@angular/core';
import { Observable, timeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'angular-observables-example';

  myObservable = new Observable((observer) => {
    console.log("Observable starts here");

    setTimeout(() => {
      observer.next(1);
    }, 1000);

    setTimeout(() => {
      observer.next(2);
    }, 2000);

    setTimeout(() => {
      observer.next(3);
    }, 3000);

    setTimeout(() => {
      observer.next(4);
    }, 4000);

    setTimeout(() => {
      observer.next(5);
    }, 5000);

  });

  ngOnInit(): void {
    this.myObservable.subscribe((value) => {
      console.info("Subsriber getting value : " + value);
    });
  }


}

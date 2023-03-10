import { Component } from '@angular/core';
import { Router,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subtitle:string = '';

  constructor(private router: Router){
    router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        this.navigate(event);
      }
    });
  }

  navigate(event:any){
    this.subtitle = event.url;
  }
    
}

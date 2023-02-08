import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  subtitle:string = '';

  // constructor(privete route: ActivateRoute){}

  ngOnInit(){
    this.subtitle = '計画実績記録';
  }

}

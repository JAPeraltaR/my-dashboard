import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { routes } from '@root/app.routes';



@Component({
  selector: 'app-side-menu',
  imports: [ RouterModule ],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public menuItems = routes
  .map( routes => routes.children ?? [])
  .flat()
  .filter( routes => routes && routes.path )
  .filter( routes => !routes.path?.includes(':'))

}

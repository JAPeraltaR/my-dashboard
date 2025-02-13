import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/request-response';
import { TitleComponent } from "@shared/title/title.component";
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';


@Component({
  selector: 'app-user',
  imports: [CommonModule, TitleComponent],
  styles: ``,
  template: `
    <app-title [titulo]="title()"/>
    @if( user() ) {
      <section>
        <img [srcset]="user()!.avatar" [alt]="user()!.first_name">
        <div>
          <h3> {{ name() }}</h3>
          <p> {{ user()?.email }} </p>
        </div>
      </section>
    } @else {
      <p>Cargando información</p>
    }
  `
})
export default class UserComponent {

  private route = inject( ActivatedRoute );
  private userService = inject( UsersService );

  // public user = signal<User|undefined>(undefined)
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.userService.getUserById(id) )
    )
  );

  public title = computed<string>(() => {
    if( this.user()){
      return `Informacion del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`;
    }
    return 'Informacion del usuario';
  });

  public name = computed<string>(() =>  `${this.user()?.first_name} ${this.user()?.last_name}`);



  constructor( ) {

  }

}

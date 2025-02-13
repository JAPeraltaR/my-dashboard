import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  styles: ``,
  template: `
    <!-- <h1 class="text-3xl mb-5">{{ title }} - {{ withShadow }}</h1> -->
    <h1 class="text-3xl mb-5">{{ title }}</h1>
  `
})
export class TitleComponent {

  @Input({ required: true, alias: 'titulo'}) title!: string
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;

}

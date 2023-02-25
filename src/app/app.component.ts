import { Component } from '@angular/core';
import { generalService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-tecnica-front';

  constructor( private _generalservice:generalService ){}
}

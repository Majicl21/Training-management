import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  exportAs: 'ngForm'
})
export class LandingPageComponent {
  input_key! : string;
  key ="admin2022";
}

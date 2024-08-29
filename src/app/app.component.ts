import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '../environments/environment';
import { SelectionButtonsComponent } from './selection-buttons/selection-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SelectionButtonsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    const script = this.document.createElement('script');
    const apiKey = import.meta.env['NG_APP_RESPONSIVE_VOICE_API_KEY'];
    script.src = `https://code.responsivevoice.org/responsivevoice.js?key=${apiKey}`;
    this.document.body.appendChild(script);
  }
}

import {Component} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

/**
 * @title Basic icons
 */
@Component({
  selector: 'icon-overview-example',
  templateUrl: 'logo-home.component.html',
  styleUrls: ['logo-home.component.css'],
  imports: [
    MatIcon
  ],
  standalone: true
})
export class IconOverviewExample {}

export class LogoHomeComponent {
}

import { Component } from '@angular/core';
import {NavComponent} from '../nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  title = '國際服兌換碼';
  subtitle = '原神、崩壞：星穹鐵道、絕區零';
}

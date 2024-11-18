import {Component} from '@angular/core';
import {NgIconComponent, provideIcons} from '@ng-icons/core';
import {matCloseRound, matMenuRound} from '@ng-icons/material-icons/round';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass',
  viewProviders: [provideIcons({matMenuRound, matCloseRound})],
})
export class NavComponent {
  openMenu(): void {
    document.getElementById('app-nav')?.classList.add('open');
    document.getElementById('app-nav-button')?.classList.add('open');
  }

  closeMenu(): void {
    document.getElementById('app-nav')?.classList.remove('open');
    document.getElementById('app-nav-button')?.classList.remove('open');
  }
}

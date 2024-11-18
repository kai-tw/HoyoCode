import {Component, Input} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {CodeData} from '../../data-model/code-data';
import {TimerComponent} from '../timer/timer.component';

@Component({
  selector: 'app-code-table',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    TimerComponent
  ],
  templateUrl: './code-table.component.html',
  styleUrl: './code-table.component.sass'
})
export class CodeTableComponent {
  @Input() tableType: string = '';
  @Input() codeList: CodeData[] = [];
  protected tableId: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.tableId = this.tableType;
    this.codeList = this.codeList.filter((data: CodeData) => data.game === this.tableType);
  }

  getUrl(code: string): string {
    switch (this.tableId) {
      case 'genshin':
        return `https://genshin.hoyoverse.com/gift?code=${code}`;
      case 'hsr':
        return `https://hsr.hoyoverse.com/gift?code=${code}`;
      case 'zenless':
        return `https://zenless.hoyoverse.com/redemption?code=${code}`;
      default:
        return '';
    }
  }
}

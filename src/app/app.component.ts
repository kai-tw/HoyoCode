import {Component, ContentChildren, QueryList} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {HeroComponent} from './hero/hero.component';
import {CodeTableComponent} from './code-table/code-table.component';
import {TabsComponent} from './tabs/tabs.component';
import {TabComponent} from './tab/tab.component';
import {CodeData} from '../data-model/code-data';
import {FooterComponent} from './footer/footer.component';
import {DisqusComponent} from './disqus/disqus.component';
import jsonData from '../assets/code.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    CodeTableComponent,
    TabsComponent,
    TabComponent,
    FooterComponent,
    DisqusComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  @ContentChildren(CodeTableComponent) codeTables!: QueryList<CodeTableComponent>;
  protected codeList: CodeData[] = jsonData
    .map((e) => new CodeData(e))
    .filter((e) => e.isValid())
    .sort(CodeData.compare);

  constructor() {
  }
}

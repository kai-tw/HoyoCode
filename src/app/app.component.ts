import { Component, ContentChildren, QueryList } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CodeTableComponent } from './code-table/code-table.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { CodeData } from '../data-model/code-data';
import { FooterComponent } from './footer/footer.component';
import { DisqusComponent } from './disqus/disqus.component';
import { HttpClient } from '@angular/common/http';
import { LoadingStatus } from '../data-model/loading-status';
import { GameType } from '../data-model/game-type';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CodeTableComponent,
    TabsComponent,
    TabComponent,
    FooterComponent,
    DisqusComponent,
    LoadingSpinnerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  protected status: LoadingStatus = LoadingStatus.LOADING;
  protected codeList: CodeData[] = [];
  protected GameTypeEnum = GameType;
  protected LoadingStatusEnum = LoadingStatus;
  private httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  ngAfterContentInit() {
    // this.httpClient
    //   .get("https://codehunter-api.kai-wu.net/")
    //   .subscribe((data) => {
    //     this.codeList = (data as Array<Object>)
    //       .map((e: any) => new CodeData(e))
    //       .filter((e: CodeData) => e.isValid())
    //       .sort(CodeData.compare);
    //     this.status = LoadingStatus.LOADED;
    //   });
  }

  protected isLoaded(): Boolean {
    return this.status === LoadingStatus.LOADED;
  }
}

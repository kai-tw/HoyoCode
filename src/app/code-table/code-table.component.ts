import { Component, Input } from "@angular/core";
import { NgClass, NgForOf } from "@angular/common";
import { CodeData } from "../../data-model/code-data";
import { TimerComponent } from "../timer/timer.component";
import { LoadingStatus } from "../../data-model/loading-status";
import { GameType } from "../../data-model/game-type";

@Component({
  selector: "app-code-table",
  standalone: true,
  imports: [NgClass, NgForOf, TimerComponent],
  templateUrl: "./code-table.component.html",
  styleUrl: "./code-table.component.sass",
})
export class CodeTableComponent {
  protected _codeList: CodeData[] = [];
  protected _status: LoadingStatus = LoadingStatus.LOADING;

  @Input() tableType: GameType = GameType.NONE;
  @Input("codeList")
  set codeList(codeList: CodeData[]) {
    this._codeList = codeList.filter(
      (data: CodeData) => data.game === this.tableType
    );
  }

  constructor() {}

  getUrl(code: string): string {
    switch (this.tableType) {
      case GameType.GENSHIN:
        return `https://genshin.hoyoverse.com/gift?code=${code}`;
      case GameType.HSR:
        return `https://hsr.hoyoverse.com/gift?code=${code}`;
      case GameType.ZZZ:
        return `https://zenless.hoyoverse.com/redemption?code=${code}`;
      default:
        return "";
    }
  }
}

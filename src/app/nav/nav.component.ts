import { Component } from "@angular/core";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { matCloseRound, matMenuRound } from "@ng-icons/material-icons/round";

@Component({
  selector: "app-nav",
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: "./nav.component.html",
  styleUrl: "./nav.component.sass",
  viewProviders: [provideIcons({ matMenuRound, matCloseRound })],
})
export class NavComponent {
  protected linkList = [
    {
      label: "Kaiの部落",
      url: "https://www.kai-wu.net",
    },
    {
      label: "意見回饋",
      url: "https://www.kai-wu.net/%e6%84%8f%e8%a6%8b%e5%9b%9e%e9%a5%8b/",
    },
  ];

  openMenu(): void {
    document.getElementById("app-nav")?.classList.add("open");
    document.getElementById("app-nav-button")?.classList.add("open");
  }

  closeMenu(): void {
    document.getElementById("app-nav")?.classList.remove("open");
    document.getElementById("app-nav-button")?.classList.remove("open");
  }
}

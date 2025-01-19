import { Component } from "@angular/core";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [NavComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.sass",
})
export class HeaderComponent {
  title = "CodeHunter";
  subtitle = "遊戲兌換碼分享平台";
}

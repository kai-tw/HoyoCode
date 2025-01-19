import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-tab",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tab.component.html",
  styleUrl: "./tab.component.sass",
})
export class TabComponent {
  @Input() title: string = "";
  @Input() isActive: boolean = false;
}

import { Component, OnInit } from "@angular/core";
import { ToggleService } from "./services/toggle/toggle.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  selectedImage: string;
  showModal: boolean = false;

  constructor(private toggleService: ToggleService) {}

  ngOnInit() {
    this.toggleService.showModal$.subscribe(
      (showModal) => (this.showModal = showModal)
    );

    this.toggleService.selectedImage$.subscribe(
      (selectedImage) => (this.selectedImage = selectedImage)
    );
  }
}

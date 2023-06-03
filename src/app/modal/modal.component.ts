import { Component, Input } from "@angular/core";
import { ToggleService } from "../services/toggle/toggle.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent {
  @Input() showModal: boolean;
  @Input() selectedImage: string;

  constructor(private toggleService: ToggleService) {}

  /**
   * Closing opened image
   */
  closeImageModal() {
    this.toggleService.selectedImage$.next("");
    this.toggleService.showModal$.next(!this.toggleService.showModal$);

    this.showModal = this.toggleService.showModal$.value;
    this.selectedImage = this.toggleService.selectedImage$.value;
  }
}

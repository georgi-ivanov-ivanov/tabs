import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "tabs",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"],
})
export class TabComponent implements OnInit {
  @Input() activeTab = 1;

  constructor() {
    this.ngOnInit();
  }

  /**
   * Selecting tab on load
   *
   * @param {Number} tabNumber
   */
  selectTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }

  ngOnInit(): void {
    this.selectTab(this.activeTab);
  }
}

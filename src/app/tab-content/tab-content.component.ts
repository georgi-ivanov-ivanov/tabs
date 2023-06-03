import { Component, OnInit } from "@angular/core";
import { MyDataService } from "../services/my-data/my-data.service";
import { take } from "rxjs/operators";
import { MockedData } from "../tab/app.types";
import { ToggleService } from "../services/toggle/toggle.service";

@Component({
  selector: "app-tab-content",
  templateUrl: "./tab-content.component.html",
  styleUrls: ["./tab-content.component.scss"],
})
export class TabContentComponent implements OnInit {
  filterCriteria = "";

  defaultData: MockedData[];
  filteredData: MockedData[];

  constructor(
    private myDataService: MyDataService,
    private toggleService: ToggleService
  ) {
    this.ngOnInit();
  }

  /**
   * Filter data by keyword
   *
   * @returns {MockedData[]} filtered data
   */
  applyFilter(): MockedData[] {
    if (this.filterCriteria.trim() === "")
      return (this.filteredData = this.defaultData);

    this.filteredData = this.defaultData.filter((item) =>
      item.title
        ? item.title.toLowerCase().includes(this.filterCriteria.toLowerCase())
        : ""
    );
  }

  /**
   * Opening modal
   *
   * @param {String} imageUrl
   */
  openImageModal(imageUrl: string) {
    this.toggleService.selectedImage$.next(imageUrl);
    this.toggleService.showModal$.next(true);
  }

  /**
   * Checking if title is too long then trim to 16 symbols
   *
   * @param {Object} data
   * @returns data
   */
  formatingData(data: MockedData[]) {
    return data.map(({ title, image }) =>
      title !== null
        ? { title: title.slice(0, 16), image: image }
        : { title, image }
    );
  }

  ngOnInit(): void {
    this.myDataService
      .getData()
      .pipe(take(1))
      .subscribe((data) => {
        this.defaultData = this.formatingData(data);
        this.filteredData = this.formatingData(data);
      });
  }
}

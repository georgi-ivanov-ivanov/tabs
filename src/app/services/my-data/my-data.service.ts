import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { UnsplashList } from "./my-data.types";
import { Observable } from "rxjs";
import { MockedData } from "src/app/tab/app.types";

@Injectable({
  providedIn: "root",
})
export class MyDataService {
  apiKey = "DyMXqFFSj6y-M5RdujOqxo7GPbaPoZHCfh2glhIKPGs";
  apiUrl = `https://api.unsplash.com/photos/?client_id=${this.apiKey}&per_page=30`;

  constructor(private http: HttpClient) {}

  /**
   * Formatting the data with the necessary key/values
   *
   * @param {Object} data
   * @returns {MockedData[]}
   */
  dataSerializer(data: UnsplashList[]): MockedData[] {
    return data.map(({ description, urls }) => {
      return {
        title: description,
        image: urls.thumb,
      };
    });
  }

  /**
   * Fetching the data form unsplash API
   *
   * @returns {UnsplashList[]} data
   */
  getData(): Observable<MockedData[]> {
    return this.http
      .get(this.apiUrl)
      .pipe(map((response: UnsplashList[]) => this.dataSerializer(response)));
  }
}

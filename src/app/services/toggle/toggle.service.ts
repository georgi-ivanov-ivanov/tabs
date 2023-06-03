import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ToggleService {
  showModal$ = new BehaviorSubject(false);
  selectedImage$ = new BehaviorSubject("");

  constructor() {}
}

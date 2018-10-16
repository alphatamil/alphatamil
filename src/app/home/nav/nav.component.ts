import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  menuClicked: boolean = false;
  constructor() {}

  ngOnInit() {}

  menuexpand() {
    this.menuClicked = !this.menuClicked;
  }
}

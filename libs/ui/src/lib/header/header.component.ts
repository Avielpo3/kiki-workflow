import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "kiki-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() title = 'aaa';


  constructor() {
  }

  ngOnInit(): void {
  }

}

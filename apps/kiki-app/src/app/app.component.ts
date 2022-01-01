import { CoreFacade } from '@kiki-workspace/app-core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kiki-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public coreFacade: CoreFacade) {}

  isUserAuth = false;

  ngOnInit(): void {
    this.coreFacade.isUserAuth$.subscribe(
      (isAuth) => (this.isUserAuth = isAuth)
    );
  }
}

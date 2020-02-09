import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-ssr';
  isSmallWidth = false;

  constructor(
    public changeDetectRef: ChangeDetectorRef,
    public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSmallWidth = false;
        } else {
          this.isSmallWidth = true;
        }
        this.changeDetectRef.markForCheck();
      });
  }
}

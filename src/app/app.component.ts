import {AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'waldinvest';

  @ViewChild('sidenav') sidenav;
    @ViewChild('sidenavvvvv') sidenavvvvv;

    public fullFooter = false;

    destroy = new Subject();

    destroy$ = this.destroy.asObservable();

    constructor() {
        fromEvent(window, 'scroll').pipe(takeUntil(this.destroy$))
            .subscribe((e: Event) => console.log(this.getYPosition(e)));
    }

    ngOnInit() {}

    ngAfterViewInit() {
        if (window.innerWidth <= 995) {
            this.fullFooter = true;
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        console.log(this.sidenavvvvv.nativeElement.offsetTop);

        this.fullFooter = this.sidenavvvvv.nativeElement.offsetTop !== 300;

        if (window.innerWidth <= 959) {
            if (this.sidenav._animationState === 'open') {
                this.sidenav.toggle();
            }
        } else {
            this.fullFooter = false;
        }
    }


    @HostListener('window:scroll', ['$event'])
    onScroll(e: Event): void {
        console.log(e);
    }

    getYPosition(e: Event): number {
        return (e.target as Element).scrollTop;
    }

    next() {

    }
}

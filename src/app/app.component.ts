import {AfterViewInit, Component, HostListener, ViewChild} from '@angular/core';
import {fromEvent, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{
    @ViewChild('sidenav') sidenav;
    @ViewChild('sideSectionRight') sideSectionRight;

    public fullFooter = false;

    destroy = new Subject();
    destroy$ = this.destroy.asObservable();

    constructor(private router: Router) {
        fromEvent(window, 'scroll').pipe(takeUntil(this.destroy$))
            .subscribe((e: Event) => console.log(this.getYPosition(e)));
    }

    ngAfterViewInit() {
        if (window.innerWidth <= 995) {
            this.fullFooter = true;
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.fullFooter = this.sideSectionRight.nativeElement.offsetTop !== 300;

        if (window.innerWidth <= 959) {
            if (this.sidenav._animationState === 'open') {
                this.sidenav.toggle();
            }
        } else {
            this.fullFooter = false;
        }
    }

    async navigateAndCloseNav(type: string) {
        this.sidenav.toggle();
        await this.router.navigate([type]);
    }

    getYPosition(e: Event): number {
        return (e.target as Element).scrollTop;
    }
}

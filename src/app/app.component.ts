import { Component, OnInit, ElementRef, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { DOCUMENT, isPlatformBrowser, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { StylesService } from './services/styles.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';
import { MatIconRegistry } from '@angular/material/icon';
import { fromEvent, Observable } from 'rxjs';
declare let $: any;
declare let fbq: Function;//facebook pixel
declare let gtag: Function;//facebook pixel

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
    location: any;
    routerSubscription: any;
    scroll: boolean = false;

    constructor(
        private router: Router,
        private stylesServices: StylesService,
        private elementRef: ElementRef,
        private sanitizer: DomSanitizer,
        private iconRegistry: MatIconRegistry,
        private authService: AuthService,
        @Inject(PLATFORM_ID) private platformId: Object

    ) {

        iconRegistry.addSvgIcon(
            'ico-wsp',
            sanitizer.bypassSecurityTrustResourceUrl('../assets/img/ico-wsp.svg')
        );
        this.authService.checkUser();
        if (isPlatformBrowser(this.platformId)) {
            //facebook pixel
            router.events.subscribe((y: NavigationEnd) => {
                if (y instanceof NavigationEnd) {
                    fbq('track', 'PageView');

                    //   gtag('config', 'G-8VTYKQ2XSH', {
                    //     'page_path' : y.urlAfterRedirects
                    //   })
                }
            })

            //////
        }
    }

    ngOnInit() {

        this.recallJsFuntions();
        this.subscribeToObservables()
        this.stylesServices.mainColor$.subscribe(
            color => this.changeColor(color)
        )
    }


    scroll$: Observable<any> = fromEvent(document, 'scroll');

    private subscribeToObservables() {
        this.scroll$.subscribe(() => {
            // console.log(this.scroll);
            
            this.scroll = true
            setTimeout(()=>{ 
                this.scroll = false
                // console.log(this.scroll);
            }, 2000);
            
        })

    }



    recallJsFuntions() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                $('.preloader').fadeIn('slow');
            }
        });

        this.routerSubscription = this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel)
            )
            .subscribe(event => {
                $.getScript('../assets/js/main.js');
                $('.preloader').fadeOut('slow');
                this.location = this.router.url;
                if (!(event instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);

                this.stylesServices.setMainColor();

            });
    }

    private changeColor(color) {
        const cambiaColor = this.elementRef.nativeElement.style.setProperty('--mainColor', color);
        this.sanitizer.bypassSecurityTrustStyle(cambiaColor);

    }
}
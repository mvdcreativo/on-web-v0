import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { StylesService } from './services/styles.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';
declare let $: any;

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

    constructor(
        private router: Router,
        private stylesServices : StylesService,
        private elementRef : ElementRef,
        private sanitizer: DomSanitizer,
        private authService: AuthService
    ) 
    {
        
    }

    ngOnInit(){
        this.authService.checkUser()
        this.recallJsFuntions();
        this.stylesServices.mainColor$.subscribe(
            color => this.changeColor(color)
        )
    }

    recallJsFuntions() {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationStart ) {
                $('.preloader').fadeIn('slow');
            }
        });
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
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


    private changeColor(color){
        const cambiaColor = this.elementRef.nativeElement.style.setProperty('--mainColor', color);
        this.sanitizer.bypassSecurityTrustStyle(cambiaColor);
        
    }
}
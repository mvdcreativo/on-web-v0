import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { CategoriesStyleOneComponent } from './components/common/categories-style-one/categories-style-one.component';
import { PartnerStyleOneComponent } from './components/common/partner-style-one/partner-style-one.component';
import { InstructorsStyleOneComponent } from './components/common/instructors-style-one/instructors-style-one.component';
import { BecomeInstructorPartnerComponent } from './components/common/become-instructor-partner/become-instructor-partner.component';
import { FeedbackStyleOneComponent } from './components/common/feedback-style-one/feedback-style-one.component';
import { OurMissionComponent } from './components/common/our-mission/our-mission.component';
import { InstructorsStyleTwoComponent } from './components/common/instructors-style-two/instructors-style-two.component';
import { WebinarCountdownComponent } from './components/common/webinar-countdown/webinar-countdown.component';
import { StudentsFeedbackFormComponent } from './components/common/students-feedback-form/students-feedback-form.component';
import { PartnerStyleTwoComponent } from './components/common/partner-style-two/partner-style-two.component';
import { OfferComponent } from './components/common/offer/offer.component';
import { CategoriesStyleTwoComponent } from './components/common/categories-style-two/categories-style-two.component';
import { FeedbackFormComponent } from './components/common/feedback-form/feedback-form.component';
import { HeaderStyleThreeComponent } from './components/common/header-style-three/header-style-three.component';
import { BoxesComponent } from './components/common/boxes/boxes.component';
import { FeedbackStyleTwoComponent } from './components/common/feedback-style-two/feedback-style-two.component';
import { InstructorsStyleThreeComponent } from './components/common/instructors-style-three/instructors-style-three.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { CategoriesStyleThreeComponent } from './components/common/categories-style-three/categories-style-three.component';
import { HeaderStyleFourComponent } from './components/common/header-style-four/header-style-four.component';
import { HowItWorksComponent } from './components/common/how-it-works/how-it-works.component';
import { AboutPageOneComponent } from './components/pages/about-page-one/about-page-one.component';
import { AboutPageTwoComponent } from './components/pages/about-page-two/about-page-two.component';
import { OurStoryComponent } from './components/common/our-story/our-story.component';
import { OurValuesComponent } from './components/common/our-values/our-values.component';
import { InstructorsPageOneComponent } from './components/pages/instructors-page-one/instructors-page-one.component';
import { InstructorsPageTwoComponent } from './components/pages/instructors-page-two/instructors-page-two.component';
import { InstructorsPageThreeComponent } from './components/pages/instructors-page-three/instructors-page-three.component';
import { InstructorsDetailsPageComponent } from './components/pages/instructors-details-page/instructors-details-page.component';
import { EventsPageComponent } from './components/pages/events-page/events-page.component';
import { EventsDetailsPageComponent } from './components/pages/events-details-page/events-details-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { PartnerPageComponent } from './components/pages/partner-page/partner-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';

import { ShopGridPageComponent } from './components/pages/shop-grid-page/shop-grid-page.component';
import { ShopFullWidthPageComponent } from './components/pages/shop-full-width-page/shop-full-width-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CoursesGridStyleOneColumnsFourPageComponent } from './components/pages/courses-grid-style-one-columns-four-page/courses-grid-style-one-columns-four-page.component';
import { CoursesGridStyleTwoColumnsTwoPageComponent } from './components/pages/courses-grid-style-two-columns-two-page/courses-grid-style-two-columns-two-page.component';
import { CoursesGridStyleTwoColumnsThreePageComponent } from './components/pages/courses-grid-style-two-columns-three-page/courses-grid-style-two-columns-three-page.component';
import { CoursesGridStyleThreeColumnsTwoPageComponent } from './components/pages/courses-grid-style-three-columns-two-page/courses-grid-style-three-columns-two-page.component';
import { CoursesGridStyleThreeColumnsThreePageComponent } from './components/pages/courses-grid-style-three-columns-three-page/courses-grid-style-three-columns-three-page.component';
import { DownloadsPageComponent } from './components/pages/downloads-page/downloads-page.component';
import { SharedModule } from './shared/shared.module';
import { indexAuthInterceptor } from './auth/helpers/index-auth.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyDashboardPageModule } from './components/pages/my-dashboard-page/my-dashboard-page.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';


///LOGIN SOCIAL
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { DecimalPipe } from '@angular/common';
import { NumberFormatPipe } from './shared/pipes/number-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PreloaderComponent,
    CategoriesStyleOneComponent,
    PartnerStyleOneComponent,
    InstructorsStyleOneComponent,
    BecomeInstructorPartnerComponent,
    FeedbackStyleOneComponent,
    OurMissionComponent,
    InstructorsStyleTwoComponent,
    WebinarCountdownComponent,
    StudentsFeedbackFormComponent,
    PartnerStyleTwoComponent,
    OfferComponent,
    CategoriesStyleTwoComponent,
    FeedbackFormComponent,
    HeaderStyleThreeComponent,
    BoxesComponent,
    FeedbackStyleTwoComponent,
    InstructorsStyleThreeComponent,
    FeaturesComponent,
    CategoriesStyleThreeComponent,
    HeaderStyleFourComponent,
    HowItWorksComponent,
    AboutPageOneComponent,
    AboutPageTwoComponent,
    OurStoryComponent,
    OurValuesComponent,
    InstructorsPageOneComponent,
    InstructorsPageTwoComponent,
    InstructorsPageThreeComponent,
    InstructorsDetailsPageComponent,
    EventsPageComponent,
    EventsDetailsPageComponent,
    PricingPageComponent,
    FeedbackPageComponent,
    PartnerPageComponent,
    FaqPageComponent,
    ErrorPageComponent,
    ComingSoonPageComponent,
    ShopGridPageComponent,
    ShopFullWidthPageComponent,
    ProductsDetailsPageComponent,
    ContactPageComponent,
    CoursesGridStyleOneColumnsFourPageComponent,
    CoursesGridStyleTwoColumnsTwoPageComponent,
    CoursesGridStyleTwoColumnsThreePageComponent,
    CoursesGridStyleThreeColumnsTwoPageComponent,
    CoursesGridStyleThreeColumnsThreePageComponent,
    DownloadsPageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    MyDashboardPageModule,
    //SOCIAL LOGIN
    SocialLoginModule
    ////////////

  ],
  providers: [
    DecimalPipe,
    NumberFormatPipe,
    indexAuthInterceptor,
    {provide: MAT_DATE_LOCALE, useValue: 'es-UY'},
    //// SOCIAL LOGIN
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '190156656420-4ujneje4n42drr4ujrh873psvbfu2sr7.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('2559039614396300')
          }
        ]
      } as SocialAuthServiceConfig,
    }
    ////////////////

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

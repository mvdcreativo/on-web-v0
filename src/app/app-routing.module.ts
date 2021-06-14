import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomePageOneComponent } from './components/pages/home-page-one/home-page-one.component';
// import { HomePageThreeComponent } from './components/pages/home-page-three/home-page-three.component';
// import { HomePageFourComponent } from './components/pages/home-page-four/home-page-four.component';
// import { HomePageFiveComponent } from './components/pages/home-page-five/home-page-five.component';
// import { HomePageSixComponent } from './components/pages/home-page-six/home-page-six.component';
// import { HomePageSevenComponent } from './components/pages/home-page-seven/home-page-seven.component';
// import { AboutPageOneComponent } from './components/pages/about-page-one/about-page-one.component';
// import { AboutPageTwoComponent } from './components/pages/about-page-two/about-page-two.component';
// import { InstructorsPageOneComponent } from './components/pages/instructors-page-one/instructors-page-one.component';
// import { InstructorsPageTwoComponent } from './components/pages/instructors-page-two/instructors-page-two.component';
// import { InstructorsPageThreeComponent } from './components/pages/instructors-page-three/instructors-page-three.component';
// import { InstructorsDetailsPageComponent } from './components/pages/instructors-details-page/instructors-details-page.component';
// import { EventsPageComponent } from './components/pages/events-page/events-page.component';
// import { EventsDetailsPageComponent } from './components/pages/events-details-page/events-details-page.component';
// import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
// import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
// import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
// import { PartnerPageComponent } from './components/pages/partner-page/partner-page.component';

// import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
// import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
// import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
// import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
// import { BlogFullWidthPageComponent } from './components/pages/blog-full-width-page/blog-full-width-page.component';
// import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
// import { ShopGridPageComponent } from './components/pages/shop-grid-page/shop-grid-page.component';
// import { ShopFullWidthPageComponent } from './components/pages/shop-full-width-page/shop-full-width-page.component';
// import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
// import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { InstructorsPageTwoComponent } from './components/pages/instructors-page-two/instructors-page-two.component';
import { BtnWspRedirectComponent } from './shared/components/btn-wsp-redirect/btn-wsp-redirect.component';

const routes: Routes = [
    {path: 'contacto/whatsapp', component: BtnWspRedirectComponent},
    {path: 'contacto', component: ContactPageComponent},

    { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
    { path: 'nosotros', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
    { path: 'login', loadChildren: () => import('./components/pages/login-page/login-page.module').then(m => m.LoginPageModule) },
    { path: 'registro', loadChildren: () => import('./components/pages/register-page/register-page.module').then(m => m.RegisterPageModule) },
    { path: 'cursos', loadChildren: () => import('./components/pages/courses/courses.module').then(m => m.CoursesModule)},
    { 
      path: 'mi-cuenta', 
      loadChildren: ()=> import('./components/pages/my-dashboard-page/my-dashboard-page.module').then(m => m.MyDashboardPageModule),
      canActivate: [AuthGuard]
    },
    { 
      path: 'orden-de-compra', 
      loadChildren: ()=> import('./components/pages/checkout-page/checkout-page.module').then(m => m.CheckoutPageModule),
      canActivate: [AuthGuard]
    },
    { 
      path: 'carrito', 
      loadChildren: ()=> import('./components/pages/cart-page/cart-page.module').then(m => m.CartPageModule),
    },
    { 
      path: 'docentes', 
      loadChildren: () => import('./components/pages/instructors/instructors.module').then(m => m.InstructorsModule) 
    },
    { path: 'pagina-no-encontrada', component: ErrorPageComponent },
    { path: '**', redirectTo: '/pagina-no-encontrada', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
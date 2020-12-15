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
// import { CategoryPageOneComponent } from './components/pages/category-page-one/category-page-one.component';
// import { CategoryPageTwoComponent } from './components/pages/category-page-two/category-page-two.component';
// import { CategoryPageThreeComponent } from './components/pages/category-page-three/category-page-three.component';
// import { CoursesListPageComponent } from './components/pages/courses-list-page/courses-list-page.component';
// import { CoursesGridStyleOneColumnsThreePageComponent } from './components/pages/courses-grid-style-one-columns-three-page/courses-grid-style-one-columns-three-page.component';
// import { CoursesGridStyleOneColumnsFourPageComponent } from './components/pages/courses-grid-style-one-columns-four-page/courses-grid-style-one-columns-four-page.component';
// import { CoursesGridStyleTwoColumnsTwoPageComponent } from './components/pages/courses-grid-style-two-columns-two-page/courses-grid-style-two-columns-two-page.component';
// import { CoursesGridStyleTwoColumnsThreePageComponent } from './components/pages/courses-grid-style-two-columns-three-page/courses-grid-style-two-columns-three-page.component';
// import { CoursesGridStyleThreeColumnsThreePageComponent } from './components/pages/courses-grid-style-three-columns-three-page/courses-grid-style-three-columns-three-page.component';
// import { CoursesGridStyleThreeColumnsTwoPageComponent } from './components/pages/courses-grid-style-three-columns-two-page/courses-grid-style-three-columns-two-page.component';
// import { CoursesDetailsPageComponent } from './components/pages/courses-details-page/courses-details-page.component';
// import { MyDashboardPageComponent } from './components/pages/my-dashboard-page/my-dashboard-page.component';
// import { OrdersPageComponent } from './components/pages/orders-page/orders-page.component';
// import { DownloadsPageComponent } from './components/pages/downloads-page/downloads-page.component';
// import { EditAddressPageComponent } from './components/pages/edit-address-page/edit-address-page.component';
// import { EditAccountPageComponent } from './components/pages/edit-account-page/edit-account-page.component';
// import { EditBillingAddressPageComponent } from './components/pages/edit-billing-address-page/edit-billing-address-page.component';
// import { EditShippingAddressPageComponent } from './components/pages/edit-shipping-address-page/edit-shipping-address-page.component';

const routes: Routes = [
    // {path: '', component: HomePageOneComponent},
    // {path: 'distant-learning', component: HomePageThreeComponent},
    // {path: 'modern-teaching', component: HomePageFourComponent},
    // {path: 'online-schooling', component: HomePageFiveComponent},
    // {path: 'learning-school-online', component: HomePageSixComponent},
    // {path: 'remote-training-online', component: HomePageSevenComponent},
    // {path: 'about-style-1', component: AboutPageOneComponent},
    // {path: 'about-style-2', component: AboutPageTwoComponent},
    // {path: 'instructor-1', component: InstructorsPageOneComponent},
    // {path: 'instructor-2', component: InstructorsPageTwoComponent},
    // {path: 'instructor-3', component: InstructorsPageThreeComponent},
    // {path: 'single-instructor', component: InstructorsDetailsPageComponent},
    // {path: 'gallery', component: GalleryPageComponent},
    // {path: 'events', component: EventsPageComponent},
    // {path: 'single-events', component: EventsDetailsPageComponent},
    // {path: 'pricing', component: PricingPageComponent},
    // {path: 'feedback', component: FeedbackPageComponent},
    // {path: 'partner', component: PartnerPageComponent},
    // {path: 'faqs', component: FaqPageComponent},
    // {path: 'coming-soon', component: ComingSoonPageComponent},
    // {path: 'courses-category-style-1', component: CategoryPageOneComponent},
    // {path: 'courses-category-style-2', component: CategoryPageTwoComponent},
    // {path: 'courses-category-style-3', component: CategoryPageThreeComponent},
    // {path: 'cursos', component: CoursesListPageComponent},
    // {path: 'cursos/destacados/:destacados', component: CoursesListPageComponent},
    // {path: 'cursos/:categorySlug', component: CoursesListPageComponent},
    // {path: 'buscar/cursos/:search', component: CoursesListPageComponent},
    // {path: 'cursos1', component: CoursesGridStyleOneColumnsThreePageComponent},
    // {path: 'courses-4-columns-style-1', component: CoursesGridStyleOneColumnsFourPageComponent},
    // {path: 'courses-2-columns-style-2', component: CoursesGridStyleTwoColumnsTwoPageComponent},
    // {path: 'courses-3-columns-style-2', component: CoursesGridStyleTwoColumnsThreePageComponent},
    // {path: 'courses-4-columns-style-2', component: CoursesGridStyleTwoColumnsFourPageComponent},
    // {path: 'courses-2-columns-style-3', component: CoursesGridStyleThreeColumnsTwoPageComponent},
    // {path: 'courses-3-columns-style-3', component: CoursesGridStyleThreeColumnsThreePageComponent},
    // {path: 'courses-4-columns-style-3', component: CoursesGridStyleThreeColumnsFourPageComponent},
    // {path: 'curso/:slug', component: CoursesDetailsPageComponent},
    // {path: 'orders', component: OrdersPageComponent},
    // {path: 'downloads', component: DownloadsPageComponent},
    // {path: 'edit-address', component: EditAddressPageComponent},
    // {path: 'edit-billing-address', component: EditBillingAddressPageComponent},
    // {path: 'edit-shipping-address', component: EditShippingAddressPageComponent},
    // {path: 'blog-style-1', component: BlogGridPageComponent},
    // {path: 'blog-style-2', component: BlogRightSidebarPageComponent},
    // {path: 'blog-style-3', component: BlogFullWidthPageComponent},
    // {path: 'single-blog', component: BlogDetailsPageComponent},
    // {path: 'shop-grid', component: ShopGridPageComponent},
    // {path: 'shop-grid-fullwidth', component: ShopFullWidthPageComponent},
    // {path: 'single-products', component: ProductsDetailsPageComponent},
    // {path: 'cart', component: CartPageComponent},
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
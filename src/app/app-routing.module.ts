import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ErrorPageComponent } from './components/pages/error-page/error-page.component';

import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
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
    { path: 'comunidad', loadChildren: () => import('./components/pages/community-feed-i/community-feed-i.module').then(m => m.CommunityFeedIModule) },
    { path: 'aprendo-en-casa', loadChildren: () => import('./components/pages/aprendo-en-casa-feed-i/aprendo-en-casa-feed-i.module').then(m => m.AprendoEnCasaFeedIModule) },
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { ConfigurationComponent } from "./configuration/configuration.component";
import { IsLocalStorageCheckedGuard } from "./shared/guards/is-local-storage-checked.guard";
import { LocalStorageKeyEnum } from "./enums/local-storage-key-enums";
import { WriteReviewComponent } from "./write-review/write-review.component";
import { PageErrorComponent } from "./page-error/page-error.component";
import { LoginComponent } from "./login/login.component";
import { ExistingSessionGuard } from "./shared/guards/existing-session.guard";
import { LogoutComponent } from "./logout/logout.component";
import { AuthGuard } from "./shared/guards/auth.guard";
import { QuotesResolver } from "./shared/resolvers/quotes.resolver";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'write-review',
    component: WriteReviewComponent,
    canActivate: [IsLocalStorageCheckedGuard],
    data: { storageKey: LocalStorageKeyEnum.IsReviewPageEnabled },
  },
  {
    path: 'system-configuration',
    component: ConfigurationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ExistingSessionGuard],
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module')
      .then(m => m.DashboardModule),
    canActivate: [AuthGuard],
    resolve: { quote: QuotesResolver }
  },
  // Page for handling errors
  {
    path: 'page-error',
    component: PageErrorComponent,
  },
  // Automatically handle page that does not exist
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

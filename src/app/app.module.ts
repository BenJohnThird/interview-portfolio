import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavigationComponent } from './navigation/navigation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkExperiencesComponent } from './work-experiences/work-experiences.component';
import { CommonPanelComponent } from "./shared/common-panel/common-panel.component";
import { PipesModule } from "./shared/pipes/pipes.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { FormsModule } from "@angular/forms";
import { GuardsModule } from "./shared/guards/guards.module";
import { WriteReviewComponent } from './write-review/write-review.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatError, MatFormField, MatHint, MatLabel, MatSuffix } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { CdkTextareaAutosize } from "@angular/cdk/text-field";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { MatSlideToggle } from "@angular/material/slide-toggle";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatDrawer, MatDrawerContainer } from "@angular/material/sidenav";
import { MatIcon } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavbarComponent,
    WorkExperiencesComponent,
    PageNotFoundComponent,
    HomeComponent,
    ConfigurationComponent,
    WriteReviewComponent,
    PageErrorComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonPanelComponent,
    PipesModule,
    FormsModule,
    GuardsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatError,
    MatHint,
    MatSuffix,
    CdkTextareaAutosize,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatSlideToggle,
    MatButton,
    MatDrawerContainer,
    MatDrawer,
    MatIcon,
    MatIconButton,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' }
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

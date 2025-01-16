import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLocalStorageCheckedGuard } from "./is-local-storage-checked.guard";
import { ExistingSessionGuard } from "./existing-session.guard";
import { AuthGuard } from "./auth.guard";

@NgModule({
  declarations: [],
  providers: [
    IsLocalStorageCheckedGuard,
    ExistingSessionGuard,
    AuthGuard,
  ],
  imports: [
    CommonModule,
  ]
})
export class GuardsModule { }

import { AuthenticationService } from "../services/authentication.service";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class AuthenticationServiceMock extends AuthenticationService {

  public override login(userEmail: string, password: string): Observable<any> {
    return of(null);
  }
}

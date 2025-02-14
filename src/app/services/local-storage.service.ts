import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Local storage service for handling local storage implementations
 */
export class LocalStorageService {

  constructor() { }

  /**
   * Checks if the local storage value === TRUE
   * @param localStorageKey
   */
  public isLocalStorageKeyEnabled(localStorageKey: string): boolean {
    return localStorage.getItem(localStorageKey) === 'true';
  }

  /**
   * Sets the local storage by the provided value
   * @param localStorageKey
   * @param value
   */
  public setLocalStorageKey(localStorageKey: string, value: boolean | string): void {
    localStorage.setItem(localStorageKey, (value).toString());
  }

  /**
   * Removes the local storage
   * @param localStorageKey
   */
  public removeLocalStorageKey(localStorageKey: string): void {
    localStorage.removeItem(localStorageKey);
  }
}

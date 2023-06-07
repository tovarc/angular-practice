import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkService {
  constructor() {
    // const currentDarkMode = localStorage.getItem('dark');
    //
    // if (currentDarkMode !== null) {
    //   this.dark.next(JSON.parse(currentDarkMode));
    // }

    const currentDarkMode = localStorage.getItem('dark');

    if (currentDarkMode !== null) {
      this.dark.set(JSON.parse(currentDarkMode));
    }
  }

  public dark = signal<boolean>(false);

  public toggleCurrentDarkMode(): void {
    localStorage.setItem('dark', JSON.stringify(!this.dark()));
    this.dark.set(!this.dark());
  }

  // private dark: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //
  // //toggle dark theme and update the localStorage value
  // public toggleCurrentDarkMode(): void {
  //   localStorage.setItem('dark', JSON.stringify(!this.dark.value));
  //   this.dark.next(!this.dark.value);
  // }
  //
  // // get current dark theme value
  // public getCurrentDarkMode(): Observable<boolean> {
  //   return this.dark.asObservable();
  // }
}

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      {
        path: 'testing',
        loadComponent: () => import('./app/testing.component'),
      },
      {
        path: 'form',
        loadComponent: () => import('./app/form.component'),
      },
    ]),
  ],
});

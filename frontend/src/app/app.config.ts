import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser'; // ✅ Corrected import
import { provideHttpClient } from '@angular/common/http'; // ✅ Corrected placement

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(), // ✅ Now imported from the correct module
    provideHttpClient() // ✅ Ensures HttpClient is globally available
  ]
};

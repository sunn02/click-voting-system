import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
        
        provideZoneChangeDetection({ eventCoalescing: true }), 
        provideHttpClient(),  
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: Aura, options: { primaryColor: 'noir', darkModeSelector: ''} }})
]
};

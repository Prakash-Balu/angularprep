import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'awesome',
        loadComponent: () =>
            import('./awesomecounter/awesomecounter.component')
            .then(m => m.AwesomecounterComponent)
    },
    {
        path: 'counter',
        loadComponent: () => 
            import('./counter/counter.component')
            .then(m=> m.CounterComponent)
    },
    {
        path: 'parent',
        loadComponent: () => 
            import('./parent/parent.component')
            .then(m=> m.ParentComponent)
    },
    {
        path: 'communication',
        loadComponent: () => 
            import('./communication/parent/parent.component')
            .then(m=> m.ParentComponent)
    },
    {
        path: 'main-box',
        loadComponent: () => 
            import('./main-box/main-box.component')
            .then(m=> m.MainBoxComponent)
    },
    {
        path: 'invoice',
        loadComponent: () => 
            import('./components/invoice/invoice.component')
            .then(m=> m.InvoiceComponent)
    },
    {
        path: 'weather',
        loadComponent: () => 
            import('./components/weather/weather.component')
            .then(m=> m.WeatherComponent)
    }
];

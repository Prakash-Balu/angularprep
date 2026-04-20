import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'awesome',
        loadComponent: () =>
            import('./components/awesomecounter/awesomecounter.component')
            .then(m => m.AwesomecounterComponent)
    },
    {
        path: 'counter',
        loadComponent: () => 
            import('./components/counter/counter.component')
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
            import('./components/communication/parent/parent.component')
            .then(m=> m.ParentComponent)
    },
    {
        path: 'main-box',
        loadComponent: () => 
            import('./components/main-box/main-box.component')
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
    },
    {
        path: 'search',
        loadComponent: () => 
            import('./components/search/search.component')
            .then(m=> m.SearchComponent)
    },
    {
        path: 'clock',
        loadComponent: () => 
            import('./components/clock/clock.component')
            .then(m=> m.ClockComponent)
    },
    {
        path: 'cart',
        loadComponent: () => 
            import('./components/cart/cart.component')
            .then(m=> m.CartComponent)
    },
    {
        path: 'temperature',
        loadComponent: () => 
            import('./components/temperature/temperature.component')
            .then(m=> m.TemperatureComponent)
    },
    {
        path: 'stock-alert',
        loadComponent: () => 
            import('./components/notification/notification.component')
            .then(m=> m.NotificationComponent)
    },
    {
        path: 'user-search',
        loadComponent: () => 
            import('./components/user-search/user-search.component')
            .then(m=> m.UserSearchComponent)
    },
    {
        path: 'master-details',
        loadComponent: () => 
            import('./components/master-detail/master-detail.component')
            .then(m=> m.MasterDetailComponent)
    },
    {
        path: 'auto-save',
        loadComponent: () => 
            import('./components/auto-save/auto-save.component')
            .then(m=> m.AutoSaveComponent)
    },
    {
        path: 'live-dashboard',
        loadComponent: () => 
            import('./components/live-dashboard/live-dashboard.component')
            .then(m=> m.LiveDashboardComponent)
    }
];

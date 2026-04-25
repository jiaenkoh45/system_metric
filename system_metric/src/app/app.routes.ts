import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard.component';
import { Devices } from './pages/devices/devices.component';
import { Settings } from './pages/settings/settings.component';

export const routes: Routes = [
    { path: 'dashboard', component: Dashboard },
    { path: 'devices', component: Devices },
    { path: 'setting', component: Settings },
];


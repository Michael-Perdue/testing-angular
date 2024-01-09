import { Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { SettingsComponent } from './settings/settings.component';
import { TimerComponent } from './timer/timer.component';
export const routes: Routes = [
  {path: "clock", component: ClockComponent},
  {path: "settings", component: SettingsComponent},
  {path: "timer", component: TimerComponent},
  { path: '', redirectTo: 'clock', pathMatch: 'full' },
];

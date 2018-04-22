import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevicesComponent } from './devices/devices.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterViewComponent } from './filter-view/filter-view.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { CompareViewComponent } from './compare-view/compare-view.component';
import { QuizViewComponent } from './quiz-view/quiz-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'devices/search', component: SearchViewComponent},
  { path: 'filter', component: FilterViewComponent},
  { path: 'devices/device/:slug', component: DeviceDetailsComponent },
  { path: 'devices/compare', component: CompareViewComponent },
  { path: 'quiz', component: QuizViewComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

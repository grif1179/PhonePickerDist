import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DevicesComponent } from './devices/devices.component';
import { DevicesService } from './devices.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FilterService } from './filter.service';
import { FilterViewComponent } from './filter-view/filter-view.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { CompareViewComponent } from './compare-view/compare-view.component';
import { QuizViewComponent } from './quiz-view/quiz-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceDetailsComponent,
    DevicesComponent,
    MessagesComponent,
    DashboardComponent,
    HeaderComponent,
    SearchComponent,
    FilterViewComponent,
    SearchViewComponent,
    CompareViewComponent,
    QuizViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot()
  ],
  providers: [
    DevicesService,
    MessageService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

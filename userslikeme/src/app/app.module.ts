import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxPageNameComponent } from './box-page-name/box-page-name.component';
import { BoxTitlePageComponent } from './box-title-page/box-title-page.component';
import { BoxPhotoComponent } from './box-photo/box-photo.component';
import { BoxFollowComponent } from './box-follow/box-follow.component';
import { BoxMainInfoComponent } from './box-main-info/box-main-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxPageNameComponent,
    BoxTitlePageComponent,
    BoxPhotoComponent,
    BoxFollowComponent,
    BoxMainInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

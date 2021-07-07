import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxPageNameComponent } from './box-page-name/box-page-name.component';
import { BoxTitlePageComponent } from './box-title-page/box-title-page.component';
import { BoxPhotoComponent } from './box-photo/box-photo.component';
import { BoxFollowComponent } from './box-follow/box-follow.component';
import { BoxMainInfoComponent } from './box-main-info/box-main-info.component';
import { BoxPersonalInfoUserComponent } from './box-personal-info-user/box-personal-info-user.component';
import { BoxContactInfoComponent } from './box-contact-info/box-contact-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxPageNameComponent,
    BoxTitlePageComponent,
    BoxPhotoComponent,
    BoxFollowComponent,
    BoxMainInfoComponent,
    BoxPersonalInfoUserComponent,
    BoxContactInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

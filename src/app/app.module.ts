import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from './modules/navbar/navbar.module';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { AppComponent } from './app.component';
import { LeftSidebarModule } from './modules/left-sidebar/left-sidebar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LeftSidebarModule,
    HttpClientModule,
    NavbarModule,
    UserProfileModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { AdminComponent } from './header/admin/admin.component';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { Subscribe } from './Services/Subscribe.service';
import { FormsModule } from '@angular/forms';
import { Users } from './Services/Users.service';
import { Logger } from './Services/Logger.service';

export const user_ = new InjectionToken<Users>('User_token');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    UserDetailComponent,
    UserListComponent,
    HeroComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // providers: [Subscribe,{provide:Users, useClass:Users},Logger],
  providers: [Subscribe,{provide:user_, useClass:Users}],
  bootstrap: [AppComponent]
})
export class AppModule { }

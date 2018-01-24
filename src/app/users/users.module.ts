import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserComponent, UserArrayService } from '.';
import { UsersRoutingModule, usersRouterComponents } from './users.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [
    usersRouterComponents,
    UserComponent
  ],
  providers: [
    UserArrayService
  ]
})
export class UsersModule {}

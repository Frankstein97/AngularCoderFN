import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { FormsModule } from './pages/forms/forms.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


import { DashboardComponent } from './dashboard.component';

import { StudentsModule } from './pages/students/students.module';
import { ClassesModule } from './pages/classes/classes.module';
import { CoursesModule } from './pages/courses/courses.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,

    StudentsModule,
    ClassesModule,
    CoursesModule,

    MatToolbarModule,
    MatListModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }

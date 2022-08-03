import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MaterialModule } from './../material/material.module';
import { HorizontalbarComponent } from './widgets/horizontalbar/horizontalbar.component';
import { VerticalbarchartComponent } from './widgets/verticalbarchart/verticalbarchart.component';
import { PiechartComponent } from './widgets/piechart/piechart.component';
import { UserprofileComponent } from './widgets/userprofile/userprofile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HorizontalbarComponent,
    HorizontalbarComponent,
    VerticalbarchartComponent,
    PiechartComponent,
    UserprofileComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HorizontalbarComponent,
    VerticalbarchartComponent,
    PiechartComponent,
    UserprofileComponent,
  ],
})
export class SharedModule {}

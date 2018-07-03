import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HellowComponent } from './hellow/hellow.component';
import { ProjectComponent } from './project/project.component';
import { ProjectPart2Component } from './project-part2/project-part2.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { HobbyComponent } from './hobby/hobby.component';

@NgModule({
  declarations: [
    AppComponent,
    HellowComponent,
    ProjectComponent,
    ProjectPart2Component,
    SkillsComponent,
    ContactComponent,
    HobbyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

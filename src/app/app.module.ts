import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnsemblModule } from './ensembl/ensembl.module';
import { UcscModule } from './ucsc/ucsc.module';
import { CoordindateComponent } from './coordindate/coordindate.component';
import { MaskOptionComponent } from './mask-option/mask-option.component';
import { SpeciesComponent } from './species/species.component';
import { QualificationComponent } from './qualification/qualification.component';
import { SequencesResultsComponent } from './sequence-results/sequences-results.component';
import { Parameter4EnsemblPipe } from './parameter4-ensembl.pipe';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResearchComponent } from './research/research.component';
import { WorkComponent } from './work/work.component';
import { InterestsComponent } from './interests/interests.component';
import { ThemesComponent } from './themes/themes.component';
import { MachinelearningComponent } from './machinelearning/machinelearning.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { BoardComponent } from './board/board.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParallelandConcurrencyComponent } from './paralleland-concurrency/paralleland-concurrency.component';
import { MessageComponent } from './message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CoordindateComponent,
    MaskOptionComponent,
    SpeciesComponent,
    QualificationComponent,
    SequencesResultsComponent,
    Parameter4EnsemblPipe,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ResearchComponent,
    WorkComponent,
    InterestsComponent,
    ThemesComponent,
    MachinelearningComponent,
    VisualizationComponent,
    BoardComponent,
    PagenotfoundComponent,
    ParallelandConcurrencyComponent,
    MessageComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnsemblModule,
    UcscModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

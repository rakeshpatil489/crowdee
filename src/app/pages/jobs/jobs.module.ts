import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeModule } from '../../@theme/theme.module';
import { JobsComponents } from './jobs.component';
import { ChartModule } from 'angular2-chartjs';

import { ECommerceProgressSectionComponent } from './progress-section/progress-section.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { JobsService } from '../extra-components/services/jobs.service';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    NgxPaginationModule,
    
  ],
  declarations: [
   JobsComponents,
    ECommerceProgressSectionComponent,
  ],
  providers: [
    JobsService
  ],
})
export class ECommerceModule { 


  
}

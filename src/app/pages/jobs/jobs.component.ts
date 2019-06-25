import { Component, OnInit } from '@angular/core';
import { DataTem } from '../extra-components/models/http.jobs';
import { JobsService } from '../extra-components/services/jobs.service';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponents implements OnInit {
  p : number = 1;
  id: number;
  title: string;
  description: any;
  rewards: any;
  currency: string;
  dataTemp: DataTem;
  mainarray: any = [];
  rewardTemp: any;
  rewardPresent: boolean = false;

  constructor(private dataService: JobsService) { }
   

  ngOnInit() {
    this.dataService.getData()
      .subscribe(data => {
        data.map(item => {
          if (item.rewards) {
            this.rewardTemp = item.rewards.find(x => x.currency === 'EUR');
            if (this.rewardTemp) {
              this.rewardTemp.currency = this.rewardTemp.currency;
              this.rewardTemp.amount = this.rewardTemp.amount;
              this.rewardPresent = true;
              this.dataTemp = new DataTem(item.id, item.title, item.description, this.rewardTemp, this.rewardTemp.currency, this.rewardTemp.amount, this.rewardPresent)
            } else {
              this.rewardPresent = false;
              this.dataTemp = new DataTem(item.id, item.title, item.description, null, null, null, this.rewardPresent)
            }
          }
          this.mainarray.push(this.dataTemp);
        });
        console.log(this.mainarray);
      });
  }
}

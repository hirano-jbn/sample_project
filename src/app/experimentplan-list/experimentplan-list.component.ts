import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-experimentplan-list',
  templateUrl: './experimentplan-list.component.html',
  styleUrls: ['./experimentplan-list.component.scss']
})
export class ExperimentplanListComponent implements OnInit{

  experiment_planning_id:string | undefined ;/*実験計画名*/
  objective!:string; /*目的*/
  experiment_overview!:string;/*実験概要 物理名変更の可能性あり*/
  experiment_manager!:string;	/*実験責任者*/
  experiment_start_expected_date!:Date;/*計画開始日*/
  experiment_end_expected_date!:Date;/*計画終了日*/
  experiment_name!:string;/*実験計画名*/
  constructor(){}

  ngOnInit() {
    this.experiment_planning_id='計画実績記録A';
      
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-team',
  templateUrl: './core-team.page.html',
  styleUrls: ['./core-team.page.scss'],
})
export class CoreTeamPage implements OnInit {

  public markUrl='../../../assets/mark.png';
  public odainUrl='../../../assets/odain.png'
  public juleenUrl='../../../assets/juleen.png'
  public roshUrl='../../../assets/rosh.png'

  constructor() { }

  ngOnInit() {
  }

}

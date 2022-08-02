import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-team',
  templateUrl: './add-edit-team.component.html',
  styleUrls: ['./add-edit-team.component.css']
})
export class AddEditTeamComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  TeamId:string;
  TeamName:string;

  ngOnInit(): void {
    this.TeamId=this.dep.TeamId;
    this.TeamName=this.dep.TeamName;
  }

  addTeam(){
    var val = {TeamId:this.TeamId,
                TeamName:this.TeamName};
    this.service.addTeam(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTeam(){
    var val = {TeamId:this.TeamId,
      TeamName:this.TeamName};
    this.service.updateTeam(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}

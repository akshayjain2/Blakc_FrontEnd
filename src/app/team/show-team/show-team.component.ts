import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-team',
  templateUrl: './show-team.component.html',
  styleUrls: ['./show-team.component.css']
})
export class ShowTeamComponent implements OnInit {

  constructor(private service:SharedService) { }

  TeamList:any=[];

  ModalTitle:string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  TeamIdFilter:string="";
  TeamNameFilter:string="";
  TeamListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      TeamId:0,
      TeamName:""
    }
    this.ModalTitle="Add Team";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item){
    this.dep=item;
    this.ModalTitle="Edit Team";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteTeam(item.TeamId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }


  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.TeamList=data;
      this.TeamListWithoutFilter=data;
    });
  }

  FilterFn(){
    var TeamIdFilter = this.TeamIdFilter;
    var TeamNameFilter = this.TeamNameFilter;

    this.TeamList = this.TeamListWithoutFilter.filter(function (el){
        return el.TeamId.toString().toLowerCase().includes(
          TeamIdFilter.toString().trim().toLowerCase()
        )&&
        el.TeamName.toString().toLowerCase().includes(
          TeamNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.TeamList = this.TeamListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}

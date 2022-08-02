import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";
readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/viewConsole/');
  }

  addTeam(val:any){
    return this.http.post(this.APIUrl + '/createTeam/',val);
  }

  updateTeam(val:any){
    return this.http.put(this.APIUrl + '/ModifyTeamMember/',val);
  }

  deleteTeam(val:any){
    return this.http.delete(this.APIUrl + '/DeleteTeam/'+val);
  }

  UploadAttachment(val:any){
    return this.http.post(this.APIUrl+'/SaveFile',val);
  }

  getAllTeamNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/viewConsole/');
  }


}

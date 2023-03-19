import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Enterprise } from "../models/enterprise.model";


@Injectable()
export class EnterpriseService{

    constructor(private http:HttpClient) {
    }

    public getEnterprises():Observable<Enterprise[]>{
      let host=environment.host;
      return this.http.get<Enterprise[]>(host+"/enterprises");
      //return throwError("Not Implemented yet");
    }

    public getConnectedEnterprises():Observable<Enterprise[]>{
      return this.http.get<Enterprise[]>(environment.host+"/enterprises?connected=true");
    }

    public getDeconnectedEnterprises():Observable<Enterprise[]>{
      return this.http.get<Enterprise[]>(environment.host+"/enterprises?deconnected=true");
    }

    public searchEnterprise(name:string):Observable<Enterprise[]>{
      return this.http.get<Enterprise[]>(environment.host+"/enterprises?name_like="+name);
    }

    public setSelected(enterprise:Enterprise):Observable<Enterprise>{
      return this.http.put<Enterprise>(environment.host+"/enterprises/"+enterprise.id,{...enterprise,status:!enterprise.status});
    }

    public deconnect(id:number):Observable<void>{
       return this.http.delete<void>(environment.host+"/enterprises/"+id);
    }

    public save(enterprise:Enterprise):Observable<Enterprise>{
      return this.http.post<Enterprise>(environment.host+"/enterprises/",enterprise);
    }

    public update(enterprise:Enterprise):Observable<Enterprise>{
      return this.http.put<Enterprise>(environment.host+"/enterprises/"+enterprise.id,enterprise);
    }

    public getEnterpriseById(id:number):Observable<Enterprise>{
      return this.http.get<Enterprise>(environment.host+"/enterprises/"+id);
    }

  }


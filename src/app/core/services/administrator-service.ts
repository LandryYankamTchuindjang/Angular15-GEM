import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Administrator } from "../models/Administrator.model";

@Injectable()
export class AdministratorService{

    constructor(private http:HttpClient) {
    }

    public getAdministrators():Observable<Administrator[]>{
      let host=environment.host;
      return this.http.get<Administrator[]>(host+"/administrators");
      //return throwError("Not Implemented yet");
    }

    public getActivatedAdministrators():Observable<Administrator[]>{
      return this.http.get<Administrator[]>(environment.host+"/administrators?status=true");
    }

    public getDisactivatedAdministrators():Observable<Administrator[]>{
      return this.http.get<Administrator[]>(environment.host+"/administrators?status=false");
    }

    public searchAdministrator(name:string):Observable<Administrator[]>{
      return this.http.get<Administrator[]>(environment.host+"/administrators?name_like="+name);
    }

    public setSelected(administrator:Administrator):Observable<Administrator>{
      return this.http.put<Administrator>(environment.host+"/administrators/"+administrator.id,{...administrator,status:!administrator.status});
    }

    public deconnect(id:number):Observable<void>{
       return this.http.delete<void>(environment.host+"/administrators/"+id);
    }

    public save(administrator:Administrator):Observable<Administrator>{
      return this.http.post<Administrator>(environment.host+"/administrators/",administrator);
    }

    public update(administrator:Administrator):Observable<Administrator>{
      return this.http.put<Administrator>(environment.host+"/administrators/"+administrator.id,administrator);
    }

    public getEnterpriseById(id:number):Observable<Administrator>{
      return this.http.get<Administrator>(environment.host+"/administrators/"+id);
    }

  }

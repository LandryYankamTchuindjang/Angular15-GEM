import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable()
export class VisitorService{

    constructor(private http:HttpClient) {
    }
  
    public getVisitors():Observable<Visitor[]>{
      let host=environment.host;
      return this.http.get<Visitor[]>(host+"/visitors");
      //return throwError("Not Implemented yet");
    }

    public searchVisitor(name:string):Observable<Visitor[]>{
      return this.http.get<Visitor[]>(environment.host+"/visitors?name_like="+name);
    }

    public save(visitor:Visitor):Observable<Visitor>{
      return this.http.post<Visitor>(environment.host+"/visitors/",visitor);
    }

    public getVisitorById(id:number):Observable<Visitor>{
      return this.http.get<Visitor>(environment.host+"/enterprises/"+id);
    }
   
  }
  

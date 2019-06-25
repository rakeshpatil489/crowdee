import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataTem } from '../models/http.jobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {


  private URL: any = 'https://api-staging.crowdee.de/v1/jobs';
  constructor(private http: HttpClient) { }

     
  getData(): Observable<DataTem[]> {
       let params1 = new HttpParams().set ('sort', 'DESC');
        return this.http.get<DataTem[]>(this.URL+'?'+params1);
     }
}

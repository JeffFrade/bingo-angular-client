import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class BingoService {
  public url = environment.api_host

  constructor(private http:HttpClient) { }

  public getNumbers(): number[] {
    let numbers:number[] = []

    for (let i = 1; i <= 15; i++) {
      numbers.push(i)
    }

    return numbers;
  }

  public getSorted(): Observable<any> {
    return this.http.get<any>(this.url + 'sorted')
  }

  public sort(): Observable<any> {
    return this.http.get<any>(this.url + 'sort')
  }

  public clear(): Observable<any> {
    return this.http.delete<any>(this.url + 'delete')
  }
}

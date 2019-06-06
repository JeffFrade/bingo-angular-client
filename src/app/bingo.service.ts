import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  public sort(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  public clear(): Observable<any> {
    return this.http.delete<any>(this.url)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspecaoApiService {

  readonly inspecaoAPIUrl = 'https://localhost:44387/api';

  constructor(private http:HttpClient) { }

  getInspecoesLista():Observable<any[]> {
    return this.http.get<any[]>(this.inspecaoAPIUrl + '/inspecoes');
  }

  addInspecoes(data: any) {
    return this.http.post(this.inspecaoAPIUrl + '/inspecoes', data);
  }

  updateInspecoes(id: number | string, data:any) {
    return this.http.put(this.inspecaoAPIUrl + `/inspecoes/${id}`, data);
  }

  deleteInspecoes(id: number | string) {
    return this.http.delete(this.inspecaoAPIUrl + `/inspecoes/${id}`);
  }

  // Tipos de Inspecoes

  getInspecoesTiposLista():Observable<any[]> {
    return this.http.get<any[]>(this.inspecaoAPIUrl + '/inspecoesTipos');
  }

  addInspecoesTipos(data: any) {
    return this.http.post(this.inspecaoAPIUrl + '/inspecoesTipos', data);
  }

  updateInspecoesTipos(id: number | string, data:any) {
    return this.http.put(this.inspecaoAPIUrl + `/inspecoesTipos/${id}`, data);
  }

  deleteInspecoesTipos(id: number | string) {
    return this.http.delete(this.inspecaoAPIUrl + `/inspecoesTipos/${id}`);
  }

  //Status

  getStatusLista():Observable<any[]> {
    return this.http.get<any[]>(this.inspecaoAPIUrl + '/status');
  }

  addStatus(data: any) {
    return this.http.post(this.inspecaoAPIUrl + '/status', data);
  }

  updateStatus(id: number | string, data:any) {
    return this.http.put(this.inspecaoAPIUrl + `/status/${id}`, data);
  }

  deleteStatus(id: number | string) {
    return this.http.delete(this.inspecaoAPIUrl + `/status/${id}`);
  }
}

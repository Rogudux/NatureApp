import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TrailModel } from '../models/trail.model';
import { AiAnalyze } from '../models/ai-analyzeTrails.model';

@Injectable({
  providedIn: 'root'
})
export class TrailService {

  private readonly baseUrl = `${environment.API_URL}/trails`; // tu controlador: [Route("api/trails")]

  constructor(private httpCliente: HttpClient) {}

  // GET: api/trails
  getAllTrails(): Observable<TrailModel[]> {
    console.log('trayendo trails');
    return this.httpCliente.get<TrailModel[]>(this.baseUrl);
  }

  getAiAnalyzeTrails():Observable<AiAnalyze>{
    const result = this.httpCliente.get<AiAnalyze>(`${environment.API_URL}/trails/ai-analyze`)
    return result;
  }
}

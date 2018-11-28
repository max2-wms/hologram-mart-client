import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Configuration
import { config } from "../../../app.config";

@Injectable({
  providedIn: 'root'
})
export class HologramService {

  private API_URL: string = config.backendAPI_URL;

  constructor(private http: HttpClient) { 
    console.log(this.API_URL);
  }

  public getHolograms(): any {
    return this.http.get(`${this.API_URL}/holograms`);
  }

  public getHologram(hologramid: any): any {
    return this.http.get(`${this.API_URL}/holograms/${hologramid}`);
  }

  public addHologram(hologram: any): any {
    return this.http.post(`${this.API_URL}/holograms`, hologram);
  }

  public deleteHologram(hologramid: any): any {
    return this.http.post(`${this.API_URL}/holograms/${hologramid}`, {});
  }
}

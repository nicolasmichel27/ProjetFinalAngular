import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client, Personne } from '../model/Client';
const CLIENT_SERVER = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  public getAllClients(): Observable<any> {
    return this.http.get<Client>(CLIENT_SERVER + '/client/all');
  }
  public deleteClientById(client: Client): Observable<any> {
    return this.http.delete<Client>(CLIENT_SERVER + '/client/deleteById/' + client.id, this.httpOptions);
  }

  public deleteClientByNom(client: Client): Observable<any> {
    return this.http.delete<Client>(CLIENT_SERVER + '/client/deleteById/' + client.nom, this.httpOptions);
  }
  public findClientById(id: number): Observable<any> {
    return this.http.get<Client>(CLIENT_SERVER + '/client/getById/' + id);
  }

  public findClientByNom(nom: string): Observable<any> {
    return this.http.get<Client>(CLIENT_SERVER + '/client/getByNom/' + nom);
  }
  public createClient(client: Client): Observable<any> {
    return this.http.post<Client>(CLIENT_SERVER + '/client/createClient',
    JSON.stringify(client), this.httpOptions);
  }
  public updateClient(client: Client): Observable<any> {
    return this.http.put<Client>(CLIENT_SERVER + '/client/updateClient/' + client.id, JSON.stringify(client), this.httpOptions);
  }
}



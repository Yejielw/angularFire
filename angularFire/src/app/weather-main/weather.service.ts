import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Entry } from '../models/entry.model';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherCollection = 'weatherCollection';
  entries: Observable<any[]>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.entries = this.getWeatherEntries()
   }

  getWeatherEntries(): Observable <any[]> {
    
    return this.afs.collection(this.weatherCollection, ref => ref
      .orderBy('createdAt', 'desc'))
      .valueChanges();
  }
  getLatest(): Observable <any> {
    return this.afs.collection(this.weatherCollection, ref => ref
        .orderBy('createdAt', 'desc')
        .limit(1))
        .valueChanges();
  }
  addEntry(weatherEntry){
    weatherEntry.createdAt = new Date()
    return this.afs.collection(this.weatherCollection).add(weatherEntry);
  }
}

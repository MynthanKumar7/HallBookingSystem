import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class DataSharingService {
  
    public LoggedIn: BehaviorSubject<string> = new BehaviorSubject<string>('false');
    public UserName: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public HallName: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _history: Array<string>;
  private _token: string;

  constructor() {
    this._token = localStorage.getItem('token') || "";
    this._history = new Array<string>();
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    localStorage.setItem('token', value);
    this._token = value;
  }

  get history(): Array<string> {
    return this._history;
  }

  set history(value: Array<string>) {
    this._history = value;
  }
}

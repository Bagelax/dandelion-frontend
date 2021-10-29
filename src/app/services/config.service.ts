import { Injectable } from '@angular/core';
import { ApiLog } from '../api-log';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _history: Array<ApiLog>;

  constructor() {
    this._token = ""
    this._history = new Array<ApiLog>()
  }

  get token(): String {
    return this._token;
  }

  set token(value: String) {
    this._token = value;
  }

  get history(): Array<ApiLog> {
    return this._history;
  }

  set history(value: Array<ApiLog>) {
    this._history = value;
  }
  private _token: String;
}

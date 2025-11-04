import { Injectable } from '@angular/core';
import { DATA } from './data';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private _data$ = DATA;

    constructor() {}

    get data(): typeof DATA {
        return this._data$;
    }
}

import { Injectable } from '@angular/core';
import { Region } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  //_ significa una convención utilizada para indicar que la variable o propiedad es privada y no debería ser accedida o modificada directamente desde fuera de la clase
  private _regions: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europe,
    Region.Oceania,
  ];
  get regions(): Region[] {
    return [...this._regions];
  }
  constructor() {}
}

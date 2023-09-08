import { NG_ASYNC_VALIDATORS } from '@angular/forms';

export interface Countries {
  name: Name;
  cca3: string;
  status: Status;
  unMember: boolean;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  borders?: string[];
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side: Side;
}

export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currencies {
  ISK?: All;
  EUR?: All;
  RSD?: All;
  MKD?: All;
  DKK?: All;
  SEK?: All;
  BGN?: All;
  ALL?: All;
  PLN?: All;
  UAH?: All;
  BYN?: All;
  CZK?: All;
  GIP?: All;
  GBP?: All;
  IMP?: All;
  CHF?: All;
  NOK?: All;
  FOK?: All;
  GGP?: All;
  HUF?: All;
  RUB?: All;
  BAM?: BAM;
  JEP?: All;
  RON?: All;
  MDL?: All;
}

export interface All {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  isl?: string;
  sqi?: string;
  srp?: string;
  fra?: string;
  ita?: string;
  lat?: string;
  por?: string;
  slk?: string;
  mkd?: string;
  lit?: string;
  cnr?: string;
  dan?: string;
  swe?: string;
  bul?: string;
  fin?: string;
  spa?: string;
  lav?: string;
  pol?: string;
  ell?: string;
  tur?: string;
  ukr?: string;
  slv?: string;
  est?: string;
  nld?: string;
  bel?: string;
  rus?: string;
  ces?: string;
  eng?: string;
  mlt?: string;
  deu?: string;
  cat?: string;
  glv?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  fao?: string;
  nfr?: string;
  hun?: string;
  nor?: string;
  de?: string;
  bos?: string;
  hrv?: string;
  nrf?: string;
  ron?: string;
  gle?: string;
  gsw?: string;
  roh?: string;
  ltz?: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export enum StartOfWeek {
  Monday = 'monday',
}

export enum Status {
  OfficiallyAssigned = 'officially-assigned',
  UserAssigned = 'user-assigned',
}

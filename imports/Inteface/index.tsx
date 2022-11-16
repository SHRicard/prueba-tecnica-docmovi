export interface Patients {
  _id?: number;
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  rut: number;
  region: string;
  comuna: string;
  postalCode: number;
  createdAt?: Date;
}

export interface Region {
  region: string;
  comunas: string[];
}

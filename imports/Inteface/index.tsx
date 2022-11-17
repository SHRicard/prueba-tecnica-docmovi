export interface Patients {
  _id?: string;
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

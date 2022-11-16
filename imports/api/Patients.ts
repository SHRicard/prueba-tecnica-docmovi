import { Mongo } from 'meteor/mongo';
import { Patients } from "../Inteface"





export const PatientsCollection = new Mongo.Collection<Patients>('Patients');

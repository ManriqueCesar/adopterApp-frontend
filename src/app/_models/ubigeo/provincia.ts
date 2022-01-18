import { Departamento } from './departamento';

export interface Provincia {
    id?: number;

    nombre?:string;
	departamento?:Departamento;
}
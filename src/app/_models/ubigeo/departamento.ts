import { Pais } from './pais';

export interface Departamento {
    id?: number;

    nombre?:string;
	pais?:Pais;
}
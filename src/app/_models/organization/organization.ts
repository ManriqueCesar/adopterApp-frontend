import { OrganizationCategory } from './organizationCategory';
import { Distrito } from '../ubigeo/distrito';

export interface Organization {
    id?: number;

    name?:string;
	foundationDate?:Date;
	status?:Boolean;
	logo?:string;
	members?:number;
    petOrganizationCategory?:OrganizationCategory;
    distrito: Distrito;

}
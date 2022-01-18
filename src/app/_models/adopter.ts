export interface Adopter {
    idAdopter?: number;
	idOrganization?: number;
    idDistrito?: number;
    idProvincia?: number;
	idDepartamento?: number;
    idDocument?: number;
	idDocumentNumber?: number;
    idSeverity?: number;
	idGender?:number;

    organizationName?:string;
	firstName?:string;
	lastName?:string;
	phone?:string;
	distrito?:string;
	provincia?:string;
	departamento?:string;
	documentType?:string;
	gender?:string;
	documentNumber?:string;
	severity?:string;
	comments?:string;
	evidence?:string;

    creationDate?:Date;
	birthDate?:Date;
	issueDate?:Date;
	commentaryCreationDate?:Date;


}
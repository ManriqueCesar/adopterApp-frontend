export class Usuario {
    _id: string;
    token: string;
    nombre: string;
    email: string;
    username: string;
    password: string;
    ruc: string;
    telefonoFijo: string;
    telefonoCelular: string;
    direccion: string;
    idOrganization : number;

    constructor(obj: any) {
        this.nombre = obj.nombre
        this.email = obj.email
        this.password = obj.password
        this.ruc = obj.ruc
        this.telefonoFijo = obj.telefonoFijo
        this.telefonoCelular = obj.telefonoCelular
        this.direccion = obj.direccion
        this.username=obj.username
        this.idOrganization = obj.idOrganization
    }
}
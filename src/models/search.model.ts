
export interface ISearch {
    titulo: string;
    link: string;
    descricao: string;
}

export class MSearch implements ISearch{
    titulo: string;
    link: string;
    descricao: string;

    constructor(
        titulo:string,
        link:string,
        descricao:string
    ) {
        this.titulo = titulo
        this.descricao = descricao
        this.link = link
    }

}
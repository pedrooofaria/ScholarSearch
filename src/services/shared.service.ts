import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })


export class SharedService {


    constructor() { }
  
    public list: any = [
      {
          titulo: 'GLOOGLE',
          link: 'http://www.google.com',
          descricao: 'Descrição do site...'
      },
      {
        titulo: 'GLOBO',
        link: 'http://www.globo.com',
        descricao: 'Descrição do site...'
      },
      {
        titulo: 'MEC - Ministério da Educação',
        link: 'http://portal.mec.gov.br',
        descricao: 'Descrição do site...'
      },
    ]


}
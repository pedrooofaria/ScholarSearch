import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { URL_API } from "src/api";
import { ISearch } from "src/models/search.model";
import { SharedService } from "./shared.service";
import { map } from 'rxjs/operators';
import { Firestore, collectionData, collection, addDoc, CollectionReference, Query } from '@angular/fire/firestore'
import { FirebaseApp } from "@angular/fire/app";
import { orderBy } from "@firebase/firestore";


@Injectable({
    providedIn: 'root'
})
export class SearchService {

    private listSearch: ISearch[] = [];
    public static changeTermo = new EventEmitter();

    constructor(
        private http: HttpClient,
        private db: Firestore
    ) {}
    

    // CONSUMIR BACKEND VIA HTTP
    public updateList(termo: string){
        let aux: Observable<ISearch[]> = this.http.get(`${URL_API}?titulo_like=${termo}`)
                                        .pipe(map((resposta: any) => this.listSearch = resposta))
        aux.subscribe(resp => {this.listSearch = resp; SearchService.changeTermo.emit(resp);});
    }


    public pesquisaService(termo: string): Observable<ISearch[]>{
        return this.http.get(`${URL_API}?titulo_like=${termo}`)
            .pipe(
                map((resposta: any) => this.listSearch = resposta)
            )
    }

    
    //FIRE BASE
    criateDados(dado: ISearch){
        const biblioteca = collection(this.db, 'biblioteca');
        return addDoc(biblioteca, dado);
    }

    getDados(): Observable<ISearch[]>{
        const biblioteca = collection(this.db, 'biblioteca');
        return collectionData(biblioteca, { idField: 'id' }) as Observable<ISearch[]>;
    }

    
}
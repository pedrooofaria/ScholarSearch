import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearch } from 'src/models/search.model';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {

  public listSearch: ISearch[] = [];
  public encontrado: boolean = false;

  constructor(
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    SearchService.changeTermo.subscribe(
      (resp) => {
              this.listSearch = resp;
              if(this.listSearch.length != 0)
                this.encontrado = true;
            })
  }

  async getAllDados(){
    this.searchService.getDados()
      .subscribe(list => {
        this.listSearch = list;
        if(this.listSearch.length != 0)
                this.encontrado = true;
      })
  }

  openToLink(link:string){
    window.open(link, '_blank');
  }

}

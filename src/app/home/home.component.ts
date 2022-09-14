import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ISearch } from 'src/models/search.model';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private searchService: SearchService,
    private router: Router
    ) {}

  ngOnInit(): void { 
  }

  public goToResultado():void{
    this.router.navigate(['pesquisa']);
  }

  public pesquisaComponent(termo: string):void{
    this.searchService.updateList(termo);
    this.goToResultado();
  }

}

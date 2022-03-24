import { GraphqlQueryService } from 'src/app/service/graphql-query.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public details: any;
  public allInfo: any;

  constructor(private graphqlQueryService: GraphqlQueryService) {}

  ngOnInit(): void {
    this.graphqlQueryService.getPosts().then((res: any) => {
      this.allInfo = res;
    });
  }
}

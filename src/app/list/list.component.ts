import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

const Get_AllInfo = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public details: any;
  public allInfo: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.details = this.apollo
      .watchQuery({
        query: Get_AllInfo,
      })
      .valueChanges.subscribe((res: any) => {
        this.allInfo = res?.data?.posts?.data;
      });
  }
}

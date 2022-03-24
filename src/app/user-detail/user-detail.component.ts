import { GraphqlQueryService } from 'src/app/service/graphql-query.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  public userData: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private graphqlQueryService: GraphqlQueryService
  ) {}

  ngOnInit(): void {
    this.getDataById();
  }

  /**
   * getDataById
   */
  public getDataById() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.graphqlQueryService.getUserData(id).then((res) => {
      this.userData.push(res);
    });
  }

}

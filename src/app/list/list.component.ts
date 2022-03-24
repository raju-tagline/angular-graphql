import { GraphqlQueryService } from 'src/app/service/graphql-query.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public details: any;
  public allInfo: any;
  public userData: any = [];

  constructor(
    private graphqlQueryService: GraphqlQueryService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getInfo();
  }

  /**
   * getInfo
   */
  public getInfo() {
    this.graphqlQueryService.getPosts().then((res: any) => {
      this.allInfo = res;
    });
  }

  /**
   * getUserInfo
   */
  public getUserInfo(id: string) {
    this.route.navigate(['/user', id]);
  }

  /**
   * editUserInfo
   */
  public editUserInfo(id:string) {
    this.route.navigate(['/edit-user',id])
  }

  /**
   * removeInfo
   */
  public removeInfo(id: number) {
    this.graphqlQueryService.deletePost(id).then((res) => {
      alert('THIS ID DELETED: ' + res);
    });
    this.getInfo();
  }
}

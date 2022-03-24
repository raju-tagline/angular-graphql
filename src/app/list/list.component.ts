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
  public userData:any = [];

  constructor(private graphqlQueryService: GraphqlQueryService) {}

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
    this.graphqlQueryService.getUserData(id).then((res) => {
      this.userData.push(res);
      console.log('LIST res :>> ', res);
    });
  }

  /**
   * removeInfo
   */
  public removeInfo(id: number) {
    this.graphqlQueryService.deletePost(id).then((res) => {
      console.log('LIST DELETE res :>> ', res);
    });
    //   .then((res) => {
    //   alert('THIS ID DELETED: '+res)
    // });
    this.getInfo();
  }
}

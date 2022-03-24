import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class GraphqlQueryService {
  public Get_AllInfo = gql`
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

  constructor(private apollo: Apollo) {}

  /**
   * getPosts
   */
  public getPosts() {
    console.log('This is Working!!');
    return new Promise((resolve, reject) => {
      this.apollo
        .watchQuery({
          query: this.Get_AllInfo,
        })
        .valueChanges.subscribe((res: any) => {
          resolve(res?.data?.posts?.data);
        });

      //   .pipe(map((res) => {
      //   resolve(console.log('res :>> ', res));
      // }))
    });
    // this.apollo
    //   .watchQuery({
    //     query: this.Get_AllInfo,
    //   })
    //   .valueChanges.subscribe((res: any) => {
    //     this.allInfo = res?.data?.posts?.data;
    //   });
  }
}

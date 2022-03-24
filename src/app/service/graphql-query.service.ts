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

  public get_UserData = gql`
    query ($id: ID!) {
      user(id: $id) {
        id
        username
        email
        address {
          geo {
            lat
            lng
          }
        }
      }
    }
  `;

  public remove_Info = gql`
    mutation ($id: ID!) {
      deletePost(id: $id)
    }
  `;

  constructor(private apollo: Apollo) {}

  /**
   * getPosts
   */
  public getPosts() {
    return new Promise((resolve, reject) => {
      this.apollo
        .watchQuery({
          query: this.Get_AllInfo,
        })
        .valueChanges.subscribe((res: any) => {
          resolve(res?.data?.posts?.data);
        });
    });
  }

  /**
   * getUserData
   */
  public getUserData(key: any) {
    return new Promise((resolve, reject) => {
      this.apollo
        .query({
          query: this.get_UserData,
          variables: {
            id: key,
          },
        })
        .subscribe((res: any) => {
          resolve(res?.data?.user);
        });
    });
  }

  /**
   * deletePost
   */
  public deletePost(key: number) {
    console.log('key :>> ', key);
    return new Promise((resolve, reject) => {
      this.apollo
        .mutate({
          mutation: this.remove_Info,
          variables: {
            id: key,
          },
        })
        .subscribe((res: any) => {
          resolve(res?.data?.deletePost);
          console.log('res :>> ', res);
        });
    });
  }
}

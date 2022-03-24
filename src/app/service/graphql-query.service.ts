import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class GraphqlQueryService {
  //---------ALL POSTS DETAILS---------
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

  //---------GET USER'S DATA---------
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

  //---------GET USER'S POSTS---------
  public get_User_Post = gql`
    query ($id: ID!) {
      user(id: $id) {
        posts {
          data {
            id
            title
          }
        }
      }
    }
  `;

  //---------GET USER POST---------
  public get_user_post_info = gql`
    query ($id: ID!) {
      post(id: $id) {
        title
        body
      }
    }
  `;

  //---------EDIT USER INFORMATION---------
  public edit_User_Info = gql`
    mutation ($id: ID!, $input: UpdatePostInput!) {
      updatePost(id: $id, input: $input) {
        id
        body
      }
    }
  `;

  //---------CREATE POST---------
  public create_Post = gql`
    mutation ($input: CreatePostInput!) {
      createPost(input: $input) {
        id
        title
        body
      }
    }
  `;

  //---------DELETE POST---------
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
   * get_user_post_info
   */
  public getSinglePost(key: any) {
    return new Promise((resolve, reject) => {
      this.apollo
        .query({
          query: this.get_user_post_info,
          variables: {
            id: key,
          },
        })
        .subscribe((res: any) => {
          resolve(res?.data?.post);
        });
    });
  }

  /**
   * getUserPosts
   */
  public getUserPosts(key: any) {
    return new Promise((resolve, reject) => {
      this.apollo
        .query({
          query: this.get_User_Post,
          variables: {
            id: key,
          },
        })
        .subscribe((res: any) => {
          resolve(res?.data?.user?.posts?.data);
        });
    });
  }

  /**
   * editUser
   */
  public editUser(key: any, body: string) {
    return new Promise((resolve, reject) => {
      this.apollo
        .mutate({
          mutation: this.edit_User_Info,
          variables: {
            id: key,
            input: {
              body: body,
            },
          },
        })
        .subscribe((res: any) => {
          console.log('res :>> ', res);
        });
    });
  }

  /**
   * createUserPost
   */
  public createUserPost(title: string, body: string) {
    return new Promise((resolve, reject) => {
      this.apollo
        .mutate({
          mutation: this.create_Post,
          variables: {
            input: {
              title: title,
              body: body,
            },
          },
        })
        .subscribe((res: any) => {
          console.log('res :>> ', res);
        });
    });
  }

  /**
   * deletePost
   */
  public deletePost(key: number) {
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
        });
    });
  }
}

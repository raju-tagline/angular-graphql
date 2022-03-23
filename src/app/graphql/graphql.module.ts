import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ApolloModule, HttpLinkModule],
})
export class GraphqlModule {
  constructor(private apollo: Apollo) {
    const url: string = 'https://graphqlzero.almansi.me/api';
    console.log('url :>> ', url);
  }
}

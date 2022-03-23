import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';

const uri: string = 'https://graphqlzero.almansi.me/api';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphqlModule {
  constructor(private apollo: Apollo) {}
}

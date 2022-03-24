import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { ListComponent } from 'src/app/list/list.component';
import { UserDetailComponent } from 'src/app/user-detail/user-detail.component';
import { EditUserInfoComponent } from 'src/app/edit-user-info/edit-user-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const uri: string = 'https://graphqlzero.almansi.me/api';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserDetailComponent,
    EditUserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

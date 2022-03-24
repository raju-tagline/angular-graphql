import { EditUserInfoComponent } from './edit-user-info/edit-user-info.component';
import { UserDetailComponent } from 'src/app/user-detail/user-detail.component';
import { ListComponent } from 'src/app/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'user',
    component: UserDetailComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
  },
  {
    path: 'edit-user',
    component: EditUserInfoComponent,
  },
  {
    path: 'edit-user/:id',
    component: EditUserInfoComponent,
  },
  {
    path: '',
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

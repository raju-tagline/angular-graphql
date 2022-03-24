import { GraphqlQueryService } from 'src/app/service/graphql-query.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.scss'],
})
export class EditUserInfoComponent implements OnInit {
  public editUserPostInfoForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private graphqlQueryService: GraphqlQueryService
  ) {}

  ngOnInit(): void {
    this.createPostForm();
    this.editUserDataById();
  }

  /**
   * createPostForm
   */
  public createPostForm() {
    this.editUserPostInfoForm = new FormGroup({
      title: new FormControl(null),
      body: new FormControl(null),
    });
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.graphqlQueryService.getSinglePost(id).then((res: any) => {
      this.editUserPostInfoForm.patchValue(res);
    });
  }

  /**
   * onSubmit
   */
  public onSubmit() {
    const body = this.editUserPostInfoForm.value.body;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id :>> ', id);
    console.log('BODY :>> ', body);
    this.graphqlQueryService.editUser(id, body);
  }

  /**
   * editUserDataById
   */
  public editUserDataById() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  }
}

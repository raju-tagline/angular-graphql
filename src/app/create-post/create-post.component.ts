import { FormGroup, FormControl } from '@angular/forms';
import { GraphqlQueryService } from 'src/app/service/graphql-query.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  public createPostForm!: FormGroup;

  constructor(private graphqlQueryService: GraphqlQueryService) {}

  ngOnInit(): void {
    this.createPost();
  }

  /**
   * createPost
   */
  public createPost() {
    this.createPostForm = new FormGroup({
      title: new FormControl(null),
      body: new FormControl(null),
    });
  }

  /**
   * createUserPost
   */
  public createUserPost(value:any) {
    const title = this.createPostForm.value.title;
    const body = this.createPostForm.value.body;
    this.graphqlQueryService.createUserPost(title, body);
  }

  /**
   * onSubmit()
   */
  public onSubmit() {
    this.createUserPost(this.createPostForm.value);
    console.log('this.createPostForm.value :>> ', this.createPostForm.value);
  }
}

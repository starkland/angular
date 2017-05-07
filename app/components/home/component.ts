// Angular
import { Component } from 'angular2/core';
import { Router, Params } from 'angular2/router';

// Services
import { GithubService } from '../../services/github.service';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './app/components/home/view.html',
  providers: [
    GithubService,
    UserService
  ]
})

export class HomeComponent {
  private submitted: boolean = false;
  private repos: Array[];
  private form = {};
  private isRepo = false;
  private error = {};

  constructor(
    private _github: GithubService;
    private _user: UserService;
    private _router: Router;
  ) {
    this.form.type = 'users';
  }

  onSubmit() {
    this._github.search(this.form)
      .then((result) => {
        if (result.total_count > 0) {
          this.error = {};
          this.repos = result.items
        } else {
          this.repos = [];
          this.error = {
            status: true,
            message: 'No data was found with this word.'
          }
        }
      });
  }

  onChange(value: String) {
    this.repos = [];
    this.error = {};

    this.isRepo = false;
    this.form.type = value;

    if (value !== 'users') {
      this.isRepo = true;
    }
  }

  viewMore(data: Object, isRepo: boolean) {
    if (isRepo) {
      let url = '/repositories';
    } else {
      let url = `/users/${data.login}`;
    }

    this._router.navigateByUrl(url);
  }
}
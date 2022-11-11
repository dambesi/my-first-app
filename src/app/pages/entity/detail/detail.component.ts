import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { EntityService } from '../../entity.service';
import { User } from '../user.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  subscription?: Subscription;
  userId: Number = 0;
  // user$: Observable<User> | undefined;
  user: User | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entityService: EntityService
  ) {}

  ngOnInit(): void {
    console.log('DetailComponent ingeladen');

    //// static snapshot van route om id op te halen
    // this.userId = this.route.snapshot.paramMap.get('id');

    //// Subscribe benadering om id op te halen
    // this.route.paramMap.subscribe((params) => {
    //   this.userId = params.get('id');
    //   console.log('User' + this.userId + 'details');
    // });

    // User ophalen via subscription
    // this.subscription = this.route.paramMap.subscribe((params) => {
    // this.userId = Number(params.get('id'));
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.userId);
    this.user = this.entityService.getById(this.userId);
    console.log(this.user);
    // });
  }

  edit(): void {
    console.log(this.userId);
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  ngOnDerstroy(): void {
    this.subscription?.unsubscribe();
  }
}

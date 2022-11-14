import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription, tap } from 'rxjs';
import { EntityService } from '../entity.service';
import { RandomUser } from '../randomuser.model';
import { RandomuserService } from '../randomuser.service';
import { User } from '../user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  // users: User[] | null = null;
  private subscription?: Subscription;
  users: RandomUser[] | undefined;
  users$: Observable<RandomUser[]> | undefined;

  // constructor(private entityService: EntityService) {}
  constructor(private randomUserService: RandomuserService) {}

  // ngOnInit(): void {
  //   // getList via subscribe, deze moet wij destroyen om memory leak te voorkomen
  //   this.subscription = this.randomUserService.getList().subscribe((result) => {
  //     this.users = result;
  //     console.log(this.users);
  //   });
  // }

  ngOnInit(): void {
    // getList via observable user$. The async pipe | in de html triggert de get request
    this.users$ = this.randomUserService.getList();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe;
  }
}

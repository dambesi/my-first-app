import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EntityService } from '../entity.service';
import { User } from '../user.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit, OnDestroy {
  userId: string | null = null;
  subscription?: Subscription;
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: EntityService
  ) {}

  ngOnInit(): void {
    // // Static snapshot om id uit te lezen
    // this.userId = this.route.snapshot.paramMap.get('id');
    // console.log(this.userId);
    // this.user = this.userService.getById(Number(this.userId));

    // Dynamisch subsribe om id uit te lezen
    this.subscription = this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      this.user = this.userService.getById(Number(this.userId));
    });
  }

  ngOnDestroy(): void {}
}

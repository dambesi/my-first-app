import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntityService } from '../../entity.service';
import { User } from '../user.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  userId: string | null = null;
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: EntityService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId);

    this.user = this.userService.getById(Number(this.userId));
  }
}

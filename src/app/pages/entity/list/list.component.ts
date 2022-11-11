import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../entity.service';
import { User } from '../user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: User[] | null = null;

  constructor(private entityService: EntityService) {}

  ngOnInit(): void {
    this.users = this.entityService.getAll();
  }
}

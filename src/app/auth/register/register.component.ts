import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  register(): void {
    console.log('Register geklikt!');
    this.route.navigate(['/login']);
  }
}

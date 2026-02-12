import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 services = ['IVF', 'PCOD', 'Gynecology'];
  blogs = ['IVF Tips', 'PCOD Diet'];
  appointments = ['Gowtham - IVF', 'Anu - PCOD'];

  logout() {
    localStorage.removeItem('token');
    location.href = '/admin-login';
  }
}

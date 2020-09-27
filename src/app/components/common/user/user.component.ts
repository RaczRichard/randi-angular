import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
    selector: 'app-dashboard',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {


    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {

    }

}

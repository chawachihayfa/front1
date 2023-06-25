import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/auth/storage.service';
import { UserService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: any[];   constructor( private userService:UserService,private storageService: StorageService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
  
    this.userService.getAllList().subscribe(data=>{
      console.log(data)
      this.users=data
    });
  }
}

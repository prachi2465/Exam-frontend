import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userservice: UserService, private snack: MatSnackBar) { }

  public user={
    username:'',//should match with data variables in backend
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username=='' || this.user.username== null){
      //alert('username is required');
      this.snack.open("Username is required !!", "Ok", {
        duration: 3000
      });
      return;
    }
    this.userservice.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data);
        //alert('registration successful');
        Swal.fire("Success", "User is registered, User id is: "+ data.id, "success");
      },
      (error)=>{
        console.log(error);
        //alert('something went wrong');
        Swal.fire("Oops...","Something went wrong", "error");
      }
      )
  }

}

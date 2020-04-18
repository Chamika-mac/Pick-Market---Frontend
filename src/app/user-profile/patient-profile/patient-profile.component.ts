import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/user';
import { ToastrService } from 'ngx-toastr';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    idNumber: '',
    userUsername: '',
    userPassword: '',
  }

  reEnterPassword: string = '';

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  createUser() {
    if (this.user.firstName == "") {
      this.toastr.warning("First Name is Required");
    }
    else if (this.user.lastName == "") {
      this.toastr.warning("Last Name is Required");
    }
    else if (this.user.idNumber == "") {
      this.toastr.warning("Identity Number is Required");
    }
    else if (this.user.userUsername == "") {
      this.toastr.warning("Username is Required");
    }
    else if (this.user.userPassword == "") {
      this.toastr.warning("Password is Required");
    }
    else if (this.reEnterPassword == "") {
      this.toastr.warning("Please Re-enter Password");
    }
    else if (this.user.userPassword != this.reEnterPassword) {
      this.toastr.warning("Passwords don't match");
    }
    else {
      this.userService.save(this.user).subscribe((data: any) => {
        console.log(data);
        this.toastr.success("Registration Successfull");
      });
    }
  }

}

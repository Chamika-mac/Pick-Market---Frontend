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
    userEmail: '',
    userAddress: '',
    idNumber: '',
    telephoneNumber: '',
    username: '',
    password: '',
    userAppointment: ''
  }

  reEnterPassword: string = '';

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  createAdmin() {
    if (this.user.firstName == "") {
      this.toastr.warning("First Name is Required");
    }
    else if (this.user.lastName == "") {
      this.toastr.warning("Last Name is Required");
    }
    else if (this.user.userEmail == "") {
      this.toastr.warning("Email Address is Required");
    }
    else if (this.user.userAddress == "") {
      this.toastr.warning("Home Address is Required");
    }
    else if (this.user.idNumber == "") {
      this.toastr.warning("Identity Number is Required");
    }
    else if (this.user.telephoneNumber == "") {
      this.toastr.warning("Telephone Number is Required");
    }
    else if (this.user.username == "") {
      this.toastr.warning("Username is Required");
    }
    else if (this.user.password == "") {
      this.toastr.warning("Password is Required");
    }
    else if (this.reEnterPassword == "") {
      this.toastr.warning("Please Re-enter Password");
    }
    else if (this.user.password != this.reEnterPassword) {
      this.toastr.warning("Passwords don't match");
    }
    else {
      this.userService.test().subscribe((data: any) => {
        console.log(data);
        this.toastr.success("Registration Successfull");
      });
    }
  }

}

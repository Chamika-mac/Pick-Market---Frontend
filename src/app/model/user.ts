export class User {

    //Normal user (Patient)
    firstName: string;
    lastName: string;
    userEmail: string;
    userAddress: string;
    idNumber: string;
    telephoneNumber: string;
    username: string;
    password: string;
    userAppointment: string;
}

export class Doctor {

    //Doctor (Physician)

}

export class Hospital {

    //Hospital
    hospitalName: string;
    hospitalId: string;
    hospitalAddress: string;
    hospitalTelephone: string;
    numOfAppointments: string;
    numOfDoctors: string;
}

export class Admin {

    //System Admin
    firstName: string;
}

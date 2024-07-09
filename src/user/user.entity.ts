enum userStatus {
    single = 'Single',
    married = 'Married',
    divorcied = 'Divorcied',
    widower = 'Widower'
}

export class User{
    id: String;
    name: String;
    email: String;
    salary: Number;
    status: userStatus;
}
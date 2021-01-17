export class StudentModel {
    avatar: string;
    room: string;
    studentnumber: string;
    studentid: string;
    prefix: string;
    firstname: string;
    lastname: string;
    identificationnumber: string;
    attendancedate: string;
    oldschool: string;
    province: string;
    lastfloor: string;
    birthday: string;
    sex: string;
    nationality: string;
    religion: string;
    fatherfullname: string;
    motherfullname: string;
    pp1set: string;
    pp1number: string;
    pp2number: string;
    enddateofapproval: string;
    approvaldate: string;
    cause: string;

    /**
     * Student
     *
     * @param student
     */
    constructor(student) {
        {
            this.avatar = student.avatar || 'assets/images/avatars/profile.jpg';
            this.room = student.room || '';
            this.studentnumber = student.studentnumber || '';
            this.studentid = student.studentid || '';
            this.prefix = student.prefix || '';
            this.firstname = student.firstname || '';
            this.lastname = student.lastname || '';
            this.identificationnumber = student.identificationnumber || '';
            this.attendancedate = student.attendancedate || '';
            this.oldschool = student.oldschool || '';
            this.province = student.province || '';
            this.lastfloor = student.lastfloor || '';
            this.birthday = student.birthday || '';
            this.sex = student.sex || '';
            this.nationality = student.nationality || '';
            this.religion = student.religion || '';
            this.fatherfullname = student.fatherfullname || '';
            this.motherfullname = student.motherfullname || '';
            this.pp1set = student.pp1set || '';
            this.pp1number = student.pp1number || '';
            this.pp2number = student.pp2number || '';
            this.enddateofapproval = student.enddateofapproval || '';
            this.approvaldate = student.approvaldate || '';
            this.cause = student.cause || '';
        }
    }
}

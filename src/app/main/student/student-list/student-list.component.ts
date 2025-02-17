import { DataSource } from '@angular/cdk/table';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentFormComponent } from '../student-form/student-form.component';
import { StudentService } from '../student.service';

// export interface Students {
//   id: string;
//   name: string;
//   lastName: string;
//   avatar: string;
//   nickname: string;
//   company: string;
//   jobTitle: string;
//   email: string;
//   phone: string;
//   address: string;
//   birthday: string;
//   notes: string;

// }

// const contact: Students[] = [
//   {
//     'id': '5725a680b3249760ea21de52',
//     'name': 'Abbott',
//     'lastName': 'Keitch',
//     'avatar': 'assets/images/avatars/Abbott.jpg',
//     'nickname': 'Royalguard',
//     'company': 'Saois',
//     'jobTitle': 'Digital Archivist',
//     'email': 'abbott@withinpixels.com',
//     'phone': '+1-202-555-0175',
//     'address': '933 8th Street Stamford, CT 06902',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a680606588342058356d',
//     'name': 'Arnold',
//     'lastName': 'Matlock',
//     'avatar': 'assets/images/avatars/Arnold.jpg',
//     'nickname': 'Wanderer',
//     'company': 'Laotcone',
//     'jobTitle': 'Graphic Artist',
//     'email': 'arnold@withinpixels.com',
//     'phone': '+1-202-555-0141',
//     'address': '906 Valley Road Michigan City, IN 46360',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a68009e20d0a9e9acf2a',
//     'name': 'Barrera',
//     'lastName': 'Bradbury',
//     'avatar': 'assets/images/avatars/Barrera.jpg',
//     'nickname': 'Jackal',
//     'company': 'Unizim',
//     'jobTitle': 'Graphic Designer',
//     'email': 'barrera@withinpixels.com',
//     'phone': '+1-202-555-0196',
//     'address': '183 River Street Passaic, NJ 07055',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a6809fdd915739187ed5',
//     'name': 'Blair',
//     'lastName': 'Strangeway',
//     'avatar': 'assets/images/avatars/Blair.jpg',
//     'nickname': 'Knight',
//     'company': 'Conedubdax',
//     'jobTitle': 'Visual Designer',
//     'email': 'blair@withinpixels.com',
//     'phone': '+1-202-555-0118',
//     'address': '143 Jones Street Eau Claire, WI 54701',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a68007920cf75051da64',
//     'name': 'Boyle',
//     'lastName': 'Winters',
//     'avatar': 'assets/images/avatars/Boyle.jpg',
//     'nickname': 'Jester',
//     'company': 'Newo',
//     'jobTitle': 'Catalogue Illustrator',
//     'email': 'boyle@withinpixels.com',
//     'phone': '+1-202-555-0177',
//     'address': '218 Pearl Street Brandon, FL 33510',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a68031fdbb1db2c1af47',
//     'name': 'Christy',
//     'lastName': 'Camacho',
//     'avatar': 'assets/images/avatars/Christy.jpg',
//     'nickname': 'Mist',
//     'company': 'uniway',
//     'jobTitle': '3D Animator',
//     'email': 'christy@withinpixels.com',
//     'phone': '+1-202-555-0136',
//     'address': '329 Bridge Street Desoto, TX 75115',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a680bc670af746c435e2',
//     'name': 'Copeland',
//     'lastName': 'Redcliff',
//     'avatar': 'assets/images/avatars/Copeland.jpg',
//     'nickname': 'Cloudlaw',
//     'company': 'Tempron',
//     'jobTitle': 'Multimedia Artist',
//     'email': 'copeland@withinpixels.com',
//     'phone': '+1-202-555-0107',
//     'address': '956 6th Avenue North Bergen, NJ 0704',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a680e7eb988a58ddf303',
//     'name': 'Estes',
//     'lastName': 'Stevens',
//     'avatar': 'assets/images/avatars/Estes.jpg',
//     'nickname': 'Roamer',
//     'company': 'nam-dex',
//     'jobTitle': 'Special Effects Artist',
//     'email': 'estes@withinpixels.com',
//     'phone': '+1-202-555-0113',
//     'address': '664 York Street Cambridge, MA 02138',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a680dcb077889f758961',
//     'name': 'Harper',
//     'lastName': 'MacGuffin',
//     'avatar': 'assets/images/avatars/Harper.jpg',
//     'nickname': 'Tempest',
//     'company': 'runcane',
//     'jobTitle': 'Application Developer',
//     'email': 'harper@withinpixels.com',
//     'phone': '+1-202-555-0173',
//     'address': '738 Route 11 Cornelius, NC 28031',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a6806acf030f9341e925',
//     'name': 'Helen',
//     'lastName': 'Sheridan',
//     'avatar': 'assets/images/avatars/Helen.jpg',
//     'nickname': 'Magicbattler',
//     'company': 'Subhow',
//     'jobTitle': 'Content Developer',
//     'email': 'helen@withinpixels.com',
//     'phone': '+1-202-555-0163',
//     'address': '194 Washington Avenue Saint Petersburg, FL 33702',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a680ae1ae9a3c960d487',
//     'name': 'Henderson',
//     'lastName': 'Cambias',
//     'avatar': 'assets/images/avatars/Henderson.jpg',
//     'nickname': 'Blizzard',
//     'company': 'Howcom',
//     'jobTitle': 'Web Designer',
//     'email': 'henderson@withinpixels.com',
//     'phone': '+1-202-555-0151',
//     'address': '686 Roosevelt Avenue Oviedo, FL 32765',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a680b8d240c011dd224b',
//     'name': 'Josefina',
//     'lastName': 'Lakefield',
//     'avatar': 'assets/images/avatars/Josefina.jpg',
//     'nickname': 'Violet',
//     'company': 'Gecko',
//     'jobTitle': 'Web Developer',
//     'email': 'josefina@withinpixels.com',
//     'phone': '+1-202-555-0160',
//     'address': '202 Hartford Road Lynchburg, VA 24502',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a68034cb3968e1f79eac',
//     'name': 'Katina',
//     'lastName': 'Bletchley',
//     'avatar': 'assets/images/avatars/Katina.jpg',
//     'nickname': 'Rose',
//     'company': 'Lexicom',
//     'jobTitle': 'Software Designer',
//     'email': 'katina@withinpixels.com',
//     'phone': '+1-202-555-0186',
//     'address': '219 Woodland Road Valrico, FL 33594',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a6801146cce777df2a08',
//     'name': 'Lily',
//     'lastName': 'Peasegood',
//     'avatar': 'assets/images/avatars/Lily.jpg',
//     'nickname': 'Star',
//     'company': 'zooflex',
//     'jobTitle': 'Software Specialist',
//     'email': 'lily@withinpixels.com',
//     'phone': '+1-202-555-0115',
//     'address': '305 Willow Drive Superior, WI 54880',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a6808a178bfd034d6ecf',
//     'name': 'Mai',
//     'lastName': 'Nox',
//     'avatar': 'assets/images/avatars/Mai.jpg',
//     'nickname': 'Violetmage',
//     'company': 'quadzone',
//     'jobTitle': 'Software Engineer',
//     'email': 'mai@withinpixels.com',
//     'phone': '+1-202-555-0199',
//     'address': '148 Heather Lane Mcminnville, TN 37110',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a680653c265f5c79b5a9',
//     'name': 'Nancy',
//     'lastName': 'Jaggers',
//     'avatar': 'assets/images/avatars/Nancy.jpg',
//     'nickname': 'Silverwarden',
//     'company': 'Opetamnix',
//     'jobTitle': 'Software Architect',
//     'email': 'nancy@withinpixels.com',
//     'phone': '+1-202-555-0120',
//     'address': '345 Laurel Lane Union City, NJ 07087',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a680bbcec3cc32a8488a',
//     'name': 'Nora',
//     'lastName': 'Franklin',
//     'avatar': 'assets/images/avatars/Nora.jpg',
//     'nickname': 'Katanachanter',
//     'company': 'Saoway',
//     'jobTitle': 'Database Coordinator',
//     'email': 'nora@withinpixels.com',
//     'phone': '+1-202-555-0172',
//     'address': '572 Rose Street Summerfield, FL 34491',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a6803d87f1b77e17b62b',
//     'name': 'Odessa',
//     'lastName': 'Goodman',
//     'avatar': 'assets/images/avatars/Odessa.jpg',
//     'nickname': 'Rose',
//     'company': 'transace',
//     'jobTitle': 'Database Administration Manager',
//     'email': 'odessa@withinpixels.com',
//     'phone': '+1-202-555-0190',
//     'address': '527 Jefferson Court Conyers, GA 30012',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a680e87cb319bd9bd673',
//     'name': 'Reyna',
//     'lastName': 'Preece',
//     'avatar': 'assets/images/avatars/Reyna.jpg',
//     'nickname': 'Holydawn',
//     'company': 'Dingex',
//     'jobTitle': 'Data Processing Planner',
//     'email': 'reyna@withinpixels.com',
//     'phone': '+1-202-555-0116',
//     'address': '297 Strawberry Lane Faribault, MN 55021',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a6802d10e277a0f35775',
//     'name': 'Shauna',
//     'lastName': 'Atherton',
//     'avatar': 'assets/images/avatars/Shauna.jpg',
//     'nickname': 'Faunasoul',
//     'company': 'Vivaflex',
//     'jobTitle': 'Art Director',
//     'email': 'shauna@withinpixels.com',
//     'phone': '+1-202-555-0159',
//     'address': '928 Canterbury Court Pittsburgh, PA 15206',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a680aef1e5cf26dd3d1f',
//     'name': 'Shepard',
//     'lastName': 'Rosco',
//     'avatar': 'assets/images/avatars/Shepard.jpg',
//     'nickname': 'Fireking',
//     'company': 'Goldenla',
//     'jobTitle': 'Magazine Designer',
//     'email': 'shepard@withinpixels.com',
//     'phone': '+1-202-555-0173',
//     'address': '904 Ridge Road Pickerington, OH 43147',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a680cd7efa56a45aea5d',
//     'name': 'Tillman',
//     'lastName': 'Lee',
//     'avatar': 'assets/images/avatars/Tillman.jpg',
//     'nickname': 'Gust',
//     'company': 'K-techno',
//     'jobTitle': 'News Photographer',
//     'email': 'tillman@withinpixels.com',
//     'phone': '+1-202-555-0183',
//     'address': '447 Charles Street Dorchester, MA 02125',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a680fb65c91a82cb35e2',
//     'name': 'Trevino',
//     'lastName': 'Bush',
//     'avatar': 'assets/images/avatars/Trevino.jpg',
//     'nickname': 'Wolf',
//     'company': 'Dalthex',
//     'jobTitle': 'Photojournalist',
//     'email': 'trevino@withinpixels.com',
//     'phone': '+1-202-555-0138',
//     'address': '84 Valley View Road Norman, OK 73072',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a68018c663044be49cbf',
//     'name': 'Tyson',
//     'lastName': 'Marshall',
//     'avatar': 'assets/images/avatars/Tyson.jpg',
//     'nickname': 'Honordread',
//     'company': 'Geocon',
//     'jobTitle': 'Manuscript Editor',
//     'email': 'tyson@withinpixels.com',
//     'phone': '+1-202-555-0146',
//     'address': '204 Clark Street Monsey, NY 10952',
//     'birthday': '',
//     'notes': ''
//   },
//   {
//     'id': '5725a6809413bf8a0a5272b1',
//     'name': 'Velazquez',
//     'lastName': 'Smethley',
//     'avatar': 'assets/images/avatars/Velazquez.jpg',
//     'nickname': 'Strifedream',
//     'company': 'ranex',
//     'jobTitle': 'Publications Editor',
//     'email': 'velezquez@withinpixels.com',
//     'phone': '+1-202-555-0146',
//     'address': '261 Cleveland Street Riverside, NJ 08075',
//     'birthday': '',
//     'notes': ''
//   }
// ];

@Component({
    selector: 'student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
    @ViewChild('dialogStudent')
    dialogStudent: TemplateRef<any>;

    students: any = [];
    dataSource: FilesDataSource | null;
    displayedColumns = ['avatar', 'firstname', 'studentid', 'phone', 'jobTitle', 'buttons'];
    dialogRef: any;
    constructor(public dialog: MatDialog, private route: ActivatedRoute, private studentService: StudentService) {}

    ngOnInit() {
        console.log('ngOnInit');
        this.studentService.onDataChanged.subscribe((res: any) => {
            this.students = res;
            console.log(res);
            console.log(this.students);
        });
    }
    onDelete(_id: any) {
        this.studentService.deleteData(_id);
    }

    /**
     * Edit student
     *
     * @param student
     */
    editStudent(student): void {
        // console.log("student1");
        this.dialogRef = this.dialog.open(StudentFormComponent, {
            panelClass: 'student-form-dialog',
            data: {
                student,
                action: 'edit',
            },
        });
        // console.log(student);

        this.dialogRef.afterClosed().subscribe((response) => {
            if (!response) {
                return;
            }
            const actionType: string = response[0];
            const formData: FormGroup = response[1];
            switch (actionType) {
                /**
                 * Save
                 */
                case 'save':
                    this.studentService.updateStudent(formData.getRawValue());

                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    this.onDelete(student);

                    break;
            }
        });
    }
}

// ทดลองทำตาม Demo Edit//
export class FilesDataSource extends DataSource<any> {
    /**
     * Constructor
     *
     * @param {StudentService} studentService
     */
    constructor(private studentService: StudentService) {
        super();
    }

    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @returns {Observable<any[]>}
     */
    connect(): Observable<any[]> {
        return this.studentService.onDataChanged;
    }

    /**
     * Disconnect
     */
    disconnect(): void {}
}
// ทดลองทำตาม Demo Edit//

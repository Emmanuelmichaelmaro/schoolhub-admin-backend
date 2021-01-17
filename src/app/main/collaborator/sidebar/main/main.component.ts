import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from 'app/main/school/school.service';
import { filter } from 'rxjs/operators';
import { CollaboratorService } from '../../collaborator.service';

@Component({
    selector: 'collaborator-main-sidebar',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    collaboratorForm: FormGroup;
    collaborators = [];

    filterBy: string;

    constructor(private collaboratorService: CollaboratorService, private _formBuilder: FormBuilder) {}

    ngOnInit() {
        this.collaboratorService.onDataChanged.subscribe((res: any) => {
            this.collaboratorForm = this._formBuilder.group({
                email: ['', [Validators.required, Validators.email]],
            });
        });
        // console.log(JSON.parse(window.localStorage.getItem("schoolinfo")));
        // this.getList();
    }
    // changeFilter(filter) : void
    // {
    //   this.filterBy = filter;
    // }

    // onAddCollaborator() {
    //   this.collab.create(this.collaborator);
    //   this.collab.created.subscribe((res: any) => {
    //     if (res.status == 200) {
    //       this.getList();

    //     }
    //   })
    // }
    // getList() {
    //   this.collab.getlist();
    //   this.collab.gettinglist.subscribe((res: any) => {
    //     if (res.status == 200) {
    //       this.collaborators = res.data;
    //     }
    //   })
    // }
    onAddCollaborator() {
        this.collaboratorService.updateData(this.collaboratorForm.getRawValue());
    }
}

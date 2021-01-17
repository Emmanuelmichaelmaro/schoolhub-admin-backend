import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollaboratorService } from '../collaborator.service';

@Component({
    selector: 'collaborator-list',
    templateUrl: './collaborator-list.component.html',
    styleUrls: ['./collaborator-list.component.scss'],
})
export class CollaboratorListComponent implements OnInit {
    collaborators: any = [];
    displayedColumns = ['email', 'schoolid', 'buttons'];
    constructor(private route: ActivatedRoute, private collaboratorService: CollaboratorService) {}

    ngOnInit() {
        console.log('ngOnInit');
        this.collaboratorService.onDataChanged.subscribe((res: any) => {
            this.collaborators = res;
        });
        // this.collaborators = this.route.snapshot.data['aaa']
        // console.log(this.collaborators);
    }
    onDelete(_id: any) {
        this.collaboratorService.deleteData(_id);
    }
}

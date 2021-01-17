import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-admission-list',
    templateUrl: './admission-list.component.html',
    styleUrls: ['./admission-list.component.scss'],
})
export class AdmissionListComponent implements OnInit {
    currentText = '';
    displayedColumns = ['stdno', 'fullname', 'nickname'];
    data: Data[] = [];
    dataSource: Data[];
    // dataSource: MatTableDataSource<Data>;
    // selectionModel = [];
    selection = new SelectionModel<Data>(false, null);
    constructor() {
        this.selection.changed.subscribe((a) => {
            if (a.added[0]) {
                // will be undefined if no selection
                alert('You selected ' + a.added[0].fullname);
            }
        });
    }

    ngOnInit(): void {}

    onPaste(paintText): void {
        // แยกแต่ละบรรทัด (\n)
        const items = paintText.split('\n');
        items.forEach((itm) => {
            // แยกแต่ละ field ด้วย Tab (\t)
            const fields = itm.split('\t');
            const trn = {
                stdno: fields[0],
                fullname: fields[1],
                nickname: fields[2],
            };

            this.data.push(trn);
        });
        this.dataSource = [...this.data];
        // this.dataSource = this.data;
    }

    tableKeydown(ev): void {
        console.log(ev);
    }

    @HostListener('window:keyup', ['$event'])
    // tslint:disable-next-line: typedef
    keyEvent(event: KeyboardEvent) {
        console.log(event);
    }
}

interface Data {
    stdno: string;
    fullname: string;
    nickname: string;
}

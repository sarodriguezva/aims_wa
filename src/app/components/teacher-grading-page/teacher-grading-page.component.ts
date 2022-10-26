import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

export interface studentGrading {
    name: string;
    grades: number[];
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

const testStudent: studentGrading[] = [
    { name: 'David', grades: [5, 2, 3] },
    { name: 'Lucas', grades: [1, 1, 1] },
    { name: 'David', grades: [4.3, 2, 3] },
];

@Component({
    selector: 'app-teacher-grading-page',
    templateUrl: './teacher-grading-page.component.html',
    styleUrls: ['./teacher-grading-page.component.css'],
})
export class TeacherGradingPageComponent implements OnInit {
    gradeNames = ['Parcial 1', 'Parcial 2', 'Parcial 3'];

    displayedColumns: string[] = ['Nombre'].concat(this.gradeNames);
    dataSource = testStudent;

    constructor() {}

    ngOnInit() {
        return;
    }
}

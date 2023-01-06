import { AfterViewInit, Component, Directive, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  displayedColumns: string[] = ['cin', 'name', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor() { }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  title = 'admin';
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}

@Directive()
export class TablePagination implements AfterViewInit {
  displayedColumns: string[] = ['cin', 'name', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  name: string;
  cin: number;
  email: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cin: 11111111, name: 'Yasser rahal', email:'yasser@gmail.com' },
  // {cin: 2, name: 'Helium', email: '4.0026'},
  // {cin: 3, name: 'Lithium', email: '6.941'},
  // {cin: 4, name: 'Beryllium', email: '9.0122'},
  // {cin: 5, name: 'Boron', email: '10.811' },
  // {cin: 6, name: 'Carbon', email: '12.0107' }
];

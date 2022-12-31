import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainerService } from 'src/app/service/trainer.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent {
  trainerForm: FormGroup;
  Trainers: any = [];


  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private trainerService: TrainerService
    ) {
      this.trainerForm = this.formBuilder.group({
      name: [''],
      email: [''],
      image:[''],
      password: [''],})
    }
  ngOnInit(): void {
    this.trainerService.GetTrainers().subscribe((res: any) => {
      console.log(res)
      this.Trainers =res;
    });
  }
  onSubmit(): any {
    console.log(this.trainerForm.value)
    this.trainerService.AddTrainer(this.trainerForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => (<any>this.router).navigateByUrl('/trainers'))
      }, (err) => {
        console.log(err);
    });
  }
  title = 'admin';
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
export class CardOverviewExample {}
export class GridListOverviewExample {}

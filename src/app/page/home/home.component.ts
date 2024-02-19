import { Component } from '@angular/core';
import { ClassesComponent } from '../../component/classes/classes.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ClassesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

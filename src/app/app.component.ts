import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,InputTextModule,
    CheckboxModule,
    DropdownModule,
    DialogModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prep-view';
  showDialog = false;

  cities = [
    { name: 'Delhi' },
    { name: 'Mumbai' },
    { name: 'Bangalore' }
  ];
}

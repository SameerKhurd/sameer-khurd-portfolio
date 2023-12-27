import { Component } from '@angular/core';
import { Education } from 'src/app/shared/interfaces/education.interface';
import { qualifications } from 'src/app/shared/data/education.data';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss'],
})
export class EducationSectionComponent {
  qualifications: Education[] = qualifications;
}

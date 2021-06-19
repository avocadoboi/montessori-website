import { Component, Input } from '@angular/core';
import { FormFile } from '../form-file';

@Component({
	selector: 'app-form-file',
	templateUrl: './form-file.component.html',
	styleUrls: ['./form-file.component.scss']
})
export class FormFileComponent {
	@Input() formFile!: FormFile;
}

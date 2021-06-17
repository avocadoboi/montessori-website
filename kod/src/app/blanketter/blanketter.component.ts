import { Component } from '@angular/core';
import { formFiles } from '../forms';

@Component({
	templateUrl: './blanketter.component.html',
	styleUrls: ['./blanketter.component.scss']
})
export class BlanketterComponent {
	formFiles = formFiles;
}

import { Component, ViewEncapsulation } from '@angular/core';
import { ContentLoaderService } from '../content-loader.service';
import { FormFile } from '../form-file'

@Component({
	templateUrl: './blanketter.component.html',
	styleUrls: ['./blanketter.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BlanketterComponent {
	content = this.loader.loadHtmlContent('blanketter');
	formFiles = this.loader.loadFromJson<FormFile[]>('assets/blanketter/blankett-info.json');

	constructor(private loader: ContentLoaderService) {}
}

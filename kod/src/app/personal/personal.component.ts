import { Component, ViewEncapsulation } from '@angular/core';
import { ContentLoaderService } from '../content-loader.service';

@Component({
	template: "<div [innerHtml]='content | async'></div>",
	styleUrls: ['./personal.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class PersonalComponent {
	content = this.loader.loadHtmlContent('personal');
	
	constructor(private loader: ContentLoaderService) {}
}

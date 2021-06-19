import { Component, ViewEncapsulation } from '@angular/core';
import { ContentLoaderService } from '../content-loader.service';

@Component({
	template: "<div [innerHtml]='content | async'></div>",
	styleUrls: ['./gdpr.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class GdprComponent {
	content = this.loader.loadHtmlContent('gdpr');
	
	constructor(private loader: ContentLoaderService) {}
}

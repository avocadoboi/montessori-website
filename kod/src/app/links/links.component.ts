import { Component, ViewEncapsulation } from '@angular/core';
import { ContentLoaderService } from '../content-loader.service';

@Component({
	template: "<div id='links-component-container' [innerHtml]='content | async'></div>",
	styleUrls: ['./links.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LinksComponent {
	content = this.loader.loadHtmlContent('länkar');
	
	constructor(private loader: ContentLoaderService) {}
}

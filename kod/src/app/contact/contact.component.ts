import { Component, ViewEncapsulation } from '@angular/core';
import { ContentLoaderService } from '../content-loader.service';

@Component({
	template: "<div [innerHtml]='content | async'></div>",
	styleUrls: ['./contact.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
	content = this.loader.loadHtmlContent('kontakt');

	constructor(private loader: ContentLoaderService) {}
}

import { Component, ViewEncapsulation } from '@angular/core';

import { ContentLoaderService } from '../content-loader.service';

@Component({
	template: "<div [innerHtml]='content | async'></div>",
	styleUrls: ['./hem.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class HemComponent {
	content = this.loader.loadHtmlContent('hem');
	
	constructor(private loader: ContentLoaderService) {}
}

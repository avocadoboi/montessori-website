import { Component, ViewEncapsulation } from '@angular/core';
import { ContentLoaderService } from '../content-loader.service';

@Component({
	template: "<div [innerHtml]='content | async'></div>",
	styleUrls: ['./pedagogik.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class PedagogikComponent {
	content = this.loader.loadHtmlContent('pedagogik');
	
	constructor(private loader: ContentLoaderService) {}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

import * as marked from 'marked';

@Injectable({
	providedIn: 'root'
})
export class ContentLoaderService {
	constructor(private http: HttpClient) {}

	loadHtmlContent(markdownFilename: string) {
		return this.http.get(`assets/innehåll/${markdownFilename}.md`, {responseType: 'text'})
			.pipe(map(markdown => marked(markdown)));
	}

	loadFromJson<T>(filePath: string) {
		return this.http.get<T>(filePath);
	}
}

import { Component, OnInit } from '@angular/core';
import { shuffle } from '../utils';

const imageCount = 11;

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	imageIds: number[] = new Array<number>(imageCount).fill(0).map((_, i) => i);
	
	ngOnInit() {
		shuffle(this.imageIds);
	}
}

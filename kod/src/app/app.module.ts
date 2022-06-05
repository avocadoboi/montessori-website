import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HemComponent } from './hem/hem.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { PedagogikComponent } from './pedagogik/pedagogik.component';
import { BlanketterComponent } from './blanketter/blanketter.component';
import { PersonalComponent } from './personal/personal.component';
import { GdprComponent } from './gdpr/gdpr.component';
import { LinksComponent } from './links/links.component';
import { FormFileComponent } from './form-file/form-file.component';
import { ContentLoaderService } from './content-loader.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HemComponent,
		NavItemComponent,
		PedagogikComponent,
		BlanketterComponent,
		PersonalComponent,
		GdprComponent,
		LinksComponent,
		FormFileComponent,
		ContactComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatRippleModule,
	],
	providers: [ContentLoaderService],
	bootstrap: [AppComponent]
})
export class AppModule { }

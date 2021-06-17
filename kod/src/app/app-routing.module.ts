import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlanketterComponent } from './blanketter/blanketter.component';
import { GdprComponent } from './gdpr/gdpr.component';
import { HemComponent } from './hem/hem.component';
import { LinksComponent } from './links/links.component';
import { PedagogikComponent } from './pedagogik/pedagogik.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
	{ path: '', component: HemComponent },
	{ path: 'pedagogik', component: PedagogikComponent },
	{ path: 'blanketter', component: BlanketterComponent },
	{ path: 'personal', component: PersonalComponent },
	{ path: 'gdpr', component: GdprComponent },
	{ path: 'länkar', component: LinksComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

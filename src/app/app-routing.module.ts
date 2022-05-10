import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConverterComponent } from './converter/converter.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', component: ConverterComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ConverterComponent, AboutComponent];

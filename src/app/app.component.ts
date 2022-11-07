import { Component } from '@angular/core';
import { Globals } from './services/global.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    loading = Globals.loading;
}

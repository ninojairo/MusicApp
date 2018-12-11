import { Routes} from '@angular/router';
import { HomeComponent} from '../app/components/home/home.component';
import { SearchComponent} from '../app/components/search/search.component';


export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '**', component: HomeComponent },
];


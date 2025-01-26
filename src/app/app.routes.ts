import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ChefsComponent } from './chefs/chefs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path :'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'Home Page'},
    {path:'about',component:AboutComponent,title:'About Page'},
    {path:'menu',component:MenuComponent,title:'Menu Page'},
    {path:'chefs',component:ChefsComponent,title:'Chefs Page'},
    {path:'gallery',component:GalleryComponent,title:'Gallery Page'},
    {path:'contact',component:ContactComponent,title:'Contact Page'},
    {path:'**', component:NotfoundComponent ,title:'Notfound Page'},
];

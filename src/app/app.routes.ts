import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Wishlist } from './wishlist/wishlist';
import { Details } from './details/details';

export const routes: Routes = [
    {
        path:'',
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:'home',
        component:Home
    },
    {
        path:'wishlist',
        component:Wishlist
    },
    {
        path: 'product/:id',
        component: Details ,
    }
];

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Wishlist } from './wishlist/wishlist';
import { Details } from './details/details';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Gold } from './gold/gold';
import { Chart } from './chart/chart';
import { Shop } from './shop/shop';

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
        path:'shop',
        component:Shop
    },
    {
        path:'wishlist',
        component:Wishlist
    },
    {
        path:'contact',
        component:Contact
    },
    {
        path:'about',
        component:About
    },
    {
        path:'chart',
        component:Chart
    },
    {
        path:'gold',
        component:Gold
    },
    {
        path: 'product/:id',
        component: Details ,
    }
];

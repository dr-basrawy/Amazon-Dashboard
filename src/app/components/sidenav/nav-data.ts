import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'products',
        icon: 'fal fa-box-open',
        label: 'Products',
       
    },
    {
        routeLink: 'category',
        icon: 'fal fa-store',
        label: 'category'
    },
  
    {
        routeLink: 'sellers',
        icon: 'fal fa-regular fa-user',
        label: 'Sellers List'
    },
    {
        routeLink: 'orders',
        icon: 'fal fa-solid fa-cart-arrow-down',
        label: 'Orders'
    },
   
    // {
    //     routeLink: 'login',
    //     icon: 'fal fa-solid fa-lock-open',
    //     label: 'login'
    // },
    // {
    //     routeLink: 'login',
    //     icon: "fal fa-solid fa-lock",
    //     label: 'logout'
    // }
];

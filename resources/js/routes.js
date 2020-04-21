import Home from './components/Home';
import About from './components/About'; 
import Services from './components/Services'; 
import Contact from './components/Contact'; 
import Login from './components/Login'; 

// user
import Profile from  './components/user/Profile';
import OrderProxy from './components/user/OrderProxy';
import DataTraffic from './components/user/DataTraffic';
import ProxyRule from './components/user/ProxyRule';

// admin
import Dashboard from './components/admin/Dashboard';
import PricingManagement from './components/admin/PricingManagement';
import CustomerAccounts from './components/admin/CustomerAccounts';
import CustomerManagement from './components/admin/CustomerManagement';

export default {
    mode: 'history',

    routes: [
        {
            path : '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/services',
            component: Services,
            name: 'services'
        },
        {
            path: '/contact',
            component: Contact,
            name: 'contact'
        },
        {
            path: '/about',
            component: About,
            name: 'about'
        },
        {
            path: '/login',
            component: Login,
            name: 'login'
        },
        {
            path : '/customer/profile',
            component: Profile,
            name: 'user-profile',
            meta: {
                title: '<i class="fas fa-user-cog"></i> Account Detail',
            }
        },
        {
            path : '/customer/order-proxy',
            component: OrderProxy,
            name: 'order-proxy',
            meta: {
                title: '<i class="fas fa-bars"></i> Order Proxy Traffic',
            }
        },
        {
            path : '/customer/data-traffic',
            component: DataTraffic,
            name: 'data-traffic',
            meta: {
                title: '<i class="fas fa-database"></i> Data Traffic',
            }
        },

        {
            path : '/customer/proxy-rule',
            component: ProxyRule,
            name: 'proxy-rule',
            meta: {
                title: '<i class="fas fa-pencil-ruler"></i> Proxy Rule',
            }
        },

        {
            path : '/admin',
            component: Dashboard,
            name: 'dashboard',
            meta: {
                title: '<i class="fas fa-chart-line"></i> Dashboard',
            }
        },

        {
            path : '/admin/pricing-management',
            component: PricingManagement,
            name: 'pricing-management',
            meta: {
                title: '<i class="fas fa-tags fa-flip-horizontal"></i> Pricing Management',
            }
        },
        
        {
            path : '/admin/customer-accounts',
            component: CustomerAccounts,
            name: 'customer-accounts',
            meta: {
                title: '<i class="fas fa-user-friends"></i> Customer Accounts',
            }
        },

        {
            path : '/admin/customer-management',
            component: CustomerManagement,
            name: 'customer-management',
            meta: {
                title: '<i class="fas fa-users-cog"></i> Customer Management',
            }
        },
    ]
}
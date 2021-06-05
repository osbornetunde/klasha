import { lazy } from 'react';
import { routesIF } from '../types';

const routes: routesIF[] = [
    {
        path: '/klasha/balances',
        exact: true,
        component: lazy(() => import('../features/analytics')),
    },
];

export { routes };

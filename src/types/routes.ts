import {LazyExoticComponent, ReactElement} from 'react';
import {RouterChildContext} from 'react-router-dom';


export interface routesIF {
    path: string;
    exact?: boolean;
    component: LazyExoticComponent<() => ReactElement<RouterChildContext>>;
}

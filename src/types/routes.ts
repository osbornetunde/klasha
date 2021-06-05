import {FunctionComponent, LazyExoticComponent, ReactElement} from 'react';
import {RouteComponentProps} from 'react-router-dom';

type Props = { component: FunctionComponent } & RouteComponentProps;

export interface routesIF {
    path: string;
    exact?: boolean;
    component: LazyExoticComponent<() => ReactElement<FunctionComponent<Props>>>;
}

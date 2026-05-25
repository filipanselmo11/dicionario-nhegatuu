import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { A } from './pages/a/a';
import { E } from './pages/e/e';
import { I } from './pages/i/i';
import { U } from './pages/u/u';
import { A2 } from './pages/a2/a2';
import { E2 } from './pages/e2/e2';
import { I2 } from './pages/i2/i2';
import { U2 } from './pages/u2/u2';
import { B } from './pages/b/b';
import { D } from './pages/d/d';
import { G } from './pages/g/g';
import { K } from './pages/k/k';
import { M } from './pages/m/m';
import { N } from './pages/n/n';
import { Nh } from './pages/nh/nh';
import { P } from './pages/p/p';
import { R } from './pages/r/r';
import { S } from './pages/s/s';
import { T } from './pages/t/t';
import { X } from './pages/x/x';
import { W } from './pages/w/w';
import { Y } from './pages/y/y';
import { Kw } from './pages/kw/kw';
import { Mb } from './pages/mb/mb';
import { Mp } from './pages/mp/mp';
import { Nd } from './pages/nd/nd';
import { Ng } from './pages/ng/ng';
import { Nt } from './pages/nt/nt';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'a',
        component: A
    },
    {
        path: 'e',
        component: E
    },
    {
        path: 'i',
        component: I
    },
    {
        path: 'u',
        component: U
    },
    {
        path: 'ã',
        component: A2
    },
    {
        path: 'ẽ',
        component: E2
    },
    {
        path: 'ĩ',
        component: I2
    },
    {
        path: 'ũ',
        component: U2
    },
    {
        path: 'b',
        component: B
    },
    {
        path: 'd',
        component: D
    },
    {
        path: 'g',
        component: G
    },
    {
        path: 'k',
        component: K
    },
    {
        path: 'm',
        component:  M
    },
    {
        path: 'n',
        component: N
    },
    {
        path: 'nh',
        component: Nh
    },
    {
        path: 'p',
        component: P
    },
    {
        path: 'r',
        component: R
    },
    {
        path: 's',
        component: S
    },
    {
        path: 't',
        component: T
    },
    {
        path: 'x',
        component: X
    },
    {
        path: 'w',
        component: W
    },
    {
        path: 'y',
        component: Y
    },
    {
        path: 'kw',
        component: Kw
    },
    {
        path: '-mb-',
        component: Mb
    },
    {
        path: '-mp-',
        component: Mp
    },
    {
        path: '-nd-',
        component: Nd
    },
    {
        path: '-ng-',
        component: Ng
    },
    {
        path: '-nt-',
        component: Nt
    }
];

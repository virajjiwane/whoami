import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home Page',
    },
    {
        path: 'my-work/:id',
        component: ProjectDetail,
        title: 'Project Detail',
    },
    {
        path: 'my-work',
        component: Projects,
        title: 'My Work',
    },
];

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductList } from './pages/product-list/product-list';
import { Portifolio } from './components/portifolio/portifolio';
import { Pai } from './components/aula2/pai/pai';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'products', component: ProductList },
  { path: 'portfolio', component: Portifolio },
  { path: 'pai', component: Pai },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

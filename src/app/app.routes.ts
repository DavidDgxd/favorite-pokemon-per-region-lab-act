import { Routes } from '@angular/router';
import {PokemonList } from './pokemon-list/pokemon-list';
import { Pokemart } from './pokemart/pokemart';

export const routes: Routes = [
  { path: '', redirectTo: 'kanto', pathMatch: 'full' },
  { path: 'kanto', component: PokemonList, data: { region: 'Kanto' } },
  { path: 'johto', component: PokemonList, data: { region: 'Johto' } },
  { path: 'hoenn', component: PokemonList, data: { region: 'Hoenn' } },
  { path: 'pokemart', component: Pokemart },
  { path: '**', redirectTo: 'kanto' }
];
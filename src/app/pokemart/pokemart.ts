import { Component,inject } from '@angular/core';
import { PokemonService } from '../pokemon';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-pokemart',
  styleUrl: './pokemart.css',
  templateUrl: './pokemart.html',
})
export class Pokemart {
  pokemonService = inject(PokemonService);
}

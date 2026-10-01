import { Component, inject, input, output, computed } from '@angular/core';
import { PokemonService } from '../pokemon';
import { Pokemon } from '../models-pokemon';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {
  region = input.required<'Kanto' | 'Johto' | 'Hoenn'>();

  pokemonSelect = output<Pokemon>();

  private pokemonService = inject(PokemonService);

  pokemonList = computed(() => 
    this.pokemonService.getPokemonByRegion(this.region())
  );

  onSelectPokemon(pokemon: Pokemon) {
    this.pokemonService.setSelectedPokemon(pokemon);
    this.pokemonSelect.emit(pokemon);
  }
}
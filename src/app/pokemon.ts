import { Injectable, signal, computed } from '@angular/core';
import { Pokemon } from './models-pokemon';
import { Item } from './models-item';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private pokemonList = signal<Pokemon[]>([
    // Kanto region Pokémon
    { id: 1, name: 'Bulbasaur', type: '🌿 Grass / ☠️ Poison', heldItem: 'Miracle Seed', description: 'A small, quadruped Pokémon with a plant bulb on its back.', region: 'Kanto', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
    { id: 2, name: 'Charizard', type: '🔥 Fire / 🕊️ Flying', heldItem: 'Charcoal', description: 'Spits fire hot enough to melt boulders.', region: 'Kanto', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png' },
    { id: 3, name: 'Blastoise', type: '🌊 Water', heldItem: 'Mystic Water', description: 'Fires pressurized water jets from its shell cannons.', region: 'Kanto', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png' },
    { id: 4, name: 'Pikachu', type: '⚡ Electric', heldItem: 'Light Ball', description: 'Stores electricity inside its cheek pouches.', region: 'Kanto', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' },
    { id: 5, name: 'Gengar', type: '👻 Ghost / ☠️ Poison', heldItem: 'Spell Tag', description: 'Hides in shadows. Drops surrounding room temperature.', region: 'Kanto', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png' },
    { id: 6, name: 'Dragonite', type: '🐉 Dragon / 🕊️ Flying', heldItem: 'Dragon Scale', description: 'Said to make its home somewhere out in the sea.', region: 'Kanto', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png' },

    // Johto region Pokémon
    { id: 7, name: 'Typhlosion', type: '🔥 Fire', heldItem: 'Charcoal', description: 'Rubs its blazing fur to cause giant explosions.', region: 'Johto', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png' },
    { id: 8, name: 'Feraligatr', type: '🌊 Water', heldItem: 'Mystic Water', description: 'Tears up targets with huge, crushing jaws.', region: 'Johto', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png' },
    { id: 9, name: 'Meganium', type: '🌿 Grass', heldItem: 'Miracle Seed', description: 'Its aroma calms aggressive feelings.', region: 'Johto', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png' },
    { id: 10, name: 'Scizor', type: '🐛 Bug / ⚙️ Steel', heldItem: 'Metal Coat', description: 'Swings steel-hard pincers without warning.', region: 'Johto', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png' },
    { id: 11, name: 'Tyranitar', type: '🪨 Rock / 🌙 Dark', heldItem: 'Hard Stone', description: 'Body cannot be damaged by standard attacks.', region: 'Johto', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png' },
    { id: 12, name: 'Ampharos', type: '⚡ Electric', heldItem: 'Magnet', description: 'Bright tail tip sends long-distance light signals.', region: 'Johto', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png' },

    // Hoenn region Pokémon
    { id: 13, name: 'Blaziken', type: '🔥 Fire / 🥊 Fighting', heldItem: 'Focus Sash', description: 'Can leap over a 30-story building easily.', region: 'Hoenn', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png' },
    { id: 14, name: 'Swampert', type: '🌊 Water / 🥪 Ground', heldItem: 'Soft Sand', description: 'Arms can drag heavy boulders over a ton.', region: 'Hoenn', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png' },
    { id: 15, name: 'Sceptile', type: '🌿 Grass', heldItem: 'Miracle Seed', description: 'Leaves on its body are sharp as sword blades.', region: 'Hoenn', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png' },
    { id: 16, name: 'Gardevoir', type: '🔮 Psychic / ✨ Fairy', heldItem: 'Mind Plate', description: 'Uses psychokinetic power to protect its Trainer.', region: 'Hoenn', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png' },
    { id: 17, name: 'Salamence', type: '🐉 Dragon / 🕊️ Flying', heldItem: 'Dragon Fang', description: 'Soars through the sky with immense excitement.', region: 'Hoenn', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png' },
    { id: 18, name: 'Metagross', type: '⚙️ Steel / 🔮 Psychic', heldItem: 'Twisted Spoon', description: 'Features four brains joined in a neural network.', region: 'Hoenn', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png' }
  ]);


  pokemartItems = signal<Item[]>([
    { id: 101, name: 'Poké Ball 🔴', price: 200, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png' },
    { id: 102, name: 'Great Ball 🔵', price: 600, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png' },
    { id: 103, name: 'Ultra Ball 🟡', price: 1200, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png' },
    { id: 104, name: 'Potion 🧪', price: 300, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png' },
    { id: 105, name: 'Super Potion 🧪', price: 700, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-potion.png' },
    { id: 106, name: 'Hyper Potion 🧪', price: 1500, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png' },
    { id: 107, name: 'Max Potion 🧪', price: 2500, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-potion.png' },
    { id: 108, name: 'Revive ✨', price: 1500, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/revive.png' },
    { id: 109, name: 'Antidote 🟢', price: 100, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/antidote.png' },
    { id: 110, name: 'Paralyze Heal 🟡', price: 200, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/paralyze-heal.png' }
  ]);


  private cartItems = signal<Item[]>([]);
  cart = this.cartItems.asReadonly();

  selectedPokemon = signal<Pokemon | null>(null);


  totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price, 0)
  );

  getPokemonByRegion(region: 'Kanto' | 'Johto' | 'Hoenn') {
    return computed(() => this.pokemonList().filter(p => p.region === region));
  }


  addToCart(item: Item) {
    this.cartItems.update(current => [...current, item]);
  }

  removeFromCart(index: number) {
    this.cartItems.update(current => current.filter((_, i) => i !== index));
  }

  clearCart() {
    this.cartItems.set([]);
  }

  setSelectedPokemon(pokemon: Pokemon) {
    this.selectedPokemon.set(pokemon);
  }
}           
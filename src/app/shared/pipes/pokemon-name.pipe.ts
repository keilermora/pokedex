import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName',
})
export class PokemonNamePipe implements PipeTransform {
  /**
   * Algunos nombres de Pokémon deben ser formateados.
   * @example nidoran-f y nidoran-m,
   * @param name nombre del Pokémon,
   */
  transform(name: string): string {
    if (name) {
      return name
        .replace(/-f$/g, '♀')
        .replace(/-m$/g, '♂')
        .replace(/-normal/g, '')
        .replace(/^mr-/g, 'Mr. ');
    }

    return name;
  }
}

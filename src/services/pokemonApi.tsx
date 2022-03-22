import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPokemon } from './types'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/'
  }),
  endpoints: (builder) => ({
    getPokemon: builder.query<IPokemon, string>({
      query: (id) => `pokemon/${id}`,
      transformResponse: (response: any) => {
        
        const pokemonType: string = response.types
          .map((poke: any) => poke.type.name)
          .join(", ");

        const pokemon = {
          id: response.id,
          name: response.name,
          image: `${response.sprites.front_default}`,
          type: pokemonType
        }

        return pokemon
      },
    }),
  }),
});

export const { useGetPokemonQuery } = pokemonApi;

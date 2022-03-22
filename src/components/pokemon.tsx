import React from 'react';
import { useGetPokemonQuery } from '../services/pokemonApi';

export default function Pokemon({ id }: any) {
    const { data: pokemon, error, isLoading } = useGetPokemonQuery(id);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      console.log(error);
      return <div>Oops, an error occured</div>;
    }
  
    return (
      <div className="card">
        <span className="card-id">#{pokemon?.id}</span>
        <img className="card-image" src={pokemon?.image} alt={pokemon?.name} />
        <h1 className="card-name">{pokemon?.name}</h1>
        <span className="card-details">{pokemon?.type}</span>
      </div>
    );
  }
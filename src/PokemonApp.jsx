import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
	const { page, pokemons, isLoading } = useSelector((state) => state.pokemon);
	const dispatch = useDispatch();

/* 	useEffect(() => {
		dispatch(getPokemons());
	}); */

	return (
		<>
			<h1>PokemonApp</h1>
			<hr />

			<span>Loading: { isLoading ? 'true' : 'False'} </span>

			<ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
			</ul>

			<button onClick={() => dispatch(getPokemons(page))}>Next</button>
		</>
	);
};

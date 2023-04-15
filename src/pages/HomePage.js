import React, { useEffect, useRef } from 'react';
import PokeList from '../components/PokeList';
import { SearchBox } from '../components/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../features/pokemons/pokemonSlice';
import Chart from "chart.js/auto";
import { PageTitle } from '../components/PageTitile';


export const HomePage = () => {
    const { search, page, type } = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemons({ page, search, type }));
    }, [page, search, type, dispatch]);

    return (
        <>
            <PageTitle title="Pokedex" />
            <SearchBox />
            <PokeList />
        </>
    );
};

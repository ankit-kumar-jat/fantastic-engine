import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  keepUnusedDataFor: 60, //cache time in secounds defalt is 60
  tagTypes: ["Pokemon", "Ability", "Nature"],
  endpoints: (builder) => ({
    getPokemonList: builder.query({
      query: (params) => ({
        url: "pokemon",
        params,
      }),
      // transformResponse: (response, meta, arg) => response.data,
    }),
    getPokemonNaturesList: builder.query({
      query: (params) => ({
        url: "nature",
        params,
      }),
      // transformResponse: (response, meta, arg) => response.data,
    }),
    getPokemonAbilitiesList: builder.query({
      query: (params) => ({
        url: "ability",
        params,
      }),
      // transformResponse: (response, meta, arg) => response.data,
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
      // transformResponse: (response, meta, arg) => response.data,
    }),
  }),
});

export const {
  useGetPokemonListQuery,
  useGetPokemonAbilitiesListQuery,
  useGetPokemonNaturesListQuery,
  useGetPokemonByNameQuery,
} = pokemonApi;

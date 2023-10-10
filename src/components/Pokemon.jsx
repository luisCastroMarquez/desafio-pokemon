import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button, Spinner, Alert } from "react-bootstrap";
import PokemonDetail from "./PokemonDetail";

const Pokemon = () => {
  const [search, setSearch] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemonData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Limpia el valor de búsqueda de espacios en blanco
      const cleanedSearch = search.trim().toLowerCase();

      if (cleanedSearch) {
        const url = `https://pokeapi.co/api/v2/pokemon/${cleanedSearch}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Pokémon not found");
        }

        const data = await response.json();
        setPokemonData(data);
      } else {
        // No se realiza la búsqueda si el valor de búsqueda está vacío
        setPokemonData(null);
      }
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setError("Pokémon not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      fetchPokemonData();
    }
  }, [search]);

  return (
    <>
      <Form className="mt-5">
        <Form.Group controlId="formBasicSearch">
          <Form.Label>
            <p>Selecciona un Pokémon:</p>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Pokemones"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={fetchPokemonData}>
          Buscar Pokémon
        </Button>
      </Form>

      {loading && <Spinner animation="border" variant="primary" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <PokemonDetail
        pokemonData={pokemonData}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default Pokemon;

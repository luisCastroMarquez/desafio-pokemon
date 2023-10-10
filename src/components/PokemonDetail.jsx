import React from "react";
import { Alert, Card, Spinner } from "react-bootstrap";

const PokemonDetail = ({ pokemonData, loading, error }) => {
  return (
    <div className="mt-4">
      {loading && <Spinner animation="border" variant="primary" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {pokemonData && (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
          <Card.Body>
            <Card.Title>{pokemonData.name}</Card.Title>
            <Card.Text>
              <h4>Habilidades:</h4>
              <ul>
                {pokemonData.abilities.map((ability, index) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default PokemonDetail;

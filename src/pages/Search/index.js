import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import backgroundMusic from '../../assets/Rick and Morty.mp3';

import { Content, BoxContent, Form, ListCard, Loading, Card, ModalContent, Modal, BoxTitle } from './style';

const Search = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCardClick(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleSearch = async (event) => {
    if (searchTerm === "") {
      return false;
    }

    event.preventDefault();

    setLoading(true);

    setTimeout(() => {
      axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
        .then(response => {
          const data = response.data;
          setCharacters(data.results);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 4000);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const validador = (text) => {
    return text.replace('unknown', 'Desconhecido')
      .replace("Human", "Humano").replace("Dead", "Morto")
      .replace("Mythological Creature", "Mitologica")
      .replace("Mr.Poopybutthole", "Sr.Bunda Cagada")
      .replace("Poopybutthole", "Sr.Bunda Cagada");
  };

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
  };

  console.log(characters);

  return (
    <Content>
      <BoxContent>
        <div>
          <audio autoPlay loop>
            <source src={backgroundMusic} type="audio/mp3" />
          </audio>
          <Form>
            <span>
              <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Buscar seres vivos"
                disabled={!searchTerm === ""}
              />
              <button
                type="button"
                onClick={handleSearch}
              >Buscar</button>
            </span>
          </Form>
          {loading ?
            <Loading src="https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" />
            :
            <ListCard>
              {characters.map(character => (
                <Card key={character.id} onClick={() => handleCardClick(character)} die={character.status === "Dead"}>
                  <img src={character.image} alt={character.name} die={character.status === "Dead"} />
                  <h3>Nome: <p>{character.name}</p></h3>
                  <h3>Espécie: <p>{character.species || "Desconhecido"}</p></h3>
                  <h3>Dimensão: <p>{validador(character.origin.name)}</p></h3>
                </Card>
              ))}
              {selectedCharacter && (
                <ModalContent>
                  <Modal die={selectedCharacter.status === "Dead"} ref={modalRef}>
                    <BoxTitle die={selectedCharacter.status === "Dead"}>
                      <figure>
                        <img src={selectedCharacter.image} alt={selectedCharacter.name} />
                        <span>Morto</span>
                      </figure>
                      <h2>{validador(selectedCharacter.name)}</h2>
                    </BoxTitle>
                    <h2>Especie: <p>{validador(selectedCharacter.species || 'Desconhecida')}</p></h2>
                    <h2>Status:<p>{validador(selectedCharacter.status || 'Desconhecida')}</p></h2>
                    <h2>Dimensão: <p>{validador(selectedCharacter.origin.name)}</p></h2>
                  </Modal>
                </ModalContent>
              )}
            </ListCard>
          }
        </div>
      </BoxContent>
      <p>Cryate © 2023 - All rights reserved by Rhuan</p>
    </Content>
  );
}

export default Search;

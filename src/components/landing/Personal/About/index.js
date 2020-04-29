import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FaCode, FaCoffee, FaMusic, FaTv, FaDumbbell, FaPencilRuler, FaBook, FaGamepad } from 'react-icons/fa';
import { TastesQuirksRow, TasteOrQuirk } from './styles';
import { Details, TitleWrapper, H2, SubTitle } from '../../../common/Text';

function About({ language }) {
  const [lang, setLang] = useState('english');

  useEffect(() => {
    setLang(language || lang);
  }, [lang, language]);

  return (
    <>
      <TitleWrapper>
        {lang === 'english' && (
          <>
            <H2>About Me</H2>
            <SubTitle>Personal</SubTitle>
          </>
        )}
        {lang === 'portuguese' && (
          <>
            <H2>Sobre Mim</H2>
            <SubTitle>Pessoal</SubTitle>
          </>
        )}
        {lang === 'german' && (
          <>
            <H2>Über Mich</H2>
            <SubTitle>Persönlich</SubTitle>
          </>
        )}
      </TitleWrapper>
      <Details>
        {lang === 'english' && (
          <>
            <h3>Tastes and Quirks</h3>
            <TastesQuirksRow>
              <TasteOrQuirk>
                <FaCode color="#333" size={64} />
                <span>Code</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaCoffee color="#333" size={64} />
                <span>Coffee</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaMusic color="#333" size={64} />
                <span>Music</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaTv color="#333" size={64} />
                <span>Series</span>
              </TasteOrQuirk>
            </TastesQuirksRow>

            <TastesQuirksRow>
              <TasteOrQuirk>
                <FaDumbbell color="#333" size={64} />
                <span>Workout</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaPencilRuler color="#333" size={64} />
                <span>Studying</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaBook color="#333" size={64} />
                <span>Books</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaGamepad color="#333" size={64} />
                <span>Games</span>
              </TasteOrQuirk>
            </TastesQuirksRow>
          </>
        )}

        {lang === 'portuguese' && (
          <>
            <h3>Gostos e Peculiariedades</h3>
            <TastesQuirksRow>
              <TasteOrQuirk>
                <FaCode color="#333" size={64} />
                <span>Código</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaCoffee color="#333" size={64} />
                <span>Café</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaMusic color="#333" size={64} />
                <span>Música</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaTv color="#333" size={64} />
                <span>Séries</span>
              </TasteOrQuirk>
            </TastesQuirksRow>

            <TastesQuirksRow>
              <TasteOrQuirk>
                <FaDumbbell color="#333" size={64} />
                <span>Treinos</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaPencilRuler color="#333" size={64} />
                <span>Estudos</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaBook color="#333" size={64} />
                <span>Livros</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaGamepad color="#333" size={64} />
                <span>Jogos</span>
              </TasteOrQuirk>
            </TastesQuirksRow>
          </>
        )}

        {lang === 'german' && (
          <>
            <h3>Geschmack und Macken</h3>
            <TastesQuirksRow>
              <TasteOrQuirk>
                <FaCode color="#333" size={64} />
                <span>Code</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaCoffee color="#333" size={64} />
                <span>Kaffee</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaMusic color="#333" size={64} />
                <span>Musik</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaTv color="#333" size={64} />
                <span>Serie</span>
              </TasteOrQuirk>
            </TastesQuirksRow>

            <TastesQuirksRow>
              <TasteOrQuirk>
                <FaDumbbell color="#333" size={64} />
                <span>Trainieren</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaPencilRuler color="#333" size={64} />
                <span>Studieren</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaBook color="#333" size={64} />
                <span>Bücher</span>
              </TasteOrQuirk>
              <TasteOrQuirk>
                <FaGamepad color="#333" size={64} />
                <span>Spiele</span>
              </TasteOrQuirk>
            </TastesQuirksRow>
          </>
        )}
      </Details>
    </>
  );
}

export default connect(state => ({
  language: state.portuguese,
}))(About);

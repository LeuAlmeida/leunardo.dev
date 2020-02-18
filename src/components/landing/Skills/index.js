import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Container } from 'components/common';
import { Details } from 'components/common/Text';
import dev from 'assets/vector/vector-cloud.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper, SkillsWrapper, Thumbnail } from './styles';

function Skills({ language }) {
  const [lang, setLang] = useState('english');

  useEffect(() => {
    setLang(language || lang);
  }, [lang, language]);

  return (
    <Wrapper id="myself">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="Hello! My name is Leonardo Almeida, but you can call me Léu :)" />
        </Thumbnail>
        <Details>
          {lang === 'english' && (
            <>
              <h1>Who I am</h1>
              <p>
                Hello! My name is Leonardo Almeida, but you can call me Léu.z
                <br />
                I’m 20 years old and I’m a tech enthusiast with a focus on front-end. Alongside this I also seek to
                learn about back-end so I can become a full stack developer. I also have experience on audiovisual
                production, 3D modeling and Graphic Design for occasional needs.
                <br />
                I’ve been involved with this market for a decade, when I was only 10 years old and started studying
                Basic HTML. Since then my crave for learning only got bigger.
                <br />
                My projects are focused on the user experience and it’s usability as a whole, aiming for a good
                relationship between user and platform - whether it’s a system or a full website.
                <br />
              </p>
              <p>
                From my perspective, proactivity and optimism should walk side by side in a way that great results are
                achieved on a relaxed workspace.
              </p>
              <p>
                Now that you know a little about me, <AnchorLink href="#contact">let’s grab a coffee?</AnchorLink>
              </p>
            </>
          )}
          {lang === 'portuguese' && (
            <>
              <h1>Quem sou eu</h1>
              <p>
                Olá! Me chamo Leonardo Almeida, mas pode me chamar de Léu.
                <br />
                Tenho 20 anos e sou um entusiasta da tecnologia, com foco em front-end. Busco, em paralelo, conhecimento
                na parte de back-end, para que eu consiga me tornar um desenvolvedor full stack. Também tenho
                experiência com produção audiovisual, design gráfico e modelagem 3D para eventuais necessidades.
                <br />
                Estou envolvido na área há uma década, quando tinha apenas 10 anos e iniciei estudos com HTML básico.
                Desde então minha vontade de aprender só aumentou. Meus projetos são focados na experiência do usuário e
                na sua usabilidade como um todo, visando um bom relacionamento do mesmo com a plataforma - seja um
                sistema ou um site propriamente dito.
                <br />
                Do meu ponto de vista, proatividade e otimismo devem caminhar lado a lado, de forma que se alcance
                ótimos resultados em um ambiente de descontração.
                <br />
              </p>
              <p>
                From my perspective, proactivity and optimism should walk side by side in a way that great results are
                achieved on a relaxed workspace.
              </p>
              <p>
                Agora que você já me conhece um pouco, <AnchorLink href="#contact">vamos tomar um café?</AnchorLink>
              </p>
            </>
          )}
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
}
export default connect(state => ({
  language: state.portuguese,
}))(Skills);

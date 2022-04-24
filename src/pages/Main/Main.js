import React from 'react';
import * as S from './Main.style';

import CreatedBlock from '../../components/CreatedBlock';

const Main = () => {
  return (
    <S.Container>
      <S.Title>노트제목</S.Title>
      <CreatedBlock />
    </S.Container>
  );
};

export default Main;

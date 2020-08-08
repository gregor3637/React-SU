import React from 'react'

import PageWrapper from '../../components/page-layout';
import styles from './index.module.css';
import Origamis from '../../components/title';
import Title from '../../components/origamis';

const Publications = () =>  {
 
    return (
      <PageWrapper>
        <Title title="Publications" />
        <Origamis />
      </PageWrapper>
    )
}

export default Publications;

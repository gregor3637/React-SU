import React from 'react'

import PageWrapper from '../../components/page-layout';
import styles from './index.module.css';
import Origamis from '../../components/title';
import Title from '../../components/origamis';
import { Component } from 'react';
import UserContext from '../../Context';

class Publications extends Component {
  static contextType = UserContext;

  render() {
    console.log("[Publications] this.context = ", this.context);

    return (
      <PageWrapper>
        <Title title="Publications" />
        <Origamis />
      </PageWrapper>
    )
  };
}

export default Publications;

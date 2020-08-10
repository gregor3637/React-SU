import React from 'react';

import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import Origamis from '../../components/origamis';

const shareThoughts = (props) => {
    return (
        <PageLayout>
            <Title title="Share your toughtsss..." />
            <div className={styles.conteiner}>
                <div>
                    <textarea className={styles.textarea} defaultValue="Publications..." />
                </div>
                <div>
                    <SubmitButton title="Post" />
                </div>
            </div>
            <Origamis length={3} />
        </PageLayout>
    );
};

export default shareThoughts;
import React from 'react';
import { Router, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styles from './TransitionRouter.module.css';

const TransitionRouter = ({ children }) => (
    <Location>
        {({ location }) => (
        <TransitionGroup className={styles.transitionGroup}>
            <CSSTransition key={location.key} timeout={500} classNames={styles.fade}>
            <Router location={location} className={styles.panelsFlex}>
                {children}
            </Router>
            </CSSTransition>
        </TransitionGroup>
        )}
    </Location>
)
export default TransitionRouter;
import React, { useRef, useCallback, useContext, useState } from 'react';
import mobileContext from '../mobileContext';

import styles from './Tooltip.module.css';

const Tooltip = ({ description }) => {
    const [ isVisible, setIsVisible ] = useState(false);
    const isMobile = useContext(mobileContext);
    const ref = useRef(null);

    //function that gets called when the user clicks so we can check if it was outside the tooltip
    const handleOutside = useCallback((evt) => {
        if (ref.current && !ref.current.contains(evt.target)) {
            //if the user has clicked outside of the tooltip, close it and deregister the event listener
            setIsVisible(false);
            document.removeEventListener('mousedown', handleOutside);   
        }
    }, [ setIsVisible ]);

    //function that gets called when a user clicks on the tooltip icon
    const clickHandler = useCallback(() => {
        //only let the tooltip be opened by clicking/tapping if we're in mobile mode
        if (isMobile === true) {
            //when making the toolip visible, establish an event listener for clicking outside of it
            if (isVisible === false) {
                document.addEventListener('mousedown', handleOutside);
            }
            setIsVisible(!isVisible);
        }
    }, [ handleOutside, isMobile, isVisible, setIsVisible]);

    const hoverHandler = useCallback((value) => {
        setIsVisible(value)
    }, [setIsVisible]);

    return (
        <span ref={ref}
            className={styles.tooltip}
            onMouseEnter={() => hoverHandler(true)}
            onMouseLeave={() => hoverHandler(false)}
        >
            <img 
                src={'/static/questionMark.png'}
                className={styles.tooltipImage} 
                alt={'hover for info'}
                onClick={(ref) => clickHandler(ref)}
            />
            <span className={styles.tooltipWrap}style={{visibility: (isVisible === true ? 'visible' : 'hidden')}}>
                <span className={styles.tooltipText} >
                    {description}
                </span>
            </span>
        </span>
    );
}

export default Tooltip;
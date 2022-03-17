import React from 'react';
import IconBack from '../../assets/icons/left-arrow.png';

import './styles.scss';

export const Header = ({ title, showBack, onClickBack }) => {
      return (
            <div className='header-wrapper'>
                  {showBack && (
                        <div
                              className='back-button-wrapper'
                              onClick={onClickBack}
                        >
                              <img src={IconBack} alt='' className='icon-back' />
                              Back
                        </div>
                  )}
                  <div className='title-wrapper'>{title}</div>
            </div>
      );
};

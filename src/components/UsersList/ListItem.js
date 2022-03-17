import React from 'react';

export const ListItem = ({ labelText, onClick }) => {
      return (
            <button className='list-item' onClick={onClick}>
                  {labelText}
            </button>
      );
};

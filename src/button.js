'use strict'

import React from 'react';


export const Button = ({ handleClick, name }) =>
  <button onClick={handleClick}>{name}</button>
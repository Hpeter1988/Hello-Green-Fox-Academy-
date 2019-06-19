'use strict'

import React from 'react';

const Button = ({ handleClick, name }) =>
  <button onClick={handleClick}>{name}</button>

export default Button;
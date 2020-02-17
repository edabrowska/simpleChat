import React from 'react'

import { RootForm, StyledInput } from './Input.shards'

const Input = ({
  handleSubmit,
  id,
  value,
  placeholder,
  handleChange
}) => <RootForm onSubmit={handleSubmit}>
    <StyledInput
      type='text'
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  </RootForm>

export default Input
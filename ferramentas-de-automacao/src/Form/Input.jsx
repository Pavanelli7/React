import React from 'react'

function Input({ id, label, value, setValue, required }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        required={required}
      />
    </>
  )
}

export default Input
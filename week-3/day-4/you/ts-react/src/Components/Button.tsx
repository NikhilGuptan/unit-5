import React from "react";

export const Button = ({ label ="", onClick = () =>{}  }) => {
  return (
    <button data-testid="button" onClick={() => onClick()}>
      {label}
    </button>
  )}

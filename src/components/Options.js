import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div className="options">
      <div className="count-wrap">
        <button
          className="button"
          onClick={props.handleRemoveAll}
          disabled={props.optionLength > 1 ? false : true}
        >
          Remove All
        </button>
        <span>{`Total Options: ${props.options.length}`}</span>
      </div>
      {props.options.length >= 1 && <p className="optxt">Options:</p>}
      <ul>
        {props.options.length === 0 && (
          <h2>No Items!!. Add New Item Below To Continue!</h2>
        )}
        {props.options.map((item, index) => {
          return (
            <Option
              key={index}
              optiontext={item}
              handleDelete={props.handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Options;
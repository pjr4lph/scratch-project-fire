import React from 'react';

const User = (props) => {
  return (
    <div>
      {(props.user) ?
        <div className="user">
          <h2>Hello, {props.user.login}</h2>
        </div>:
        null
      }
    </div>
  )
}

export default User;

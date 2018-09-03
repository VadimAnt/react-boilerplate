import React from 'react';

const AuthSignInComponnent = ({ email, password, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={onChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AuthSignInComponnent;

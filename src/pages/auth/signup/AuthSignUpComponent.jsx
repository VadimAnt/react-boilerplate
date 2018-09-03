import React from 'react';

const AuthSignUpComponent = ({
  firstName,
  lastName,
  email,
  password,
  onChange,
  onSubmit,
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          First name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Last name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={onChange}
          />
        </label>
        <br />
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

export default AuthSignUpComponent;

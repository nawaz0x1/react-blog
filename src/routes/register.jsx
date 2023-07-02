import { useState, useContext } from 'react';
import { signUpHandler } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';

const defaultValue = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(UserContext);

  const [formValue, setFormValue] = useState(defaultValue);
  const { name, email, password, confirmPassword } = formValue;

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
    signUpHandler(name.value, email.value, password.value);
    setIsLoggedIn(true);
    navigate('/');
  };

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setFormValue({ ...formValue, [id]: value });
  };

  return (
    <div className="min-h-min mt-6 flex flex-col justify-center">
      <div className="p-0 mx-auto max-w-full md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-2">Login</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200 mx-auto">
          <div className="p-4">
            <form onSubmit={submitHandler}>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={changeHandler}
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                E-mail
              </label>
              <input
                id="email"
                value={email}
                onChange={changeHandler}
                type="email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Password
              </label>
              <input
                id="password"
                value={password}
                onChange={changeHandler}
                type="password"
                minLength="8"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                value={confirmPassword}
                onChange={changeHandler}
                type="password"
                minLength="8"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              {formValue.confirmPassword &&
                formValue.password !== formValue.confirmPassword && (
                  <div className="pb-4">
                    <span className="text-red-500 ">
                      Password doesn't match
                    </span>
                  </div>
                )}
              <div>
                <button
                  type="submit"
                  className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2">Register</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

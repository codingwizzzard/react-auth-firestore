import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebaseConfig';

function Auth_Page() {
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

  // const googleProvider = new GoogleAuthProvider();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (login) {
        await signInWithEmailAndPassword(auth, user.email, user.password);
        setUser({});
        navigator('/add');
      } else {
        let res = await createUserWithEmailAndPassword(auth, user.email, user.password);
        if (res) {
          setUser({});
          navigator('/add');
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    if (loading) return
    setLoading(true)
    try {
      await signInWithPopup(auth, provider);
      navigator('/add');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="form-content border p-4 rounded shadow">
            <h3 className="text-center">{!login ? 'Sign Up' : 'Login'} Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={user.email || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={user.password || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  {!login ? 'Sign Up' : 'Login'}
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                >
                  {loading ? 'Signing In...' : 'Sign In with Google'}
                </button>
              </div>
              <div className="text-center mt-3">
                {login ? "Don't have an account?" : 'Already have an account?'}{' '}
                <span
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => setLogin(!login)}
                >
                  {login ? 'Sign Up' : 'Login'}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth_Page;
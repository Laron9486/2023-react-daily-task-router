import './App.css';
/* 注意 Route, Routes 是否引入 */
import { HashRouter, NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const Todo = () => {
  return <p>這是 Todo 頁面</p>;
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

// button Style
const btnStyle = {
  width: '120px',
  height: '50px',
  marginRight: '12px',
  fontSize: '16px',
  fontWeight: 'bold',
  letterSpacing: '1px',
  color: '#fff',
  backgroundColor: '#396c96 ',
  border: '3px solid #4f94cc'
}

/* Logout Button */
function Logout() {
  let isLogin;
  let nevigate = useNavigate();
  const userInfo = () => {
    if (!isLogin) {
      nevigate('./login');
    }
  }
  return (<>
    <button style={btnStyle} onClick={userInfo}>Logout</button></>)
}

/* Back to previous page */
function PageUp() {
  let nevigate = useNavigate();
  const handleClick = () => {
    nevigate(-1);
    console.log(`Page Up`);
  }
  return (<>
    <button style={btnStyle} onClick={handleClick}>Page Up</button>
  </>)
}

function App() {
  return (
    <div className="container">
      <h3>Change the route randomly to test 404 function</h3>
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<p>這是首頁頁面</p>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<p>404 ｜There's nothing here</p>} />
        </Routes>
        {/* 練習區 */}

        {/* Logout button */}
        <Logout />
        {/* Back to previous page */}
        <PageUp />

      </HashRouter>
    </div>
  );
}

export default App;
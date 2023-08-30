import './App.css';
/* 注意 Route, Routes, useNavigate, Outlet, useParams 是否引入 */
import { HashRouter, NavLink, Route, Routes, useNavigate, Outlet, useParams } from 'react-router-dom';

const Todo = () => {
  return <p>這是 Todo 頁面</p>;
};
const Login = () => {
  return <p>這是 Login 頁面</p>;
};
const Register = () => {
  return <p>這是 Register 頁面</p>;
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
  let n = 1;
  const handleClick = () => {
    nevigate(-1);
    console.log(`${n++}, Page Up`);
  }
  return (<>
    <button style={btnStyle} onClick={handleClick}>Page Up</button>
  </>)
}

/* Post parentComponent */
const Post = () => {
  return (<div>
    <p>這是 Post 頁面　|　[ Parent Component ]</p>
    <Outlet />  {/* Outlet渲染子路由 */}
  </div>)
}
/* ChatGPT：
<Outlet /> 渲染子路由時與 <PostId /> 相似，但擁有更多彈性和功能，它是 React Router 的核心特性之一。使得處理不同路由配置和情境變得更靈活，並更有效地管理子元件渲染、動態路由及多層嵌套結構。因此通常優先考慮 <Outlet />。 */

/* Post childrenComponent  */
const PostId = () => {
  let parmas = useParams();
  return (<p>
    Post ID：{parmas.postId}　|　[ Children Component ]
    {/* parmas.postId <<< Route path=":postId" */}
  </p>)
}

function App() {
  return (
    <div className="container">
      <h4>Change the route randomly to test 404 function</h4>

      <HashRouter>

        <div className="nav-link">
          <div>
            <h2>Routes, Route 練習</h2>
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

          <div style={{ marginLeft: "40px" }}>
            <h2>useNevigate 練習</h2>
            {/* Logout button */}
            <Logout />
            {/* Back to previous page */}
            <PageUp />
          </div>

        </div>

        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<p>這是 Home Page 頁面</p>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<p>404 ｜There's nothing here</p>} />
        </Routes>

        <h2>Route 動態路由 練習</h2>
        {/* Route 動態路由 */}
        <div className="nav-link">
          <NavLink to="/post">
            <p>Post 詳細頁面</p>
          </NavLink>
          <NavLink to="/post/2324">
            <p>Post ID 取得</p>
          </NavLink>
        </div>

        {/* Route 動態路由練習 */}
        <Routes>
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
            {/* Route path=":postId" <<< NavLink to="/___/2023" */}
          </Route>
        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
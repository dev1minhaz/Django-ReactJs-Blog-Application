import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Home from './component/Home';
import PostDetails from './component/PostDetails';
import Profile from './component/Profile';
import axios from 'axios';
import { domain, header } from './env';
import { useStateValue } from './state/provider';
import Login from './component/Login';
import Register from './component/Register';
import NewPost from './component/NewPost';
import UpdatePost from './component/UpdatePost';

const App = () => {
  const [{ profile }, dispatch] = useStateValue();
  const history = useHistory();
  useEffect(() => {
    try {
      const getProfile = async () => {
        await axios({
          method: "get",
          url: `${domain}/profile/`,
          headers: header
        }).then(response => {
          console.log(response.data['userdata']);
          dispatch({
            type: "ADD_PROFILE",
            value: response.data['userdata']
          })
        })
      }
      getProfile();
    } catch(err) {
      window.location.href = "/login"
      dispatch({
        type: "ADD_PROFILE",
        value: null
      })
    }
  }, []);
  return (

    <div className="container max-w-screen-xl mx-auto">
      <BrowserRouter>
        <Navbar />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/blog/:id" component={PostDetails} />

          {
            profile !== null ? (
              <>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/newpost" component={NewPost} />
                <Route exact path="/:id/update" component={UpdatePost} />
              </>
            ) : (
              <>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </>
            )
          }
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

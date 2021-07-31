import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Menubar from './components/Menubar'
import QuoteList from './components/QuoteList'
import Login from './components/Login'
import Signup from './components/Signup'

import 'antd/dist/antd.css'
import './App.css'

const { Content } = Layout

export default function App() {
  const [user,setUser] = useState(null)

  return (
    <Router>
      <Layout>
          <Menubar user={user} setUser={setUser} />
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, minHeight: '100vh' }}>
            <QuoteList />
            <Switch>
              <Route exact path="/login"><Login setUser={setUser} /></Route>
              <Route exact path="/signup"><Signup setUser={setUser} /></Route>
            </Switch>
          </Content>
      </Layout>
    </Router>
  )
}
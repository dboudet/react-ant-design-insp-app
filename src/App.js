import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Menubar from './components/Menubar'
import QuoteList from './components/QuoteList'
import Login from './components/Login'
import 'antd/dist/antd.css'
import './App.css'

const { Content } = Layout

export default function App() {

  return (
    <Router>
      <Layout>
          <Menubar />
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, minHeight: '100vh' }}>
            <QuoteList />
            <Switch>
              <Route exact path="/login" component={Login} />
            </Switch>
          </Content>
      </Layout>
    </Router>
  )
}
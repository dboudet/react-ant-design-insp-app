import { Link } from 'react-router-dom'
import { Layout, Menu } from "antd";

const { Header } = Layout

export default function Menubar() {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100vw' }}>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1"><Link to="/" className="logo"></Link></Menu.Item>
                <Menu.Item key="2"><Link to="/login">Log In</Link></Menu.Item>
                <Menu.Item key="3">Sign Up</Menu.Item>
                <Menu.Item key="4">Post Quote</Menu.Item>
                <Menu.Item key="5">Log Out</Menu.Item>
            </Menu>
        </Header>
    )
    
}
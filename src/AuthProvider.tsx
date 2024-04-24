import {
    // createContext,
    // useContext,
    // useEffect,
    // useMemo,
    useState,
} from 'react';

import Routes from './routes/Routes';

import { Link, useNavigate } from 'react-router-dom';

  
import axios from 'axios';
import { Button, Card, Form, Input } from 'antd';

function AuthProvider() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const history = useHistory();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', { email, password });
            const token = response.data['access_token'];
            // Store the token in local storage or state for future use
            // Redirect the user to the desired page
            localStorage.setItem('access_token', token);
            // history.push('/home');
            console.log('Logged in! Token:' + localStorage.getItem('access_token'));
        } catch (error) {
            // Handle login error
            console.error(error);
        }
    };

    return (
        <>
        <Card title="Login" style={{ width: 300 }}>
            <Form>
                <Form.Item>
                    <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={handleLogin}>Login</Button>
                </Form.Item>
                </Form>
                <a href="/users">Register</a>
        </Card>
    </>
    );
}

export default AuthProvider;
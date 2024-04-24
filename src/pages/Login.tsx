import {
    useState,
} from 'react';

 import { useNavigate } from 'react-router-dom';


// Rest of the code...


import axios from 'axios';
import { Button, Card, Form, Input, Checkbox } from 'antd';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigateTo = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', { email, password });
            const token = response.data['access_token'];
            localStorage.setItem('access_token', token);
            navigateTo('/users');
            console.log('Logged in! Token:' + localStorage.getItem('access_token'));
        } catch (error) {
            // Handle login error
            console.error(error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card title="Login">
            <Form
                name="login-form"
                initialValues={{ remember: true }}
                // onFinish={onFinish}
                style={{ width: 300 }}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please enter your email!' }]}
                >
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please enter your password!' }]}
                >
                        <Input.Password
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" onClick={handleLogin} style={{ width: '100%' }}>
                        Log in
                    </Button>
                </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default Login;
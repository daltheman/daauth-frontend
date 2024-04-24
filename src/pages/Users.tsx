import { useState, useEffect } from 'react';
import {
    Table, TableColumnsType,
    Button,
    message,
    Popconfirm, PopconfirmProps,
} from 'antd';
 
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import uuid from 'react-uuid';
const { Sider, Content } = Layout;

const Users: React.FC = () => {
    const [contextHolder] = message.useMessage();
    
    const [users, setUsers] = useState([]);

    const cancel: PopconfirmProps['onCancel'] = (_e) => {
        message.error('Cancelado');
    };    
    
    const handleDelete: PopconfirmProps['onConfirm'] = (uuid) => {
        axios.delete(`http://localhost:3000/user/${uuid}`)
            .then((response) => {
                console.log(response);
                setUsers(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then((response) => {
                setUsers(response.data['userData']);
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err)
            });
    }, []);

    const columns: TableColumnsType = [
        { title: "Id", dataIndex: '_id', key: '_id' },
        { title: 'Nome', dataIndex: 'firstName', key: 'firstName' },
        { title: 'Sobrenome', dataIndex: 'lastName', key: 'lastName' },
        { title: 'Nascimento', dataIndex: 'birthdate', key: 'birthdate' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Telefone', dataIndex: 'phone', key: 'phone' },
        // { title: 'Permissões', dataIndex: 'accessRole', key: 'accessRole' },
        // { title: 'Senha', dataIndex: 'password', key: 'password' },
        {
            // render: (user) => <Button type='primary' danger ghost onClick={warning}>Remover</Button>
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render: (_text, record, _index) =>
                <Popconfirm
                    title="Remover"
                    description='Tem certeza que quer remover o usuário?'
                    onConfirm={() => handleDelete(record._id)}
                    onCancel={cancel}
                    okText="Sim"
                    cancelText="Não"
                >
                <Button danger>Delete</Button>
                </Popconfirm>
        },
    ];
    return (
    <>
    <Layout style={{ minHeight: '100vh' }}>
        <Sider width={200}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="0">
              < Link to='/calendar'>Calendário</Link>
              </Menu.Item>            
            <Menu.Item key="1">
              < Link to='/users'>Usuários</Link>
              </Menu.Item>
            <Menu.Item key="2">
              <Link to='/'>Sair</Link>
            </Menu.Item>

            </Menu>
        </Sider>
        <Layout>
            <Content style={{ padding: '24px' }}>
                <Table dataSource={users} columns={columns} rowKey={() => uuid()}/>
            </Content>
        </Layout>
    </Layout>  
    </>
    );
}

export default Users;
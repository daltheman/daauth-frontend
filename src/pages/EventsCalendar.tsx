import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Sider, Content } = Layout;

const getListData = (value: Dayjs) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event......' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const EventsCalendar: React.FC = () => {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={200}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
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
                <Calendar cellRender={cellRender} theme='dark'/>
            </Content>
        </Layout>
    </Layout>  
      
    </>
  );
};

export default EventsCalendar;
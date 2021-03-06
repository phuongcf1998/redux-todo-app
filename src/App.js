import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
      
        borderRadius: 5,
        height: '90vh',
      
        
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO APP REDUX Made by phuongcf1998</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;

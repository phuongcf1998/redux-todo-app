import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { todoSlice } from "../Todo/TodoSlice";
import { useState } from "react";
import {
  searchTextSelector,
  todoListRemainSelector,
  todoListSelector,
} from "../../redux/selector";
export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const todoList = useSelector(todoListRemainSelector);
  // const searchText = useSelector(searchTextSelector);

  const handleClickButton = () => {
    // dispatch(
    //   addTodo({
    //     id: uuidv4(),
    //     name: todoName,
    //     priority: priority,
    //     completed: false,
    //   })
    // );
    dispatch(
      todoSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
        isRemoved: false,
      })
    );
    setTodoName("");
    setPriority("Medium");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  const handleClearButton = () => {
    dispatch(todoSlice.actions.removeAll());
  };
  return (
    <>
      <Row
        style={{
          maxHeight: "150px",
          overflowY: "auto",
          boxSizing: "border-box",
          border: "1px solid #fff"
        }}
      >
        <Col span={24} style={{ height: "calc(100% - 40px)" }}>
          {todoList.map((todo, index) => (
            <Todo
              key={index}
              id={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
            />
          ))}
        </Col>
      </Row>
      <Row style={
        {marginTop:'10px'}
      } >
        <Col span={24}>
          <Input.Group style={{ display: "flex" }} compact>
            <Input value={todoName} onChange={handleInputChange} />
            <Select
              defaultValue="Medium"
              value={priority}
              onChange={handlePriorityChange}
            >
              <Select.Option value="High" label="High">
                <Tag color="red">High</Tag>
              </Select.Option>
              <Select.Option value="Medium" label="Medium">
                <Tag color="blue">Medium</Tag>
              </Select.Option>
              <Select.Option value="Low" label="Low">
                <Tag color="gray">Low</Tag>
              </Select.Option>
            </Select>
            <Button type="primary" onClick={handleClickButton}>
              Add
            </Button>
            <Button type="danger" onClick={handleClearButton}>
              Clear All
            </Button>
          </Input.Group>
        </Col>
      </Row>
    </>
  );
}

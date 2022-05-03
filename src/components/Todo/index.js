import { Row, Tag, Checkbox, Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { toggleTodoListStatus } from "../../redux/actions";
import { todoSlice } from "./TodoSlice";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, priority, completed, id, isRemoved }) {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();
  const toggleCheckbox = () => {
    setChecked(!checked);
    // dispatch(toggleTodoListStatus(id));
    dispatch(todoSlice.actions.toggleTodoListStatus(id));
  };
  const removeTodoElement = () => {
    dispatch(todoSlice.actions.removeTodoItem(id));
  };

  return isRemoved ? null : (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
      <Button onClick={removeTodoElement} type="danger">
        Remove
      </Button>
    </Row>
  );
}

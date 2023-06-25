import { useEffect, useRef, useState } from "react";
import { FiSquare } from "react-icons/fi";
import { HiOutlinePencilAlt, HiPlus, HiCheck, HiFlag } from "react-icons/hi";

const getLocalStorage = () => {
  let list = localStorage.getItem("todo");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function TodoList() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(getLocalStorage());
  const [classValues, setClassValues] = useState("icon-add");
  const [editItemIndex, setEditItemIndex] = useState(-1);
  const [priorityIndex, setPriorityIndex] = useState(-1);

  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(items));
  }, [item, editItemIndex]);

  useEffect(() => {
    if (editItemIndex !== -1) {
      inputRef.current.focus();
    }
  }, [editItemIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      setClassValues("icon-add");
      if (editItemIndex === -1) {
        setItems([...items, { item: item, id: Date.now() }]);
      } else {
        const newItems = [...items];
        newItems[editItemIndex].item = item;
        setItems(newItems);
        setEditItemIndex(-1);
      }
      setItem("");
    } else {
      setClassValues("icon-add error");
    }
  };

  const removeItem = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    const itemToRemove = document.getElementById(`item-${id}`);
    if (itemToRemove) {
      itemToRemove.style.transform = "translateX(110%)";
      itemToRemove.addEventListener("transitionend", () => {
        const newArr = [...items];
        if (itemIndex === priorityIndex) {
          setPriorityIndex(-1);
        }
        newArr.splice(itemIndex, 1);
        setItems(newArr);
      });
    }
  };

  const editItem = (id) => {
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      setItem(items[index].item);
      setEditItemIndex(index);
    }
  };

  const switchPriority = (index1, index2, isPriority) => {
    if (items.length <= 1) {
      return; // Do nothing if there is only one item
    }

    const newItems = [...items];
    [newItems[index1], newItems[index2]] = [newItems[index2], newItems[index1]];
    setItems(newItems);
    if (isPriority) {
      setPriorityIndex(index2);
    } else {
      setPriorityIndex(index1);
    }
  };

  return (
    <div className="card todo-card">
      <h2 className="header">Todo-list</h2>
      <ul
        className={`${items.length === 0 ? "empty-list" : "todo-list"}`}
        ref={listRef}
      >
        {items.map((todo, index) => {
          const { item, id } = todo;
          const isPriority = index === 0;
          return (
            <li
              className={`item ${isPriority && "priority"}`}
              key={id}
              id={`item-${id}`}
            >
              <div className="flex">
                <button className="btn-complete" onClick={() => removeItem(id)}>
                  <FiSquare className="icon-circle" />
                </button>
                <p>{item}</p>
              </div>
              <div className="edit">
                <button
                  className="btn-complete btn-hover"
                  onClick={() => editItem(id)}
                >
                  <HiOutlinePencilAlt className="icon-pencil" />
                </button>
                <button
                  className={`btn-complete ${isPriority && "btn-flag--active"}`}
                  onClick={() => {
                    const newIndex = isPriority ? 1 : 0;
                    if (index !== newIndex) {
                      switchPriority(index, newIndex, isPriority);
                    }
                  }}
                >
                  <HiFlag className="icon-flag" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <form className="add-task" onSubmit={handleSubmit}>
        {editItemIndex === -1 ? (
          <button className="btn-add btn-hover" onClick={handleSubmit}>
            <HiPlus className={classValues} />
          </button>
        ) : (
          <button
            className="btn-add btn-hover"
            onClick={() => editItem(todo.id)}
          >
            <HiCheck className="icon-add" />
          </button>
        )}
        <input
          type="text"
          ref={inputRef}
          className="input"
          placeholder="Add Task"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TodoList;

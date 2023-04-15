import { useEffect, useRef, useState } from "react";
import { FiSquare } from "react-icons/fi";
import { HiOutlinePencilAlt, HiPlus, HiCheck } from "react-icons/hi";

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
  const [classValues, setClassValues] = useState("input");
  const [editItemIndex, setEditItemIndex] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();

    localStorage.setItem("todo", JSON.stringify(items));
  }, [items, editItemIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      setClassValues("input");
      if (editItemIndex === -1) {
        // Add new item
        setItems([...items, { item: item, id: Date.now() }]);
      } else {
        // Update existing item
        const newItems = [...items];
        newItems[editItemIndex].item = item;
        setItems(newItems);
        setEditItemIndex(-1);
      }
      setItem("");
    } else {
      setClassValues("input error");
    }
  };

  const removeItem = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    const itemToRemove = document.getElementById(`item-${id}`);
    if (itemToRemove) {
      itemToRemove.style.transform = "translateX(110%)";
      itemToRemove.addEventListener("transitionend", () => {
        const newArr = [...items];
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

  return (
    <div className="card todo-card">
      <h2 className="header">Todo-list</h2>
      <ul className={`${items.length === 0 ? "empty-list" : "todo-list"}`}>
        {items.map((todo) => {
          const { item, id } = todo;
          return (
            <li className="item" key={id} id={`item-${id}`}>
              <div className="flex">
                <button className="btn-complete" onClick={() => removeItem(id)}>
                  <FiSquare className="icon-circle" />
                </button>
                <p>{item}</p>
              </div>
              <div className="edit">
                <button className="btn-complete" onClick={() => editItem(id)}>
                  <HiOutlinePencilAlt className="icon-pencil" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <form className="add-task" onSubmit={handleSubmit}>
        {editItemIndex === -1 ? (
          <button className="btn-add btn-hover" onClick={handleSubmit}>
            <HiPlus className="icon-add" />
          </button>
        ) : (
          <button className="btn-add btn-hover" onClick={() => editItem(id)}>
            <HiCheck className="icon-add" />
          </button>
        )}
        <input
          type="text"
          placeholder="Add task"
          ref={inputRef}
          className={classValues}
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TodoList;

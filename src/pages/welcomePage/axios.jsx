import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/items";

function Items() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(API_URL).then((res) => setItems(res.data));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`${API_URL}/${id}`).then(() => {
            setItems(items.filter(item => item.id !== id));
        });
    };

    const handleUpdate = (id) => {
        const newName = prompt("Enter new name:");
        if (newName) {
            axios.put(`${API_URL}/${id}`, { name: newName }).then((res) => {
                setItems(items.map(item => item.id === id ? res.data : item));
            });
        }
    };

    return (
        <div>
            
            <h2>Items List</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleUpdate(item.id)}>Update</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Items;

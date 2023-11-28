import {useState, useEffect} from 'react';
import Order from './Order';

function OrdersList() {
    const [orders, setOrders] = useState([]);
    // const [name, setName] = useState('');

    const fetchData = async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/todos');
        const response = await result.json();
        
        setOrders(response);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {orders?.map(order => (
                // <div key={order.id}>{order.title}</div>
                <Order key={order.id} order={order} />
            ))}
        </div>
    )
}

export default OrdersList;
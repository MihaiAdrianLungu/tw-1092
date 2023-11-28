function Order(props) {
    const {order} = props;
    
    return (
        <div>{order.title}</div>
    )
}

export default Order;
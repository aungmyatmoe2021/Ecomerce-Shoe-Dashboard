// import package
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Loading from '../LoadingError/Loading';
import Message from '../LoadingError/Message';

const LatestOrder = (props) => {
    const { loading, error, orders } = props;
    return (
        <div className='card-body'>
            <h4 className='card-title'>New Orders</h4>
            {loading ? (
                <Loading />
            ) : error ? (
                (
                    <Message variant="alert-danger">{error}</Message>
                )
            ) :
                (
                    <div className='table-responsive'>
                        <table className='table'>
                            <tbody>
                                <tr key="1">
                                    <td><b>Moe</b></td>
                                    <td>aungmyatmoe2008@gmail.com</td>
                                    <td>10.00</td>
                                    <td>
                                        {true ? (
                                            <span className='badge rounded-pill alert-success'>
                                                Paid At 10:30 AM
                                            </span>
                                        ) : (
                                            <span className='badge rounded-pill alert-danger'>
                                                Not paid
                                            </span>
                                        )}
                                    </td>
                                    <td>10.00 AM</td>
                                    <td className='d-flex justify-content-end align-item-center'>
                                        <Link to={`/order/1`} className="text-success">
                                            <i className='fas fa-eye'></i>
                                        </Link>
                                    </td>
                                </tr>

                                {/* {orders.slice(0, 5).map((order) => (
                                    <tr key={order._id}>
                                        <td>
                                            <b>{order.user.name}</b>
                                        </td>
                                        <td>{order.user.email}</td>
                                        <td>{order.totalPrice}</td>
                                        <td>
                                            {order.isPaid ? (
                                                <span className='badge rounded-pill alert-success'>
                                                    Paid At {moment(order.paidAt).format("DD MMM YYYY")}
                                                </span>
                                            ) :
                                                (
                                                    <span className='badge rounded-pill alert-danger'>
                                                        Not paid
                                                    </span>
                                                )}
                                        </td>
                                        <td>{moment(order.createdAt).calendar()}</td>
                                        <td className='d-flex justify-content-end align-item-center'>
                                            <Link to={`/order/${order._id}`} className='text-success'>
                                                <i className='fas fa-eye'></i>
                                            </Link>
                                        </td>
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    );
};

export default LatestOrder;
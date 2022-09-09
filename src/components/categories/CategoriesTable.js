import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesTable = () => {
    return (
        <div className='col-md-12 col-lg-8'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value='' />
                            </div>
                        </th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th className='text-end'>Action</th>
                    </tr>
                </thead>

                {/* Data */}
                <tbody>
                    <tr>
                        <td>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value='' />
                            </div>
                        </td>
                        <td>1</td>
                        <td><b>Men Clothes</b></td>
                        <td>Men Clothes</td>
                        <td className='text-end'>
                            <div className='dropdown'>
                                <Link to='#' data-bs-toggle='dropdown' className='btn btn-light'>
                                    <i className='fas fa-ellipsis-h'></i>
                                </Link>
                                <div className='dropdown-menu'>
                                    <Link to='#' className='dropdown-item'>Edit</Link>
                                    <Link to="#" className='dropdown-item text-danger'>Delete</Link>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value='' />
                            </div>
                        </td>
                        <td>2</td>
                        <td><b>Women Clothes</b></td>
                        <td>Fashion for Women</td>
                        <td className='text-end'>
                            <div className='dropdown'>
                                <Link to='#' data-bs-toggle='dropdown' className='btn btn-light'>
                                    <i className='fas fa-ellipsis-h'></i>
                                </Link>
                                <div className='dropdown-menu'>
                                    <Link to='#' className='dropdown-item'>Edit</Link>
                                    <Link to="#" className='dropdown-item text-danger'>Delete</Link>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value='' />
                            </div>
                        </td>
                        <td>3</td>
                        <td><b>Kids Clothes</b></td>
                        <td>Clothes for kids</td>
                        <td className='text-end'>
                            <div className='dropdown'>
                                <Link to='#' data-bs-toggle='dropdown' className='btn btn-light'>
                                    <i className='fas fa-ellipsis-h'></i>
                                </Link>
                                <div className='dropdown-menu'>
                                    <Link to='#' className='dropdown-item'>Edit</Link>
                                    <Link to="#" className='dropdown-item text-danger'>Delete</Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CategoriesTable;
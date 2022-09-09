// import package
import React, { useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

const Header = () => {
    // const dispatch = useDispatch();

    useEffect(() => {
        $("[data-trigger]").on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            var offcanvas_id = $(this).attr("data-trigger");
            $(offcanvas_id).toggleClass("show");
        });

        $(".btn-aside-minimize").on("click", function () {
            if (window.innerWidth < 768) {
                $("body").removeClass("aside-mini");
                $(".navbar-aside").removeClass("show");
            } else {
                // minimize sidebar on desktop
                $("body").toggleClass("aside-mini");
            }
        });
    }, []);

    const logoutHandler = () => {
        // dispatch()
    }

    return (
        <header className='main-header navbar'>
            <div className='col-search'>
                <form className='searchform'>
                    <div className='input-group'>
                        <input list='search_terms' type='text' placeholder='Search term' className='form-control' />
                        <button type='button' className='btn btn-light-lg'>
                            <i className='far fa-search'></i>
                        </button>
                    </div>
                    <datalist id='search_terms'>
                        <option value="Proucts" />
                        <option value="New Orders" />
                        <option value="Apple iphone" />
                        <option value="Google Android" />
                    </datalist>
                </form>
            </div>

            <div className='col-nav'>
                <button className='btn btn-icon btn-mobile me-auto' data-trigger="#offcanvas_id">
                    <i className='md-28 fas fa-bars'></i>
                </button>
                <ul className='nav'>
                    <li className='nav-item'>
                        <Link to='#' title='Dark mode' className={`nav-link btn-icon `}>
                            <i className='fas fa-moon'></i>
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='#' className="nav-link btn-icon">
                            <i className='fas fa-bell'></i>
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='#' className="nav-link">
                            English
                        </Link>
                    </li>

                    <li className='dropdown nav-item'>
                        <Link to='#' className='dropdown-toggle' data-bs-toggle='dropdown'>
                            <img src='/images/favicon.png' alt='User' className='img-xs rounded-circle' />
                        </Link>
                        <div className='dropdown-menu dropdown-menu-end'>
                            <Link to='/' className='dropdown-item'>
                                My Profile
                            </Link>
                            <Link to='#' className='dropdown-item'>
                                Settings
                            </Link>
                            <Link to='#' className='dropdown-item text-danger' onClick={logoutHandler}>
                                Exit
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
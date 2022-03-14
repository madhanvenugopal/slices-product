import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../helper/Navigationhelper';
import Cartlist from '../layouts/Cartlist';
import Search from '../layouts/Search';
import Mobilemenu from '../layouts/Mobilemenu';
import Menu from './Menu';
import classNames from 'classnames';


class Headertwo extends HeaderComponent {
    render() {
        return (
            <Fragment>
                {/* Cart Sidebar Start */}
                <div className="cart-sidebar-wrapper">
                    <aside className={classNames("cart-sidebar", { "cart-open": this.state.cartmethod })}>
                        <div className="cart-sidebar-header">
                            <h3>Your Cart</h3>
                            <div className="close-btn cart-trigger close-dark" onClick={this.cartToggle}>
                                <span />
                                <span />
                            </div>
                        </div>
                        <Cartlist />
                    </aside>
                    <div className="cart-sidebar-overlay cart-trigger" onClick={this.cartToggle} />
                </div>
                {/* Cart Sidebar End */}
                {/* Search Form Start*/}
                <div className={classNames("search-form-wrapper", { "open": this.state.searchmethod })}>
                    <div className="search-trigger close-btn" onClick={this.searchToggle}>
                        <span />
                        <span />
                    </div>
                    <Search />
                </div>
                {/* Search Form End*/}
                {/* Aside (Mobile Navigation) */}
                <aside className={classNames("main-aside", { "open": this.state.navmethod })}>
                    <Mobilemenu />
                </aside>
                <div className="aside-overlay aside-trigger" onClick={this.toggleNav} />
                {/* Header Start */}
                <header className="main-header header-2">
                    <nav className="navbar">
                        {/* Logo */}
                        <Link className="navbar-brand" to="/"> <img src={process.env.PUBLIC_URL + "/assets/img/m.png"} alt="logo" /> </Link>
                        {/* Menu */}
                        <Menu />
                        <Link  to={{ pathname: "https://www.swiggy.com/restaurants/original-salem-rr-restaurant-nungambakkam-royapettah-chennai-25726" }} target="_blank" className="header-cta">
                            Order On Swiggy 
                        </Link>
                        <div className="header-controls">
                            <ul className="header-controls-inner">
                               <li>
                               <Link className="navbar-brand" to={{ pathname: "https://www.swiggy.com/restaurants/original-salem-rr-restaurant-nungambakkam-royapettah-chennai-25726" }} target="_blank">
                                <img src={process.env.PUBLIC_URL + "/assets/img/Swiggy.png"} alt="logo" />
                                </Link>
                               </li>
                            </ul>
                            
                        </div> 
                    </nav>
                </header>
                {/* Header End */}
            </Fragment>
        );
    }
}

export default Headertwo;
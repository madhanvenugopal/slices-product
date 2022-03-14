import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Pages
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
const Bloglist = React.lazy(() => import("./components/pages/Bloglist"));
const Blogmasonry = React.lazy(() => import("./components/pages/Blogmasonry"));
const Blogfull = React.lazy(() => import("./components/pages/Blogfull"));
const Blogsingle = React.lazy(() => import("./components/pages/Blogsingle"));
const About = React.lazy(() => import("./components/pages/About"));
const Login = React.lazy(() => import("./components/pages/Login"));
const Register = React.lazy(() => import("./components/pages/Register"));
const Checkout = React.lazy(() => import("./components/pages/Checkout"));
const Cart = React.lazy(() => import("./components/pages/Cart"));
const Legal = React.lazy(() => import("./components/pages/Legal"));
const Error = React.lazy(() => import("./components/pages/Error"));
const Menuone = React.lazy(() => import("./components/pages/Menuone"));
const Menuitemone = React.lazy(() => import("./components/pages/Menuitemone"));
const Locations = React.lazy(() => import("./components/pages/Locations"));
const Contact = React.lazy(() => import("./components/pages/Contact"));

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Preloader />
          <Route exact path="/" component={Hometwo} />
          <Route path="/blog-grid" exact component={Bloggrid} />
          <Route path="/blog/tag/:tagId" exact component={props => (<Bloggrid {...props} key={window.location.pathname} />)} />
          <Route path="/blog-list" component={Bloglist} />
          <Route path="/blog-masonry" component={Blogmasonry} />
          <Route path="/blog-full-width" component={Blogfull} />
          <Route path="/blog-single/:id" exact component={props => (<Blogsingle {...props} key={window.location.pathname} />)} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/cart" component={Cart} />
          <Route path="/legal" component={Legal} />
          <Route path="/error" component={Error} />
          <Route path="/menu-v1" component={Menuone} />
          <Route path="/menu-item-v1/:id" exact component={props => (<Menuitemone {...props} key={window.location.pathname} />)} />
          <Route path="/locations" component={Locations} />
          <Route path="/contact" component={Contact} />
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;

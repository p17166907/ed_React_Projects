//! import react fragment from react to enable: <> <>
import { Fragment } from "react";

//! import Outlet and Link
import { Outlet, Link } from "react-router-dom";

//! import Crwn Logo as svg
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import './navigation.styles.scss'

export const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"/>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      {/*The Outlet acts as a placeholder where the child route's content will be rendered. */}
      <Outlet />
    </Fragment>
  );
};

import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { ManageWindow, selectCart } from "../../redux/Cart/Slice";
import { CalcTotalCount } from "../../utils/CalcTotalCount";

const Navbar = () => {
  const { cartItems } = useSelector(selectCart);
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);
  const [navCount, setNavCount] = React.useState(0);

  React.useEffect(() => {
    let count = CalcTotalCount(cartItems);
    setNavCount(count);
  }, [cartItems]);

  return (
    <>
      {/* mobile menu icon (open, close) */}
      <i onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? (
          <AiOutlineClose className={styles.navIcon} />
        ) : (
          <FaBars className={styles.navIcon} />
        )}
      </i>

      <nav className={styles.root}>
        <span>
          <Link to="/" className={`${styles.link}, ${styles.logo}`}>
            MARIMELKON
          </Link>
        </span>

        <ul className={isSidebarOpen ? "" : `${styles.hide}`}>
          <li>
            <Link className={styles.link} to="/allcakes">
              Все десерты
            </Link>
          </li>

          <li
            onMouseEnter={() => setIsSubmenuOpen(true)}
            onMouseLeave={() => setIsSubmenuOpen(false)}
          >
            <Link className={`${styles.link} ${styles.navItem}`} to="/cakes">
              Торты <AiFillCaretDown className="services-icon" />
            </Link>
            {isSubmenuOpen && (
              <ul className={styles.popup}>
                <li>
                  <Link
                    className={`${styles.link} ${styles.popuplink}`}
                    to="/cakes"
                  >
                    Tорты от 5 кг
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${styles.link} ${styles.popuplink}`}
                    to="/bento"
                  >
                    Бенто Торты
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              className={`${styles.link} ${styles.navItem}`}
              to="/makaroons"
            >
              Макаронс
            </Link>
          </li>
          <li>
            <Link className={`${styles.link} ${styles.navItem}`} to="/desserts">
              Дессерты
            </Link>
          </li>
        </ul>

        <button
          className={styles.cart}
          onClick={() => dispatch(ManageWindow(true))}
        >
          <BsCart className={styles.cartIcon} />
          {navCount > 0 && <p>{navCount}</p>}
        </button>
      </nav>
    </>
  );
};

export default Navbar;

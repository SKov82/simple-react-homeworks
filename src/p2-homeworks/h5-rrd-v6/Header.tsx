import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Header.module.css';

function Header() {
    return (
        <div className={css.nav}>
            <div className={css.burger}>Меню</div>

            <div className={css.menu}>
                <NavLink to={'/pre-junior'}
                         className={css.link}>
                    PreJunior
                </NavLink>

                <NavLink to={'/junior'}
                         className={css.link}>
                    Junior
                </NavLink>

                <NavLink to={'/junior_plus'}
                         className={css.link}>
                    Junior+
                </NavLink>
            </div>
        </div>
    )
}

export default Header

import React, { FC } from 'react';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => (
  <header className={styles.header}>
    <nav className={`${styles.menu} p-4`}>
      <div className={styles.menu_part_left}>
        {/* Ссылка на Конструктор */}
        <NavLink
          to='/'
          className={({ isActive }) =>
            clsx(styles.link, isActive && styles.link_active)
          }
        >
          <BurgerIcon type='primary' />
          <p className='text text_type_main-default ml-2 mr-10'>Конструктор</p>
        </NavLink>

        {/* Ссылка на Ленту заказов */}
        <NavLink
          to='/feed'
          className={({ isActive }) =>
            clsx(styles.link, isActive && styles.link_active)
          }
        >
          <ListIcon type='primary' />
          <p className='text text_type_main-default ml-2'>Лента заказов</p>
        </NavLink>
      </div>

      {/* Логотип */}
      <div className={styles.logo}>
        <NavLink to='/'>
          <Logo className='' />
        </NavLink>
      </div>

      {/* Ссылка на Личный кабинет */}
      <div className={styles.link_position_last}>
        <NavLink
          to='/profile'
          className={({ isActive }) =>
            clsx(styles.link, isActive && styles.link_active)
          }
        >
          <ProfileIcon type='primary' />
          <p className='text text_type_main-default ml-2'>
            {userName || 'Личный кабинет'}
          </p>
        </NavLink>
      </div>
    </nav>
  </header>
);

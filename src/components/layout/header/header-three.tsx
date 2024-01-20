import React, { useRef } from 'react';
import SearchIcon from '@components/icons/search-icon';
import { siteSettings } from '@settings/site-settings';
import HeaderMenu from '@components/layout/header/header-menu';
import Logo from '@components/ui/logo';
import { useUI } from '@contexts/ui.context';
import { ROUTES } from '@utils/routes';
import { addActiveScroll } from '@utils/add-active-scroll';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '@components/ui/language-switcher';
import WishButton from '@components/ui/wish-button';
import { UserLineIcon } from '@components/icons/UserLineIcon';
import Link from '@components/ui/link';
import { TbLocationFilled } from "react-icons/tb"
import { IoIosArrowDown } from "react-icons/io"
import { SlLocationPin } from "react-icons/sl"

import CategoryMenu from '@components/ui/category-menu';
const AuthMenu = dynamic(() => import('@components/layout/header/auth-menu'), {
  ssr: false,
});
const CartButton = dynamic(() => import('@components/cart/cart-button'), {
  ssr: false,
});

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;
export default function Header() {
  const { openSidebar, setDrawerView, openModal, setModalView, isAuthorized } =
    useUI();
  const { t } = useTranslation();
  const siteHeaderRef = useRef() as DivElementRef;
  addActiveScroll(siteHeaderRef);
  function handleLogin() {
    setModalView('LOGIN_VIEW');
    return openModal();
  }
  function handleMobileMenu() {
    setDrawerView('MOBILE_MENU');
    return openSidebar();
  }
  return (
    <header
      id="siteHeader"
      ref={siteHeaderRef}
      className="relative z-20 w-full h-16 sm:h-20 lg:h-28 headerThree"
    >
      <div className="fixed z-20 w-full h-14 px-4 text-gray-700 transition duration-200 ease-in-out bg-white innerSticky body-font lg:h-28 md:px-8 lg:px-14 2xl:px-32">
        <div className="flex items-center justify-between mx-auto h-14 lg:h-16 xl:h-16 w-full relative before:absolute before:w-screen before:h-px before:bg-[#F1F1F1] before:bottom-0">
          <button
            aria-label="Menu"
            className="flex-col items-center justify-center flex-shrink-0 hidden h-full px-5 outline-none menuBtn md:flex lg:hidden 2xl:px-7 focus:outline-none"
            onClick={handleMobileMenu}
          >
            <span className="menuIcon">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </span>
          </button>
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden transition-all duration-100 ease-in-out lg:flex ml-4 md:ml-10 lg:ml-8 xl:ml-14 headerTopMenu">
              <div className='flex items-center justify-center gap-3'>
                <TbLocationFilled />
                <span>Deliver to</span>
                <IoIosArrowDown />
              </div>
            </div>
          </div>

          <div className="relative hidden w-2/6 mx-auto lg:block">
            {/* search bar */}
            <form
              className="relative w-full overflow-hidden rounded-md bg-borderBottom"
              noValidate
              role="search"
            >
              <label htmlFor="search" className="flex items-center">
                <span className="absolute top-0 left-0 flex items-center justify-center flex-shrink-0 w-12 h-full cursor-pointer md:w-14 focus:outline-none">
                  <SearchIcon
                    color="text-heading"
                    className="w-[18px] h-[18px]"
                  />
                </span>
                <input
                  id="search"
                  className="w-full text-sm placeholder-gray-400 bg-transparent rounded-md outline-none focus:border-2 focus:border-gray-600 ltr:pr-4 rtl:pl-4 ltr:pl-14 rtl:pr-14 h-10 text-heading lg:text-base"
                  placeholder={'Search Anything...'}
                  aria-label="Search"
                  autoComplete="off"
                />
              </label>
            </form>
          </div>

          {/* <div className="flex flex-shrink-0 transition-all duration-200 ease-in-out transform languageSwitcher lg:hidden">
            <LanguageSwitcher />
          </div> */}
          <div className="flex items-center justify-end flex-shrink-0">
            <div className="flex items-center transition-all wishlistShopping gap-x-7 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10 ltr:pl-3 rtl:pr-3">
              <div className="flex md:gap-x-2 align-center">
                <SlLocationPin size={20} />
                <span className="hidden text-sm font-semibold transition-all duration-100 ease-in-out cursor-pointer lg:font-normal lg:block text-heading">
                  Track Order
                </span>
              </div>
              <div className="flex md:gap-x-4 align-center ">
                <WishButton />
                <span className="hidden text-sm font-semibold transition-all duration-100 ease-in-out cursor-pointer lg:font-normal lg:block text-heading">
                  {t('menu:menu-wishlist')}
                </span>
              </div>
              <div className="hidden lg:flex md:gap-x-4 align-center">
                <CartButton />
                <span className="hidden text-sm font-semibold transition-all duration-100 ease-in-out cursor-pointer lg:font-normal lg:block text-heading">
                  {t('menu:menu-shopping')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="items-center hidden lg:flex lg:h-12 headerBottom mx-auto">
          <div className="flex items-center">
            <CategoryMenu
              className="hidden lg:block"
              categoryMenu={site_header?.categoryMenu}
            />
            <HeaderMenu
              data={site_header.menu}
              className="hidden lg:flex ltr:pl-3.5 rtl:pr-3.5 ltr:xl:pl-5 rtl:xl:pr-5 "
            />
          </div>

          <div className="flex items-center flex-shrink-0 ltr:ml-auto rtl:mr-auto gap-x-7">
            <AuthMenu
              isAuthorized={isAuthorized}
              href={ROUTES.ACCOUNT}
              className="flex-shrink-0 hidden text-sm lg:flex focus:outline-none text-heading gap-x-3"
              btnProps={{
                children: (
                  <>
                    <UserLineIcon className="w-4 xl:w-[17px] h-auto text-black" />
                    {t('text-login')}
                  </>
                ),
                onClick: handleLogin,
              }}
            />
            {/* <LanguageSwitcher /> */}
          </div>
        </div>
      </div>
    </header>
  );
}

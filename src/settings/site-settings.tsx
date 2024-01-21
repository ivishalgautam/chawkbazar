import { ILFlag } from '@components/icons/ILFlag';
import { SAFlag } from '@components/icons/SAFlag';
import { CNFlag } from '@components/icons/CNFlag';
import { USFlag } from '@components/icons/USFlag';
import { DEFlag } from '@components/icons/DEFlag';
import { ESFlag } from '@components/icons/ESFlag';
import Nike from 'public/assets/images/brands/megamenu/nike.png';
import Dior from 'public/assets/images/brands/megamenu/dior.png';
import Gucci from 'public/assets/images/brands/megamenu/gucci.png';
import Gucci1 from 'public/assets/images/brands/megamenu/gucci1.png';
import Puma from 'public/assets/images/brands/megamenu/puma.png';
import Levis from 'public/assets/images/brands/megamenu/levis.png';
import Banner1 from 'public/assets/images/banner/megamenu/banner-1.png';
import Banner2 from 'public/assets/images/banner/megamenu/banner-2.png';

import { ThunderIcon } from '@components/icons/thunder-icon';
import { WomenIcon } from '@components/icons/women-icon';
import { MenIcon } from '@components/icons/men-icon';
import { WatchIcon } from '@components/icons/watch-icon';
import { WalletIcon } from '@components/icons/wallet-icon';
import { BagIcon } from '@components/icons/bag-icon';
import { JewelryIcon } from '@components/icons/jewelry-icon';
import { SunglassIcon } from '@components/icons/sunglass-icon';
import { SneakerIcon } from '@components/icons/sneaker-icon';

// react icons
import { GiSchoolBag, GiClothes } from "react-icons/gi"
import { TbBottle } from "react-icons/tb"
import { AiOutlineBook } from "react-icons/ai"
import { PiTelevisionSimple, PiTShirt } from "react-icons/pi"
import { CgSmartHomeRefrigerator } from "react-icons/cg"
import { LuPencil } from "react-icons/lu"
import { GoTrophy } from "react-icons/go"

const iconSize = 20

export const siteSettings = {
  name: 'BuyTohfa',
  description: 'Fastest E-commerce template built with React, NextJS, TypeScript, @tanstack/react-query and Tailwind CSS.',
  author: {
    name: 'REDQ',
    websiteUrl: 'https://redq.io',
    address: '',
  },
  logo: {
    url: '/assets/images/logo.webp',
    alt: 'BuyTohfa',
    href: '/contemporary',
    width: 95,
    height: 40,
  },
  defaultLanguage: 'en',
  currencyCode: 'INR',
  site_header: {
    menu: [
      {
        id: 3,
        path: '/search?q=apparel',
        label: 'Apparel',
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=gadgets',
                label: 'T-Shirts',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Round-Neck-T-Shirts',
                    label: 'Round Neck T-Shirts',
                  },
                  {
                    id: 2,
                    path: '/search?q=Polo-Neck-T-Shirts',
                    label: 'Polo Neck T-Shirts',
                  },
                  {
                    id: 3,
                    path: '/search?q=Full-Sleeve-T-Shirts',
                    label: 'Full Sleeve T-Shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=Women-Specific-T-Shirts',
                    label: 'Women Specific T-Shirts',
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'Shop Apparel By Brand',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Adidas',
                    label: 'Adidas',
                  },
                  {
                    id: 2,
                    path: '/search?q=Blackberry',
                    label: 'Blackberry',
                  },
                  {
                    id: 3,
                    path: '/search?q=Flying-Machine',
                    label: 'Flying Machine',
                  },
                  {
                    id: 4,
                    path: '/search?q=Marks-and-Spencer',
                    label: 'Marks & Spencer',
                  },
                  {
                    id: 5,
                    path: '/search?q=Monte-Carlo',
                    label: 'Monte Carlo',
                  },
                  {
                    id: 6,
                    path: '/search?q=Rare-Rabbit',
                    label: 'Rare Rabbit',
                  },
                  {
                    id: 7,
                    path: '/search?q=US-Polo',
                    label: 'US Polo',
                  },
                  {
                    id: 8,
                    path: '/search?q=United-Colors-Of-Benetton',
                    label: 'United Colors Of Benetton',
                  },
                  {
                    id: 9,
                    path: '/search?q=Vero-Moda',
                    label: 'Vero Moda',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        path: '/search?q=Gadgets',
        label: 'Gadgets',
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=Headphones-and-Ear-Phones',
                label: 'Headphones & Ear Phones',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Headphones',
                    label: 'Headphones',
                  },
                  {
                    id: 2,
                    path: '/search?q=Earphones',
                    label: 'Earphones',
                  },
                  {
                    id: 3,
                    path: '/search?q=Neckbands',
                    label: 'Neckbands',
                  },
                  {
                    id: 4,
                    path: '/search?q=Earpods',
                    label: 'Earpods',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=Fitness-Devices',
                label: 'Fitness Devices',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Fitness-Tracker',
                    label: 'Fitness Tracker',
                  },
                  {
                    id: 2,
                    path: '/search?q=Smart-Watches',
                    label: 'Smart Watches',
                  },
                ]
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=Speakers',
                label: 'Speakers',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Bluetooth-Speakers',
                    label: 'Bluetooth Speakers',
                  },
                  {
                    id: 2,
                    path: '/search?q=Smart-Speakers',
                    label: 'Smart Speakers',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=Accessories',
                label: 'Accessories',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Laptop',
                    label: 'Laptop',
                  },
                  {
                    id: 2,
                    path: '/search?q=Mobile',
                    label: 'Mobile',
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=Power-Banks',
                label: 'Power Banks',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Power-Bank',
                    label: 'Power Bank',
                  },
                  {
                    id: 2,
                    path: '/search?q=Diaries-With-Power-Bank',
                    label: 'Diaries With Power Bank',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=USB-and-Pen-Drives',
                label: 'USB & Pen Drives',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Pen-Drives',
                    label: 'Pen Drives',
                  },
                  {
                    id: 2,
                    path: '/search?q=Multi-USB-Ports',
                    label: 'Multi USB Ports',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        path: '/search?q=office',
        label: 'Office',
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=Diaries-and-Notebooks',
                label: 'Diaries & Notebooks',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Diaries',
                    label: 'Diaries',
                  },
                  {
                    id: 2,
                    path: '/search?q=Notebooks',
                    label: 'Notebooks',
                  },
                  {
                    id: 3,
                    path: '/search?q=Planners',
                    label: 'Planners',
                  },
                  {
                    id: 4,
                    path: '/search?q=With-USB-Powerbank',
                    label: 'With USB / Powerbank',
                  }
                ],
              },
              {
                id: 2,
                path: '/search?q=Writing-Instruments',
                label: 'Writing Instruments',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Promotional-Pens',
                    label: 'Promotional Pens',
                  },
                  {
                    id: 2,
                    path: '/search?q=Premium-Pens',
                    label: 'Premium Pens',
                  },
                  {
                    id: 3,
                    path: '/search?q=Daily-Office-Use-Pens',
                    label: 'Daily Office Use Pens',
                  },
                  {
                    id: 4,
                    path: '/search?q=Branded-Pens',
                    label: 'Branded Pens',
                  }
                ],
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=Desk-Organisers',
                label: 'Desk Organisers',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Pen-Holders',
                    label: 'Pen Holders',
                  },
                  {
                    id: 2,
                    path: '/search?q=Desktop-Organisers',
                    label: 'Desktop Organisers',
                  },
                  {
                    id: 3,
                    path: '/search?q=Table-Calendar',
                    label: 'Table Calendar',
                  },
                  {
                    id: 4,
                    path: '/search?q=Desk-Clocks',
                    label: 'Desk Clocks',
                  },
                  {
                    id: 5,
                    path: '/search?q=Smart-Gadgets',
                    label: 'Smart Gadgets',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=Work-From-Home',
                label: 'Work From Home',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Laptop-Tables',
                    label: 'Laptop Tables',
                  },
                  {
                    id: 2,
                    path: '/search?q=Mouse',
                    label: 'Mouse',
                  },
                  {
                    id: 3,
                    path: '/search?q=UPS-For-WiFi',
                    label: 'UPS For Wi-Fi',
                  },
                  {
                    id: 4,
                    path: '/search?q=Headphones',
                    label: 'Headphones',
                  }
                ],
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=Stationery',
                label: 'Stationery',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Certificates',
                    label: 'Certificates',
                  },
                  {
                    id: 2,
                    path: '/search?q=Business-Cards',
                    label: 'Business Cards',
                  },
                  {
                    id: 3,
                    path: '/search?q=Lanyards',
                    label: 'Lanyards',
                  },
                  {
                    id: 4,
                    path: '/search?q=Id-Cards',
                    label: 'Id Cards',
                  },
                  {
                    id: 4,
                    path: '/search?q=Laptop-Stickers',
                    label: 'Laptop Stickers',
                  },
                ],
              }
            ],
          },
          {
            id: 4,
            columnItems: [
              {
                id: 1,
                path: '/search?q=Gadgets-and-Accessories',
                label: 'Gadgets & Accessories',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Mouse-Pads',
                    label: 'Mouse Pads',
                  },
                  {
                    id: 2,
                    path: '/search?q=Mouse',
                    label: 'Mouse',
                  },
                  {
                    id: 3,
                    path: '/search?q=USB-Charging-Pen-Holders',
                    label: 'USB Charging Pen Holders',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=Others',
                label: 'Others',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Folders',
                    label: 'Folders',
                  },
                  {
                    id: 2,
                    path: '/search?q=Photo Frames',
                    label: 'Photo Frames',
                  },
                  {
                    id: 3,
                    path: '/search?q=Unique Products',
                    label: 'Unique Products',
                  },
                  {
                    id: 4,
                    path: '/search?q=Spiritual & Wellness',
                    label: 'Spiritual & Wellness',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 6,
        path: '/search?q=Shop-By-Brands',
        label: 'Shop By Brands',
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=Brands-with-A',
                label: 'Brands Starting From # A',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Adidas',
                    label: 'Adidas',
                  },
                  {
                    id: 2,
                    path: '/search?q=Ambrane',
                    label: 'Ambrane',
                  },
                  {
                    id: 3,
                    path: '/search?q=American-Tourister',
                    label: 'American Tourister',
                  },
                  {
                    id: 4,
                    path: '/search?q=Aristocrat',
                    label: 'Aristocrat',
                  },
                  {
                    id: 5,
                    path: '/search?q=Arrow',
                    label: 'Arrow',
                  },
                  {
                    id: 6,
                    path: '/search?q=Artiart',
                    label: 'Artiart',
                  },
                  {
                    id: 7,
                    path: '/search?q=Artis',
                    label: 'Artis',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=Brands-From-B-C',
                label: 'Brands From # B - C',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=BE-Home',
                    label: 'BE Home',
                  },
                  {
                    id: 2,
                    path: '/search?q=Blackberry',
                    label: 'Blackberry',
                  },
                  {
                    id: 3,
                    path: '/search?q=Boat',
                    label: 'Boat',
                  },
                  {
                    id: 4,
                    path: '/search?q=Borosil',
                    label: 'Borosil',
                  },
                  {
                    id: 5,
                    path: '/search?q=Coconut',
                    label: 'Coconut',
                  },
                  {
                    id: 6,
                    path: '/search?q=Cookieman',
                    label: 'Cookieman',
                  },
                  {
                    id: 7,
                    path: '/search?q=Cross',
                    label: 'Cross',
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=Brands-From-D-L',
                label: 'Brands From # D - L',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Pen-Holders',
                    label: 'Ferroro Rocher',
                  },
                  {
                    id: 2,
                    path: '/search?q=Flying-Machine',
                    label: 'Flying Machine',
                  },
                  {
                    id: 3,
                    path: '/search?q=Goqii',
                    label: 'Goqii',
                  },
                  {
                    id: 4,
                    path: '/search?q=Havells',
                    label: 'Havells',
                  },
                  {
                    id: 5,
                    path: '/search?q=Jack & Jones',
                    label: 'Jack & Jones',
                  },
                  {
                    id: 6,
                    path: '/search?q=JBL-Harman',
                    label: 'JBL / Harman',
                  },
                  {
                    id: 7,
                    path: '/search?q=ITN',
                    label: 'ITN',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=Brands-From-M-O',
                label: 'Brands From # M - O',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Marks-and-Spencer',
                    label: 'Marks & Spencer',
                  },
                  {
                    id: 2,
                    path: '/search?q=Milton',
                    label: 'Milton',
                  },
                  {
                    id: 3,
                    path: '/search?q=Monte-Carlo',
                    label: 'Monte Carlo',
                  },
                  {
                    id: 4,
                    path: '/search?q=Morphy-Richard',
                    label: 'Morphy Richard',
                  }
                ],
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=Brands-From-P-R',
                label: 'Brands From # P - R',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Parker',
                    label: 'Parker',
                  },
                  {
                    id: 2,
                    path: '/search?q=Pebble',
                    label: 'Pebble',
                  },
                  {
                    id: 3,
                    path: '/search?q=Pierre-Cardin',
                    label: 'Pierre Cardin',
                  },
                  {
                    id: 4,
                    path: '/search?q=Portronics',
                    label: 'Portronics',
                  },
                  {
                    id: 5,
                    path: '/search?q=Puma',
                    label: 'Puma',
                  },
                  {
                    id: 6,
                    path: '/search?q=Rare-Rabbit',
                    label: 'Rare Rabbit',
                  },
                  {
                    id: 7,
                    path: '/search?q=Redmi',
                    label: 'Redmi',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=Brands-Starting-From-S',
                label: 'Brands Starting From # S',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Sandisk',
                    label: 'Sandisk',
                  },
                  {
                    id: 2,
                    path: '/search?q=Sheaffer',
                    label: 'Sheaffer',
                  },
                  {
                    id: 3,
                    path: '/search?q=Signoraware',
                    label: 'Signoraware',
                  },
                  {
                    id: 4,
                    path: '/search?q=SKY-Bags-VIP-Bags',
                    label: 'SKY Bags / VIP Bags',
                  },
                  {
                    id: 5,
                    path: '/search?q=Smoor-Chocolates',
                    label: 'Smoor Chocolates',
                  },
                  {
                    id: 6,
                    path: '/search?q=Submarine-Pens',
                    label: 'Submarine Pens',
                  },
                  {
                    id: 7,
                    path: '/search?q=Swiss-Military',
                    label: 'Swiss Military',
                  },
                  {
                    id: 8,
                    path: '/search?q=Syska',
                    label: 'Syska',
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            columnItems: [
              {
                id: 1,
                path: '/search?q=Brands-From-T-U',
                label: 'Brands From # T - U',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Tucano',
                    label: 'Tucano',
                  },
                  {
                    id: 2,
                    path: '/search?q=The-Backbenchers',
                    label: 'The Backbenchers',
                  },
                  {
                    id: 3,
                    path: '/search?q=Trovo',
                    label: 'Trovo',
                  },
                  {
                    id: 4,
                    path: '/search?q=Tupperware',
                    label: 'Tupperware',
                  },
                  {
                    id: 5,
                    path: '/search?q=US-Polo',
                    label: 'US Polo',
                  },
                  {
                    id: 6,
                    path: '/search?q=UCB',
                    label: 'UCB',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=Brands-From-V-Z',
                label: 'Brands From # V - Z',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Vero-Moda',
                    label: 'Vero Moda',
                  },
                  {
                    id: 2,
                    path: '/search?q=Welspun',
                    label: 'Welspun',
                  },
                  {
                    id: 3,
                    path: '/search?q=Wild-Craft',
                    label: 'Wild Craft',
                  },
                  {
                    id: 4,
                    path: '/search?q=Xech',
                    label: 'Xech',
                  },
                  {
                    id: 5,
                    path: '/search?q=Zebronics',
                    label: 'Zebronics',
                  },
                  {
                    id: 6,
                    path: '/search?q=Zook',
                    label: 'Zook',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 7,
        path: '/search?q=Bags-and-More',
        label: 'Bags & More',
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=Laptop Bags',
                label: 'Laptop Bags',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Backpacks',
                    label: 'Backpacks',
                  },
                  {
                    id: 2,
                    path: '/search?q=Shoulder Laptop Bags',
                    label: 'Shoulder Laptop Bags',
                  },
                  {
                    id: 3,
                    path: '/search?q=Laptop Sleeves',
                    label: 'Laptop Sleeves',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=Travel Bags',
                label: 'Travel Bags',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Rucksack Bags',
                    label: 'Rucksack Bags',
                  },
                  {
                    id: 2,
                    path: '/search?q=Travel Hand Bags',
                    label: 'Travel Hand Bags',
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=Strolleys',
                label: 'Strolleys',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Strolley Suitcases',
                    label: 'Strolley Suitcases',
                  },
                  {
                    id: 2,
                    path: '/search?q=Strolley Bags',
                    label: 'Strolley Bags',
                  },
                  {
                    id: 3,
                    path: '/search?q=Overnighters',
                    label: 'Overnighters',
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=Others',
                label: 'Others',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=Duffle & Gym Bags',
                    label: 'Duffle & Gym Bags',
                  },
                  {
                    id: 2,
                    path: '/search?q=Cross Body Bags',
                    label: 'Cross Body Bags',
                  },
                  {
                    id: 3,
                    path: '/search?q=Jute & Canvas Bags',
                    label: 'Jute & Canvas Bags',
                  },
                  {
                    id: 4,
                    path: '/search?q=Tote Bags',
                    label: 'Tote Bags',
                  },
                  {
                    id: 5,
                    path: '/search?q=Paper & Promotional Bags',
                    label: 'Paper & Promotional Bags',
                  },
                  {
                    id: 6,
                    path: '/search?q=Delivery Bags',
                    label: 'Delivery Bags',
                  },
                ],
              },
            ],
          },

        ],
      },
    ],
    mobileMenu: [
      {
        id: 1,
        path: '/',
        label: 'menu-demos',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'menu-modern',
          },
          {
            id: 2,
            path: '/standard',
            label: 'menu-standard',
          },
          {
            id: 3,
            path: '/minimal',
            label: 'menu-minimal',
          },
          {
            id: 4,
            path: '/vintage',
            label: 'menu-vintage',
          },
          {
            id: 5,
            path: '/classic',
            label: 'menu-classic',
          },
          {
            id: 6,
            path: '/trendy',
            label: 'menu-trendy',
          },
          {
            id: 7,
            path: '/elegant',
            label: 'menu-elegant',
          },
          {
            id: 8,
            path: '/refined',
            label: 'menu-refined',
          },
          {
            id: 9,
            path: '/contemporary',
            label: 'menu-contemporary',
          },
          {
            id: 10,
            path: '/ancient',
            label: 'menu-ancient',
          },
        ],
      },
      {
        id: 2,
        path: '/search?q=men-wear',
        label: 'menu-men-wear',
        subMenu: [
          {
            id: 1,
            path: '/search?q=top-wear',
            label: 'menu-top-wear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=t-shit-shirtrt',
                label: 'menu-t-shirt',
              },
              {
                id: 2,
                path: '/search?q=casual-shirts',
                label: 'menu-casual-shirts',
              },
              {
                id: 3,
                path: '/search?q=formal-shirts',
                label: 'menu-formal-shirts',
              },
              {
                id: 4,
                path: '/search?q=blazwers-coats',
                label: 'menu-blazwers-coats',
              },
              {
                id: 5,
                path: '/search?q=suits',
                label: 'menu-suits',
              },
              {
                id: 6,
                path: '/search?q=jackets',
                label: 'menu-jackets',
              },
            ],
          },
          {
            id: 2,
            path: '/search?q=belt-scarves',
            label: 'menu-belt-scarves',
          },
          {
            id: 3,
            path: '/search?q=watches-wearables',
            label: 'menu-watches-wearables',
          },
          {
            id: 4,
            path: '/search?q=western-wear',
            label: 'menu-western-wear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=dresses',
                label: 'menu-dresses',
              },
              {
                id: 2,
                path: '/search?q=jumpsuits',
                label: 'menu-jumpsuits',
              },
              {
                id: 3,
                path: '/search?q=tops-t-shirt',
                label: 'menu-tops-shirts',
              },
              {
                id: 4,
                path: '/search?q=shorts-skirts',
                label: 'menu-shorts-skirts',
              },
              {
                id: 5,
                path: '/search?q=shurgs',
                label: 'menu-shurgs',
              },
              {
                id: 6,
                path: '/search?q=blazers',
                label: 'menu-blazers',
              },
            ],
          },
          {
            id: 5,
            path: '/search?q=plus-size',
            label: 'menu-plus-size',
          },
          {
            id: 6,
            path: '/search?q=sunglasses-frames',
            label: 'menu-sunglasses-frames',
          },
          {
            id: 7,
            path: '/search?q=footwear',
            label: 'menu-footwear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=flats',
                label: 'menu-flats',
              },
              {
                id: 2,
                path: '/search?q=casual-shoes',
                label: 'menu-casual-shoes',
              },
              {
                id: 3,
                path: '/search?q=heels',
                label: 'menu-heels',
              },
              {
                id: 4,
                path: '/search?q=boots',
                label: 'menu-boots',
              },
            ],
          },
          {
            id: 8,
            path: '/search?q=sports-active-wear',
            label: 'menu-sports-active-wear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=clothing',
                label: 'menu-clothing',
              },
              {
                id: 2,
                path: '/search?q=footwear',
                label: 'menu-footwear',
              },
              {
                id: 3,
                path: '/search?q=sports-accessories',
                label: 'menu-sports-accessories',
              },
            ],
          },
          {
            id: 9,
            path: '/search?q=lingerie-sleepwear',
            label: 'menu-lingerie-sleepwear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=bra',
                label: 'menu-bra',
              },
              {
                id: 2,
                path: '/search?q=briefs',
                label: 'menu-briefs',
              },
              {
                id: 3,
                path: '/search?q=sleepwear',
                label: 'menu-sleepwear',
              },
            ],
          },
          {
            id: 10,
            path: '/search?q=belt-scarves',
            label: 'menu-belt-scarves',
            subMenu: [
              {
                id: 1,
                path: '/search?q=makeup',
                label: 'menu-makeup',
              },
              {
                id: 2,
                path: '/search?q=skincare',
                label: 'menu-skincare',
              },
              {
                id: 3,
                path: '/search?q=premium-beauty',
                label: 'menu-premium-beauty',
              },
              {
                id: 4,
                path: '/search?q=lipsticks',
                label: 'menu-lipsticks',
              },
            ],
          },
          {
            id: 11,
            path: '/search?q=gadgets',
            label: 'menu-gadgets',
            subMenu: [
              {
                id: 1,
                path: '/search?q=smart-wearables',
                label: 'menu-smart-wearables',
              },
              {
                id: 2,
                path: '/search?q=headphones',
                label: 'menu-headphones',
              },
            ],
          },
          {
            id: 12,
            path: '/search?q=jewellers',
            label: 'menu-jewellers',
            subMenu: [
              {
                id: 1,
                path: '/search?q=fashion-jewellers',
                label: 'menu-fashion-jewellers',
              },
              {
                id: 2,
                path: '/search?q=fine-jewellers',
                label: 'menu-fine-jewellers',
              },
            ],
          },
          {
            id: 13,
            path: '/search?q=backpacks',
            label: 'menu-backpacks',
          },
          {
            id: 14,
            path: '/search?q=handbags-wallets',
            label: 'menu-handbags-wallets',
          },
        ],
      },
      {
        id: 3,
        path: '/search?q=women-wear',
        label: 'menu-women-wear',
      },
      {
        id: 4,
        path: '/search',
        label: 'menu-search',
      },
      {
        id: 5,
        path: '/shops',
        label: 'menu-shops',
      },
      {
        id: 6,
        path: '/',
        label: 'menu-pages',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'menu-users',
            subMenu: [
              {
                id: 1,
                path: '/my-account',
                label: 'menu-my-account',
              },
              {
                id: 2,
                path: '/signin',
                label: 'menu-sign-in',
              },
              {
                id: 3,
                path: '/signup',
                label: 'menu-sign-up',
              },
              {
                id: 4,
                path: '/forget-password',
                label: 'menu-forget-password',
              },
            ],
          },
          {
            id: 2,
            path: '/faq',
            label: 'menu-faq',
          },
          {
            id: 3,
            path: '/privacy',
            label: 'menu-privacy-policy',
          },
          {
            id: 4,
            path: '/terms',
            label: 'menu-terms-condition',
          },
          {
            id: 5,
            path: '/contact-us',
            label: 'menu-contact-us',
          },
          {
            id: 6,
            path: '/checkout',
            label: 'menu-checkout',
          },
          {
            id: 7,
            path: '/collections/mens-collection',
            label: 'menu-collection',
          },
          {
            id: 8,
            path: '/category/man',
            label: 'menu-category',
          },
          {
            id: 9,
            path: '/order',
            label: 'menu-order',
          },
          {
            id: 10,
            path: '/404',
            label: 'menu-404',
          },
        ],
      },
    ],
    languageMenu: [
      {
        id: 'ar',
        name: 'عربى - AR',
        value: 'ar',
        icon: <SAFlag width="20px" height="15px" />,
      },
      {
        id: 'zh',
        name: '中国人 - ZH',
        value: 'zh',
        icon: <CNFlag width="20px" height="15px" />,
      },
      {
        id: 'en',
        name: 'English - EN',
        value: 'en',
        icon: <USFlag width="20px" height="15px" />,
      },
      {
        id: 'de',
        name: 'Deutsch - DE',
        value: 'de',
        icon: <DEFlag width="20px" height="15px" />,
      },
      {
        id: 'he',
        name: 'rעברית - HE',
        value: 'he',
        icon: <ILFlag width="20px" height="15px" />,
      },
      {
        id: 'es',
        name: 'Español - ES',
        value: 'es',
        icon: <ESFlag width="20px" height="15px" />,
      },
    ],
    categoryMenu: [
      {
        id: 1,
        path: '/',
        label: 'Bags',
        icon: <GiSchoolBag size={iconSize} />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=backpacks',
                    label: 'Backpacks',
                  },
                  {
                    id: 2,
                    path: '/search?q=carry-bags',
                    label: 'Carry bags',
                  },
                  {
                    id: 3,
                    path: '/search?q=jute-bags',
                    label: 'Jute bags',
                  },
                  {
                    id: 4,
                    path: '/search?q=trolley-bags',
                    label: 'Trolley bags',
                  },
                  {
                    id: 5,
                    path: '/search?q=sleeves',
                    label: 'Sleeves',
                  },
                  {
                    id: 6,
                    path: '/search?q=suit-case',
                    label: 'Suit case',
                  },
                  {
                    id: 7,
                    path: '/search?q=hand-bags',
                    label: 'Hand bag',
                  },
                  {
                    id: 8,
                    path: '/search?q=ticket-folders',
                    label: 'Ticket folder',
                  },
                  {
                    id: 9,
                    path: '/search?q=folder',
                    label: 'Folder',
                  },
                ],
              },
              // {
              //   id: 2,
              //   path: '/search?q=belt-scarves',
              //   label: 'menu-belt-scarves',
              // },
              // {
              //   id: 3,
              //   path: '/search?q=watches-wearables',
              //   label: 'menu-watches-wearables',
              // },
            ],
          },
          // {
          //   id: 2,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=western-wear',
          //       label: 'menu-western-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=dresses',
          //           label: 'menu-dresses',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=jumpsuits',
          //           label: 'menu-jumpsuits',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=tops-t-shirt',
          //           label: 'menu-tops-shirts',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=shorts-skirts',
          //           label: 'menu-shorts-skirts',
          //         },
          //         {
          //           id: 5,
          //           path: '/search?q=shurgs',
          //           label: 'menu-shurgs',
          //         },
          //         {
          //           id: 6,
          //           path: '/search?q=blazers',
          //           label: 'menu-blazers',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=plus-size',
          //       label: 'menu-plus-size',
          //     },
          //     {
          //       id: 3,
          //       path: '/search?q=sunglasses-frames',
          //       label: 'menu-sunglasses-frames',
          //     },
          //   ],
          // },
          // {
          //   id: 3,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=footwear',
          //       label: 'menu-footwear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=flats',
          //           label: 'menu-flats',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=casual-shoes',
          //           label: 'menu-casual-shoes',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=heels',
          //           label: 'menu-heels',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=boots',
          //           label: 'menu-boots',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=sports-active-wear',
          //       label: 'menu-sports-active-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=clothing',
          //           label: 'menu-clothing',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=footwear',
          //           label: 'menu-footwear',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=sports-accessories',
          //           label: 'menu-sports-accessories',
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 2,
        path: '/',
        label: 'Bottles',
        icon: <TbBottle size={iconSize} />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=stainless-steel-bottle',
                    label: 'Stainless Steel Bottle',
                  },
                  {
                    id: 2,
                    path: '/search?q=copper-bottle',
                    label: 'Copper Bottle',
                  },
                  {
                    id: 3,
                    path: '/search?q=zipper',
                    label: 'Zipper',
                  },
                  {
                    id: 4,
                    path: '/search?q=nano-mugs',
                    label: 'Nano Mugs',
                  },
                  {
                    id: 5,
                    path: '/search?q=coffee-mug',
                    label: 'Coffee Mug',
                  },
                  {
                    id: 6,
                    path: '/search?q=plastic-bottle',
                    label: 'Plastic Bottle',
                  },
                  {
                    id: 7,
                    path: '/search?q=eco-friendly-bottle',
                    label: 'Eco - Friendly Bottle',
                  },
                  {
                    id: 8,
                    path: '/search?q=temprature-bottle',
                    label: 'Temperature Bottle',
                  }
                ],
              },
            ],
          },
          // {
          //   id: 2,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=western-wear',
          //       label: 'menu-western-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=dresses',
          //           label: 'menu-dresses',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=jumpsuits',
          //           label: 'menu-jumpsuits',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=tops-t-shirt',
          //           label: 'menu-tops-shirts',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=shorts-skirts',
          //           label: 'menu-shorts-skirts',
          //         },
          //         {
          //           id: 5,
          //           path: '/search?q=shurgs',
          //           label: 'menu-shurgs',
          //         },
          //         {
          //           id: 6,
          //           path: '/search?q=blazers',
          //           label: 'menu-blazers',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=plus-size',
          //       label: 'menu-plus-size',
          //     },
          //     {
          //       id: 3,
          //       path: '/search?q=sunglasses-frames',
          //       label: 'menu-sunglasses-frames',
          //     },
          //   ],
          // },
          // {
          //   id: 3,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=footwear',
          //       label: 'menu-footwear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=flats',
          //           label: 'menu-flats',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=casual-shoes',
          //           label: 'menu-casual-shoes',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=heels',
          //           label: 'menu-heels',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=boots',
          //           label: 'menu-boots',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=sports-active-wear',
          //       label: 'menu-sports-active-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=clothing',
          //           label: 'menu-clothing',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=footwear',
          //           label: 'menu-footwear',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=sports-accessories',
          //           label: 'menu-sports-accessories',
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 3,
        path: '/',
        label: 'Diary',
        icon: <AiOutlineBook size={iconSize} />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=diary',
                    label: 'Diary',
                  },
                  {
                    id: 2,
                    path: '/search?q=organiser',
                    label: 'Organiser',
                  },
                  {
                    id: 3,
                    path: '/search?q=note-book',
                    label: 'Note book',
                  },
                  {
                    id: 4,
                    path: '/search?q=note-pad',
                    label: 'Note Pad',
                  },
                  {
                    id: 5,
                    path: '/search?q=sticky-pad',
                    label: 'Sticiky Pad',
                  }
                ],
              }
            ],
          },
          // {
          //   id: 2,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=western-wear',
          //       label: 'menu-western-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=dresses',
          //           label: 'menu-dresses',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=jumpsuits',
          //           label: 'menu-jumpsuits',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=tops-t-shirt',
          //           label: 'menu-tops-shirts',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=shorts-skirts',
          //           label: 'menu-shorts-skirts',
          //         },
          //         {
          //           id: 5,
          //           path: '/search?q=shurgs',
          //           label: 'menu-shurgs',
          //         },
          //         {
          //           id: 6,
          //           path: '/search?q=blazers',
          //           label: 'menu-blazers',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=plus-size',
          //       label: 'menu-plus-size',
          //     },
          //     {
          //       id: 3,
          //       path: '/search?q=sunglasses-frames',
          //       label: 'menu-sunglasses-frames',
          //     },
          //   ],
          // },
          // {
          //   id: 3,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=footwear',
          //       label: 'menu-footwear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=flats',
          //           label: 'menu-flats',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=casual-shoes',
          //           label: 'menu-casual-shoes',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=heels',
          //           label: 'menu-heels',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=boots',
          //           label: 'menu-boots',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=sports-active-wear',
          //       label: 'menu-sports-active-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=clothing',
          //           label: 'menu-clothing',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=footwear',
          //           label: 'menu-footwear',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=sports-accessories',
          //           label: 'menu-sports-accessories',
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 4,
        path: '/',
        label: 'Electronic Items',
        icon: <PiTelevisionSimple size={iconSize} />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=bluetooth-speeaker',
                    label: 'Bluetooth Speaker',
                  },
                  {
                    id: 2,
                    path: '/search?q=earpods',
                    label: 'Earpods',
                  },
                  {
                    id: 3,
                    path: '/search?q=headphone',
                    label: 'Headphone',
                  },
                  {
                    id: 4,
                    path: '/search?q=otg-usb-cables',
                    label: 'OTG USB Cables',
                  },
                  {
                    id: 5,
                    path: '/search?q=power-bank',
                    label: 'Power Bank',
                  },
                  {
                    id: 6,
                    path: '/search?q=pen-drive',
                    label: 'Pen Drive / Promo Pen Drive',
                  },
                  {
                    id: 7,
                    path: '/search?q=laptop-accessories',
                    label: 'Laptop Accessories',
                  },
                  {
                    id: 6,
                    path: '/search?q=mobile-accessories',
                    label: 'Mobile Accessories',
                  },
                ],
              }
            ],
          },
          // {
          //   id: 2,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=western-wear',
          //       label: 'menu-western-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=dresses',
          //           label: 'menu-dresses',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=jumpsuits',
          //           label: 'menu-jumpsuits',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=tops-t-shirt',
          //           label: 'menu-tops-shirts',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=shorts-skirts',
          //           label: 'menu-shorts-skirts',
          //         },
          //         {
          //           id: 5,
          //           path: '/search?q=shurgs',
          //           label: 'menu-shurgs',
          //         },
          //         {
          //           id: 6,
          //           path: '/search?q=blazers',
          //           label: 'menu-blazers',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=plus-size',
          //       label: 'menu-plus-size',
          //     },
          //     {
          //       id: 3,
          //       path: '/search?q=sunglasses-frames',
          //       label: 'menu-sunglasses-frames',
          //     },
          //   ],
          // },
          // {
          //   id: 3,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=footwear',
          //       label: 'menu-footwear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=flats',
          //           label: 'menu-flats',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=casual-shoes',
          //           label: 'menu-casual-shoes',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=heels',
          //           label: 'menu-heels',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=boots',
          //           label: 'menu-boots',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=sports-active-wear',
          //       label: 'menu-sports-active-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=clothing',
          //           label: 'menu-clothing',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=footwear',
          //           label: 'menu-footwear',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=sports-accessories',
          //           label: 'menu-sports-accessories',
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 5,
        path: '/',
        label: 'Home Appliance',
        icon: <CgSmartHomeRefrigerator size={iconSize} />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=electric-kettle',
                    label: 'Electric Kettle',
                  },
                  {
                    id: 2,
                    path: '/search?q=toast-maker',
                    label: 'Toast Maker',
                  },
                  {
                    id: 3,
                    path: '/search?q=microwave',
                    label: 'Microwave (Kent)',
                  },
                  {
                    id: 4,
                    path: '/search?q=induction',
                    label: 'Induction (Kent)',
                  },
                  {
                    id: 5,
                    path: '/search?q=hand-mixer',
                    label: 'Hand Mixer (Kent)',
                  },
                  {
                    id: 6,
                    path: '/search?q=water-purifier',
                    label: 'Water Purifier (Kent)',
                  },
                ],
              }
            ],
          },
          // {
          //   id: 2,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=western-wear',
          //       label: 'menu-western-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=dresses',
          //           label: 'menu-dresses',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=jumpsuits',
          //           label: 'menu-jumpsuits',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=tops-t-shirt',
          //           label: 'menu-tops-shirts',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=shorts-skirts',
          //           label: 'menu-shorts-skirts',
          //         },
          //         {
          //           id: 5,
          //           path: '/search?q=shurgs',
          //           label: 'menu-shurgs',
          //         },
          //         {
          //           id: 6,
          //           path: '/search?q=blazers',
          //           label: 'menu-blazers',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=plus-size',
          //       label: 'menu-plus-size',
          //     },
          //     {
          //       id: 3,
          //       path: '/search?q=sunglasses-frames',
          //       label: 'menu-sunglasses-frames',
          //     },
          //   ],
          // },
          // {
          //   id: 3,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=footwear',
          //       label: 'menu-footwear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=flats',
          //           label: 'menu-flats',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=casual-shoes',
          //           label: 'menu-casual-shoes',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=heels',
          //           label: 'menu-heels',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=boots',
          //           label: 'menu-boots',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=sports-active-wear',
          //       label: 'menu-sports-active-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=clothing',
          //           label: 'menu-clothing',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=footwear',
          //           label: 'menu-footwear',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=sports-accessories',
          //           label: 'menu-sports-accessories',
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 6,
        path: '/',
        label: 'Pen',
        icon: <LuPencil size={iconSize} />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=plastic-pen',
                    label: 'Plastic Pen',
                  },
                  {
                    id: 2,
                    path: '/search?q=metal-pen',
                    label: 'Metal Pen',
                  },
                  {
                    id: 3,
                    path: '/search?q=pen-with-box',
                    label: 'Pen With Box',
                  },
                  {
                    id: 4,
                    path: '/search?q=brand-building-pen',
                    label: 'Brand Building Pens',
                  }
                ],
              },
            ],
          },
          // {
          //   id: 2,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=western-wear',
          //       label: 'menu-western-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=dresses',
          //           label: 'menu-dresses',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=jumpsuits',
          //           label: 'menu-jumpsuits',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=tops-t-shirt',
          //           label: 'menu-tops-shirts',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=shorts-skirts',
          //           label: 'menu-shorts-skirts',
          //         },
          //         {
          //           id: 5,
          //           path: '/search?q=shurgs',
          //           label: 'menu-shurgs',
          //         },
          //         {
          //           id: 6,
          //           path: '/search?q=blazers',
          //           label: 'menu-blazers',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=plus-size',
          //       label: 'menu-plus-size',
          //     },
          //     {
          //       id: 3,
          //       path: '/search?q=sunglasses-frames',
          //       label: 'menu-sunglasses-frames',
          //     },
          //   ],
          // },
          // {
          //   id: 3,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=footwear',
          //       label: 'menu-footwear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=flats',
          //           label: 'menu-flats',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=casual-shoes',
          //           label: 'menu-casual-shoes',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=heels',
          //           label: 'menu-heels',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=boots',
          //           label: 'menu-boots',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=sports-active-wear',
          //       label: 'menu-sports-active-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=clothing',
          //           label: 'menu-clothing',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=footwear',
          //           label: 'menu-footwear',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=sports-accessories',
          //           label: 'menu-sports-accessories',
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 7,
        path: '/',
        label: 'Personal & Lifestyle',
        icon: <GiClothes size={iconSize} />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=belt',
                    label: 'Belt',
                  },
                  {
                    id: 2,
                    path: '/search?q=wallet',
                    label: 'Wallet',
                  },
                  {
                    id: 3,
                    path: '/search?q=ties',
                    label: 'Ties',
                  },
                  {
                    id: 4,
                    path: '/search?q=smart-watches',
                    label: 'Smart Watches ',
                  },
                  {
                    id: 5,
                    path: '/search?q=wall-clock',
                    label: 'Wall Clock',
                  },
                  {
                    id: 6,
                    path: '/search?q=table-clock',
                    label: 'Table Clock',
                  },
                ],
              },
            ],
          },
          // {
          //   id: 2,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=western-wear',
          //       label: 'menu-western-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=dresses',
          //           label: 'menu-dresses',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=jumpsuits',
          //           label: 'menu-jumpsuits',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=tops-t-shirt',
          //           label: 'menu-tops-shirts',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=shorts-skirts',
          //           label: 'menu-shorts-skirts',
          //         },
          //         {
          //           id: 5,
          //           path: '/search?q=shurgs',
          //           label: 'menu-shurgs',
          //         },
          //         {
          //           id: 6,
          //           path: '/search?q=blazers',
          //           label: 'menu-blazers',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=plus-size',
          //       label: 'menu-plus-size',
          //     },
          //     {
          //       id: 3,
          //       path: '/search?q=sunglasses-frames',
          //       label: 'menu-sunglasses-frames',
          //     },
          //   ],
          // },
          // {
          //   id: 3,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=footwear',
          //       label: 'menu-footwear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=flats',
          //           label: 'menu-flats',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=casual-shoes',
          //           label: 'menu-casual-shoes',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=heels',
          //           label: 'menu-heels',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=boots',
          //           label: 'menu-boots',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=sports-active-wear',
          //       label: 'menu-sports-active-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=clothing',
          //           label: 'menu-clothing',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=footwear',
          //           label: 'menu-footwear',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=sports-accessories',
          //           label: 'menu-sports-accessories',
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 8,
        path: '/',
        label: 'T-Shirts',
        icon: <PiTShirt size={iconSize} />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=polo-tshirt',
                    label: 'Polo',
                  },
                  {
                    id: 2,
                    path: '/search?q=round-neck-tshirt',
                    label: 'Round Neck',
                  },
                  {
                    id: 3,
                    path: '/search?q=track-suit',
                    label: 'Track - Suit',
                  },
                  {
                    id: 4,
                    path: '/search?q=trousers',
                    label: 'Trouser',
                  },
                  {
                    id: 5,
                    path: '/search?q=jacket',
                    label: 'Jacket',
                  },
                  {
                    id: 6,
                    path: '/search?q=caps',
                    label: 'Caps',
                  },
                ],
              }
            ],
          },
          // {
          //   id: 2,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=western-wear',
          //       label: 'menu-western-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=dresses',
          //           label: 'menu-dresses',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=jumpsuits',
          //           label: 'menu-jumpsuits',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=tops-t-shirt',
          //           label: 'menu-tops-shirts',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=shorts-skirts',
          //           label: 'menu-shorts-skirts',
          //         },
          //         {
          //           id: 5,
          //           path: '/search?q=shurgs',
          //           label: 'menu-shurgs',
          //         },
          //         {
          //           id: 6,
          //           path: '/search?q=blazers',
          //           label: 'menu-blazers',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=plus-size',
          //       label: 'menu-plus-size',
          //     },
          //     {
          //       id: 3,
          //       path: '/search?q=sunglasses-frames',
          //       label: 'menu-sunglasses-frames',
          //     },
          //   ],
          // },
          // {
          //   id: 3,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=footwear',
          //       label: 'menu-footwear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=flats',
          //           label: 'menu-flats',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=casual-shoes',
          //           label: 'menu-casual-shoes',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=heels',
          //           label: 'menu-heels',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=boots',
          //           label: 'menu-boots',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=sports-active-wear',
          //       label: 'menu-sports-active-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=clothing',
          //           label: 'menu-clothing',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=footwear',
          //           label: 'menu-footwear',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=sports-accessories',
          //           label: 'menu-sports-accessories',
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 9,
        path: '/',
        label: 'Trophies and Awards',
        icon: <GoTrophy size={iconSize} />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=crystal-trophies',
                    label: 'Crystal Trophies',
                  },
                  {
                    id: 2,
                    path: '/search?q=frame-trophies',
                    label: 'Frame Trophies',
                  },
                  {
                    id: 3,
                    path: '/search?q=unique-trophies',
                    label: 'Unique Trophies',
                  },
                  {
                    id: 4,
                    path: '/search?q=medals',
                    label: 'Medals',
                  },
                ],
              }
            ],
          },
          // {
          //   id: 2,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=western-wear',
          //       label: 'menu-western-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=dresses',
          //           label: 'menu-dresses',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=jumpsuits',
          //           label: 'menu-jumpsuits',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=tops-t-shirt',
          //           label: 'menu-tops-shirts',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=shorts-skirts',
          //           label: 'menu-shorts-skirts',
          //         },
          //         {
          //           id: 5,
          //           path: '/search?q=shurgs',
          //           label: 'menu-shurgs',
          //         },
          //         {
          //           id: 6,
          //           path: '/search?q=blazers',
          //           label: 'menu-blazers',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=plus-size',
          //       label: 'menu-plus-size',
          //     },
          //     {
          //       id: 3,
          //       path: '/search?q=sunglasses-frames',
          //       label: 'menu-sunglasses-frames',
          //     },
          //   ],
          // },
          // {
          //   id: 3,
          //   columnItems: [
          //     {
          //       id: 1,
          //       path: '/search?q=footwear',
          //       label: 'menu-footwear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=flats',
          //           label: 'menu-flats',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=casual-shoes',
          //           label: 'menu-casual-shoes',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=heels',
          //           label: 'menu-heels',
          //         },
          //         {
          //           id: 4,
          //           path: '/search?q=boots',
          //           label: 'menu-boots',
          //         },
          //       ],
          //     },
          //     {
          //       id: 2,
          //       path: '/search?q=sports-active-wear',
          //       label: 'menu-sports-active-wear',
          //       columnItemItems: [
          //         {
          //           id: 1,
          //           path: '/search?q=clothing',
          //           label: 'menu-clothing',
          //         },
          //         {
          //           id: 2,
          //           path: '/search?q=footwear',
          //           label: 'menu-footwear',
          //         },
          //         {
          //           id: 3,
          //           path: '/search?q=sports-accessories',
          //           label: 'menu-sports-accessories',
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
    ],
    pagesMenu: [
      {
        id: 1,
        path: '/search',
        label: 'menu-deals-today',
        icon: <ThunderIcon className="w-3 h-auto" />,
      },
      {
        id: 2,
        path: '/',
        label: 'menu-offers',
      },
      {
        id: 3,
        path: '/faq',
        label: 'menu-faq',
      },
      {
        id: 4,
        path: '/contact-us',
        label: 'menu-contact',
      },
    ],
  },
};

import { FaCreditCard,FaBars, FaBook, FaCommentAlt, FaBriefcase, FaMortarPestle, FaStore,FaSass,FaLayerGroup,FaSignature,FaConfluence,FaFileInvoiceDollar } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'invoicing', icon: <FaFileInvoiceDollar />, url: '/products' },
      { label: 'connect', icon: <FaConfluence />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'documentation', icon: <FaBook />, url: '/products' },
      { label: 'full API ref', icon: <FaBars />, url: '/products' },
      { label: 'support', icon: <FaCommentAlt />, url: '/products' },
      { label: 'Api status', icon: <FaSignature/>, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
{
  page:'use cases',
  links:[
    { label: 'ecommerce', icon: <FaMortarPestle />, url: '/products' },
    { label: 'sass', icon: <FaSass />, url: '/products' },
    { label: 'marketplace', icon: <FaStore />, url: '/products' },
    { label: 'platforms', icon: <FaLayerGroup />, url: '/products' }

  ]
}
  
];

export default sublinks;

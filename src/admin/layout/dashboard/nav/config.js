// component
import SvgColor from '../../../component/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: 'dashboard',
    icon: icon('ic_analytics'),
  },
  // {
  //   title: 'user',
  //   path: 'users',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'astro',
  //   path: 'astro',
  //   icon: icon('ic_cart'),
  // },
  {
    title: 'Blog',
    path: 'blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Blog Category',
    path: 'blog-category',
    icon: icon('ic_blog'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;

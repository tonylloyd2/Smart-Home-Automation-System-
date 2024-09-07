import {
  AppstoreOutlined,
  DatabaseOutlined,
  HomeOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { lazy } from 'react';
import type { RouteList } from '@/router/route';
import { FormattedMessage } from '@/locales';
import Layout from '@/layout';
import Authority from '@/layout/Authority';

const Home = lazy(() => import('@/views/Home'));
const Menu1_1 = lazy(() => import('@/views/Nested/Menu1/Menu1-1'));
const Menu1_2 = lazy(() => import('@/views/Nested/Menu1/Menu1-2'));
const Permissions = lazy(() => import('@/views/Power/Permissions'));
const TestPermissionsA = lazy(() => import('@/views/Power/test-permissions-a'));
const TestPermissionsB = lazy(() => import('@/views/Power/test-permissions-b'));
const DetailsPage = lazy(() => import('@/views/DetailsPage'));
const DetailsInfo = lazy(() => import('@/views/DetailsPage/DetailsInfo'));
const DetailsParams = lazy(() => import('@/views/DetailsPage/DetailsParams'));

export const defaultRoute: RouteList[] = [
  {
    path: '/home',
    id: 'Home',
    element: <Home />,
    handle: { label: FormattedMessage({ id: 'layout.memu.home' }), icon: <HomeOutlined /> },
  },
  {
    path: '/nested',
    id: 'Nested',
    redirect: '/nested/menu1',
    handle: { label: FormattedMessage({ id: 'layout.memu.nesting' }), icon: <AppstoreOutlined /> },
    children: [
      {
        path: 'menu1',
        id: 'Menu1',
        redirect: '/nested/menu1/menu1-1',
        handle: { label: 'menu-1' },
        children: [
          {
            path: 'menu1-1',
            id: 'Menu1-1',
            element: <Menu1_1 />,
            handle: { label: 'menu-1-1' },
          },
          {
            path: 'menu1-2',
            id: 'Menu1-2',
            element: <Menu1_2 />,
            handle: { label: 'menu-1-2' },
          },
        ],
      },
    ],
  },
  {
    path: '/power',
    id: 'Power',
    redirect: '/power/permissions',
    handle: {
      label: FormattedMessage({ id: 'layout.memu.permissions' }),
      icon: <UserSwitchOutlined />,
    },
    children: [
      {
        path: 'permissions',
        id: 'Permissions',
        element: <Permissions />,
        handle: { label: FormattedMessage({ id: 'layout.memu.permissionsPage' }) },
      },
      {
        path: 'test-permissions-a',
        id: 'TestPermissionsA',
        element: <TestPermissionsA />,
        handle: { label: FormattedMessage({ id: 'layout.memu.testPermissionsPage1' }) },
      },
      {
        path: 'test-permissions-b',
        id: 'TestPermissionsB',
        element: <TestPermissionsB />,
        handle: { label: FormattedMessage({ id: 'layout.memu.testPermissionsPage2' }) },
      },
    ],
  },
  {
    path: '/details-page',
    id: 'DetailsPage',
    alwaysShow: false,
    handle: { label: FormattedMessage({ id: 'layout.memu.detailsPage' }), whiteList: true },
    children: [
      {
        path: '',
        id: 'DetailsList',
        element: <DetailsPage />,
        handle: {
          label: FormattedMessage({ id: 'layout.memu.detailsPage' }),
          icon: <DatabaseOutlined />,
        },
      },
      {
        path: 'details-info',
        id: 'DetailsInfo',
        element: <DetailsInfo />,
        handle: { label: '详情页', hideSidebar: true },
      },
      {
        path: 'details-params/:id',
        id: 'DetailsParams',
        element: <DetailsParams />,
        handle: { label: '详情页', hideSidebar: true },
      },
    ],
  },
];

const ErrorPage403 = lazy(() => import('@/views/core/error/403'));
const ErrorElement = lazy(() => import('@/views/core/error/ErrorElement'));
const Refresh = lazy(() => import('@/views/core/Refresh'));

const Login = lazy(() => import('@/views/Login'));

export const whiteList: RouteList[] = [
  {
    path: '*',
    element: <ErrorPage403 />,
  },
  {
    path: '/refresh/*',
    element: <Refresh />,
    handle: { label: '', hideSidebar: true, whiteList: true },
  },
];

export const baseRouter: RouteList[] = [
  {
    path: '/',
    element: (
      <Authority>
        <Layout />
      </Authority>
    ),
    errorElement: <ErrorElement pageType="Layout" />,
    children: [...whiteList],
  },
  {
    path: '/login',
    element: <Login />,
  },
];

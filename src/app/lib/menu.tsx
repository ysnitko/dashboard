import {
  SvgIconUsers,
  SvgIconSettings,
  SvgIconResource,
  SvgIconDashboard,
  SvgIconProjects,
  SvgIconTasks,
  SvgIconTimeLog,
  SvgIconProjectTemplate,
} from '../../components/SvgIcon/SvgIcon';

export const menuLinks: {
  title: string;
  href: string;
  icon: React.ReactNode;
  icon_active: React.ReactNode;
}[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <SvgIconDashboard param="#F1F1F1" />,
    icon_active: <SvgIconDashboard param="#E65F2B" />,
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <SvgIconProjects param="#F1F1F1" />,
    icon_active: <SvgIconProjects param="#E65F2B" />,
  },
  {
    title: 'Tasks',
    href: '/tasks',
    icon: <SvgIconTasks param="#F1F1F1" />,
    icon_active: <SvgIconTasks param="#E65F2B" />,
  },
  {
    title: 'Time log',
    href: '/time-log',
    icon: <SvgIconTimeLog param="#F1F1F1" />,
    icon_active: <SvgIconTimeLog param="#E65F2B" />,
  },
  {
    title: 'Resource mgnt',
    href: '/resource-mgnt',
    icon: <SvgIconResource param="#F1F1F1" />,
    icon_active: <SvgIconResource param="#E65F2B" />,
  },
  {
    title: 'Users',
    href: '/users',
    icon: <SvgIconUsers param="#F1F1F1" />,
    icon_active: <SvgIconUsers param="#E65F2B" />,
  },
  {
    title: 'Project template',
    href: '/project-template',
    icon: <SvgIconProjectTemplate param="#F1F1F1" />,
    icon_active: <SvgIconProjectTemplate param="#E65F2B" />,
  },
  {
    title: 'Menu settings',
    href: '/menu-settings',
    icon: <SvgIconSettings param="#F1F1F1" />,
    icon_active: <SvgIconSettings param="#E65F2B" />,
  },
  {
    title: 'Create user',
    href: '/create-user',
    icon: '',
    icon_active: '',
  },
  {
    title: 'Create project',
    href: '/create-project',
    icon: '',
    icon_active: '',
  },
];

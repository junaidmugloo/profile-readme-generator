import { events } from 'app';
import { Modals } from 'types';

type NavItem = {
  label: string;
  props: Record<string, unknown>;
};

const navItems: NavItem[] = [
  {
    label: 'Github',
    props: {
      href: 'https://github.com/junaidmugloo',
      target: '_blank',
      rel: 'noreferrer',
    },
  },
  {
    label: 'Help',
    props: {
      href: 'https://instagram.com/junaid_mugloo',
      target: '_blank',
      rel: 'noreferrer',
    },
  },
  {
    label: 'Share',
    props: {
      as: 'button',
      onClick: () => events.modal.open(Modals.SHARE),
    },
  },
];

export { navItems };

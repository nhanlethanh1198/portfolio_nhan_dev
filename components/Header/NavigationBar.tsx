import { Button, Stack, Link as NavLink, Typography } from '@mui/material';
import { ReactFragment, ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children?: ReactNode;
};

interface NavigationObjectInterface {
  title: string;
  link: string;
}

const NavigationTitle: NavigationObjectInterface[] = [
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Experience',
    link: '/experience',
  },
  {
    title: 'Work',
    link: '/work',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];

const NavigationBar = ({ children }: Props): JSX.Element => {
  return (
    <Stack direction={'row'} mt={2}>
      {NavigationTitle.map((item: NavigationObjectInterface, index: number) => (
        <Link href={item.link}>
          <Button>
            {index + 1 < 10 ? `0${index + 1}` : index + 1}. <Typography variant='button' sx={(theme) => {
              console.log(theme)
              return {
                color: theme.palette.mode === 'light' ? 'black' : 'white'
              }
            }}>{item.title}</Typography>
          </Button>
        </Link>
      ))}
    </Stack>
  );
};

export default NavigationBar;

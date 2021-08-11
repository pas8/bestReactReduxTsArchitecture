import { FC } from 'react';

export const ComposeLayouts: FC<{ layouts: any[] }> = ({ layouts, children }) => {
  if (!layouts?.length) return children;

  return layouts.reverse().reduce((acc: any, Layout: any) => <Layout>{acc}</Layout>, children);
};

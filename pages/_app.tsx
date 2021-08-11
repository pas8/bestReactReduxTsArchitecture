import type { AppProps } from 'next/app';
import StoreLayout from '../layouts/StoreLayout';
import { ComposeLayouts } from '../layouts/index';

const _App = ({ Component, pageProps }: AppProps) => {
  const layouts = [StoreLayout];

  return (
    <ComposeLayouts layouts={layouts}>
      <Component {...pageProps} />
    </ComposeLayouts>
  );
};
export default _App;

import "@/styles/globals.css";
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [search, setSearch] = useState('');
  return (
    <Provider store={store}>
      <Header search={search} setSearch={setSearch} />
      <Component {...pageProps} search={search} setSearch={setSearch} />
      <Footer />
    </Provider>
  );
}

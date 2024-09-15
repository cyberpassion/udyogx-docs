// pages/_app.js
import '../styles/global.css';
import { Inter } from 'next/font';

const inter = Inter({
  weight: ['400', '500', '700', '900'], // Choose the weights you want to include
  subsets: ['latin'],            // Define character sets
  display: 'swap',               // Optional for faster font rendering
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}> {/* Apply the font globally */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

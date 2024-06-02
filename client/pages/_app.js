/**
 * _app.js
 * Next.js uses the App component to initialize pages.
 * This app component runs before any pages gets ready for users to see
 * Ths is a perfect place to add your bootstrap css so that it is available for the
 * IMPORTANT - restart the server
 */

import TopNav from '../components/TopNav.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.js';
import '../public/css/styles.css';

function MyApp({Component, pageProps}) {
    return (
        <>
            <TopNav />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
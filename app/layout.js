import { Inter } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';

import Navbar from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';
import Topbar from './components/shared/Topbar/Topbar';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Home | e-mart',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${inter.className} antialiased`}>
                {/* Top discount bar and navbar */}
                <Topbar />
                <Navbar />

                {/* Main content */}
                <main className='w-[1210px] min-h-[calc(100vh-754.016px)] mx-auto'>
                    {children}
                </main>

                {/* Footer */}
                <Footer />
            </body>
        </html>
    );
}

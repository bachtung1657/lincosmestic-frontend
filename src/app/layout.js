import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';
import './globals.scss';

// Import Google Fonts
import { Inter, Playfair_Display, Exo_2 } from 'next/font/google';

// Cấu hình font
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const exo2 = Exo_2({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-exo2' });


export const metadata = {
  title: {
    default: 'Lincosmetic - Nâng Tầm Vẻ Đẹp Của Bạn',
    template: '%s | Lincosmetic',
  },
  description: 'Khám phá thế giới nước hoa và mỹ phẩm cao cấp từ Lincosmestic.',
  // icons: { // <-- XÓA BỎ HOÀN TOÀN KHỐI NÀY
  //   icon: '/favicon.png',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable} ${exo2.variable}`}>
      <body>
        <Header />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
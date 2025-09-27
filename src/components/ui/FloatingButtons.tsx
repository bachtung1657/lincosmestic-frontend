import Link from 'next/link';
import styles from './FloatingButtons.module.scss';

// --- BỘ ICON SVG CUỐI CÙNG, ĐÃ TỐI ƯU ---

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
);

// === ICON "CHAT" MỚI, THAY THẾ ZALO ===
const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

const MessengerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.003c-5.523 0-10 3.863-10 8.647c0 3.424 2.373 6.348 5.625 7.777v3.573c0 .25.178.47.424.552a.498.498 0 0 0 .576-.17l1.9-2.203c.484.075.98.12 1.475.12c5.523 0 10-3.862 10-8.647S17.523 2.003 12 2.003"/>
    </svg>
);


export default function FloatingButtons() {
    const phoneNumber = "0123456789";
    const zaloLink = "https://zalo.me/0123456789"; // Link vẫn là của Zalo
    const messengerLink = "https://m.me/your-facebook-page-id";

    return (
        <div className={styles.floatingContainer}>
            <Link href={zaloLink} target="_blank" rel="noopener noreferrer" className={`${styles.floatingButton} ${styles.zalo}`}>
                <ChatIcon />
                <span className={styles.tooltip}>Chat với chúng tôi</span>
            </Link>
            <Link href={messengerLink} target="_blank" rel="noopener noreferrer" className={`${styles.floatingButton} ${styles.messenger}`}>
                <MessengerIcon />
                <span className={styles.tooltip}>Chat Facebook</span>
            </Link>
            <Link href={`tel:${phoneNumber}`} className={`${styles.floatingButton} ${styles.phone}`}>
                <PhoneIcon />
                <span className={styles.tooltip}>Gọi Hotline</span>
            </Link>
        </div>
    )
}
import styles from "./LessonNav.module.css";


export default function LessonNav() {
    return (
        <nav className={styles.lessonNav_container}>
            <div className={styles.lessonNav_item}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <circle cx="25" cy="25" r="24" fill="#4B585D" stroke="#4B585D" strokeWidth="2"/>
                    <path d="M24.208 32.824V19.192L25.096 19.864L21.784 21.616L21.088 19.36L25.576 16.96H26.824V32.824H24.208ZM21.544 34V31.504H29.56V34H21.544Z" fill="#F4FFFF"/>
                </svg>
            </div>
            <div className={styles.lessonNav_item}>
                <svg width="51" height="50" viewBox="0 0 51 50" fill="none">
                    <circle cx="25.3584" cy="25" r="24" fill="#4B585D" stroke="#4B585D" strokeWidth="2"/>
                    <path d="M20.232 35L19.44 33.032L24.576 27.248C24.848 26.96 25.128 26.632 25.416 26.264C25.72 25.88 26.008 25.488 26.28 25.088C26.552 24.688 26.768 24.296 26.928 23.912C27.104 23.512 27.192 23.136 27.192 22.784C27.192 22.272 27.088 21.84 26.88 21.488C26.688 21.12 26.4 20.84 26.016 20.648C25.648 20.456 25.2 20.36 24.672 20.36C24.208 20.36 23.752 20.496 23.304 20.768C22.856 21.04 22.448 21.424 22.08 21.92C21.712 22.416 21.424 22.992 21.216 23.648L19.224 22.4C19.496 21.472 19.904 20.68 20.448 20.024C21.008 19.352 21.672 18.84 22.44 18.488C23.224 18.136 24.072 17.96 24.984 17.96C25.928 17.96 26.768 18.16 27.504 18.56C28.24 18.944 28.816 19.488 29.232 20.192C29.648 20.88 29.856 21.68 29.856 22.592C29.856 22.96 29.816 23.336 29.736 23.72C29.656 24.104 29.528 24.504 29.352 24.92C29.176 25.32 28.952 25.744 28.68 26.192C28.408 26.624 28.08 27.08 27.696 27.56C27.328 28.04 26.904 28.544 26.424 29.072L22.608 33.224L22.128 32.504H30.384V35H20.232Z" fill="#F4FFFF"/>
                </svg>
            </div>
            <div className={styles.lessonNav_item}>
                <svg width="51" height="50" viewBox="0 0 51 50" fill="none">
                    <circle cx="25.7178" cy="25" r="24" fill="#4B585D" stroke="#4B585D" strokeWidth="2"/>
                    <path d="M25.024 35.24C23.84 35.24 22.808 34.968 21.928 34.424C21.064 33.88 20.248 32.968 19.48 31.688L21.496 30.416C21.896 31.008 22.288 31.496 22.672 31.88C23.072 32.248 23.48 32.52 23.896 32.696C24.312 32.872 24.752 32.96 25.216 32.96C25.776 32.96 26.296 32.824 26.776 32.552C27.256 32.264 27.64 31.872 27.928 31.376C28.216 30.88 28.36 30.32 28.36 29.696C28.36 29.072 28.248 28.544 28.024 28.112C27.8 27.664 27.472 27.328 27.04 27.104C26.608 26.864 26.096 26.744 25.504 26.744C25.232 26.744 24.944 26.776 24.64 26.84C24.352 26.888 24.04 26.968 23.704 27.08C23.368 27.176 23 27.304 22.6 27.464L21.88 25.568L27.064 19.856L27.568 20.6H20.416V18.2H30.04L30.52 19.16L25.024 25.256L24.424 24.632C24.552 24.568 24.76 24.512 25.048 24.464C25.352 24.4 25.6 24.368 25.792 24.368C26.496 24.368 27.152 24.504 27.76 24.776C28.384 25.032 28.92 25.4 29.368 25.88C29.832 26.344 30.192 26.896 30.448 27.536C30.72 28.16 30.856 28.832 30.856 29.552C30.856 30.64 30.592 31.616 30.064 32.48C29.552 33.328 28.856 34 27.976 34.496C27.096 34.992 26.112 35.24 25.024 35.24Z" fill="#F4FFFF"/>
                </svg>
            </div>
        </nav>
    );
}
import styles from "./CanvasTooltipButton.module.css";


export default function CanvasTooltipButton() {
    return (
        <div className={styles.tooltip_container}>
            <span className={styles.tooltip_window}>
                <h4>How To Use The Interactive Canvas</h4>
                Drag and drop matrices from the top on to the canvas grid to apply 
                transformations to the "moon". 
                Apply multiple matrices together to change the final transformation.
                Undo a matrix with the arrow icon, and clear all transformations with the delete icon.
                Experiment with different order combinations of matrices to see 
                different transformation behavior. 
            </span>
            <svg id={styles.tooltip_icon} width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="19.5" cy="19.5" r="19" fill="#272727" stroke="#272727" strokeWidth={2}/>
                <path d="M17.86 22.78L17.34 19.96C17.86 19.8267 18.3267 19.68 18.74 19.52C19.1533 19.3467 19.5067 19.1667 19.8 18.98C20.1067 18.78 20.36 18.5667 20.56 18.34C20.76 18.1133 20.9067 17.8733 21 17.62C21.1067 17.3533 21.16 17.0733 21.16 16.78C21.16 16.3933 21.0533 16.0467 20.84 15.74C20.64 15.4333 20.36 15.1933 20 15.02C19.64 14.8467 19.2333 14.76 18.78 14.76C18.2467 14.76 17.7267 14.9467 17.22 15.32C16.7267 15.68 16.3 16.1933 15.94 16.86L14.44 15.6C15.0133 14.72 15.6933 14.04 16.48 13.56C17.28 13.0667 18.1133 12.82 18.98 12.82C19.82 12.82 20.5733 12.9933 21.24 13.34C21.9067 13.6867 22.4333 14.16 22.82 14.76C23.22 15.36 23.42 16.0333 23.42 16.78C23.42 17.22 23.3267 17.6533 23.14 18.08C22.9667 18.4933 22.7133 18.8867 22.38 19.26C22.0467 19.6333 21.6533 19.9667 21.2 20.26C20.76 20.5533 20.2733 20.7933 19.74 20.98L19.4 22.78H17.86ZM17.16 25.72C17.16 25.28 17.2867 24.92 17.54 24.64C17.7933 24.36 18.1267 24.22 18.54 24.22C18.98 24.22 19.32 24.3533 19.56 24.62C19.8 24.8733 19.92 25.24 19.92 25.72C19.92 26.16 19.7933 26.52 19.54 26.8C19.2867 27.08 18.9533 27.22 18.54 27.22C18.1 27.22 17.76 27.0933 17.52 26.84C17.28 26.5733 17.16 26.2 17.16 25.72Z" fill="#F4FFFF"/>
            </svg>
        </div>
    );
}
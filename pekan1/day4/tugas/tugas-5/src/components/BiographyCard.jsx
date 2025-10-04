import styles from "./BiographyCard.module.css";

function BiographyCard({ name, title, img, description }) {
    return (
        <div className={styles.biographyCard}>
            <img src={img} alt={name} className={styles.biographyImg}/>
            <div className={styles.biographyText}>
                <h2>{name}</h2>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default BiographyCard;

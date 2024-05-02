import UserPurchase from "@/components/UserPurchases";
import styles from "../../styles/cardProduct.module.css";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <UserPurchase />
    </div>
  );
}

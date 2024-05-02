"use client";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase/firebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useAuth } from "@/app/context/AuthContext";
import { Purchase } from "@/types/Purchases";
import { format } from "date-fns";
import styles from "../styles/cardProduct.module.css";

export default function UserPurchase() {
  const { user } = useAuth();
  const [userPurchases, setUserPurchases] = useState<Purchase[]>([]);

  useEffect(() => {
    if (!user) return;

    const purchaseRecordRef = collection(db, "purchaseRecord");

    const userPurchaseQuery = query(
      purchaseRecordRef,
      where("userId", "==", user.uid),
    );

    const unsubscribe = onSnapshot(userPurchaseQuery, (querySnapshot) => {
      const purchases: Purchase[] = [];
      querySnapshot.forEach((doc) => {
        const purchaseData = doc.data();
        const purchase: Purchase = {
          productId: purchaseData.productId,
          productName: purchaseData.productName,
          quantity: purchaseData.quantity,
          price: purchaseData.price,
          total: purchaseData.total,
          userId: purchaseData.userId,
          date: purchaseData.date.toDate(),
        };
        purchases.push(purchase);
      });
      setUserPurchases(purchases);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div className={styles.cartContainer}>
      <table className={styles.subContainer}>
        <thead className={styles.containerTable}>
          <tr className={styles.columnTitles}>
            {/* <th className={styles.columnTitle}>Product ID</th> */}
            <th className={styles.columnTitle}>PRODUCT</th>
            <th className={styles.columnTitle}>QUANTITY</th>
            <th className={styles.columnTitle}>PRICE</th>
            <th className={styles.columnTitle}>TOTAL</th>
            <th className={styles.columnTitle}>DATE</th>
          </tr>
        </thead>
        <tbody>
          {userPurchases.map((item, index) => (
            <tr key={index} className={styles.productItem}>
              {/* <td className={styles.product}>{item.productId}</td> */}
              <td className={styles.product}>{item.productName}</td>
              <td className={styles.product}>{item.quantity}</td>
              <td className={styles.product}>${item.price}</td>
              <td className={styles.product}>${item.total}</td>
              <td className={styles.product}>
                {format(new Date(item.date), "dd/MM/yyyy hh:mm:ss a")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

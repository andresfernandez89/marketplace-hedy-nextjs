import { useCart } from "@/app/context/CartContext";
import React, { useState, useEffect } from "react";
import styles from "../styles/cardProduct.module.css";

interface PurchaseConfirmationPopupProps {
  onClose: () => void;
}

const PurchaseConfirm: React.FC<PurchaseConfirmationPopupProps> = ({
  onClose,
}) => {
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const { cart, totalSpent } = useCart();

  useEffect(() => {
    const storedProducts = localStorage.getItem("cart");
    console.log(storedProducts);
    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);
      setPurchasedProducts(parsedProducts);
    }
  }, []);

  return (
    <div className={styles.purchaseContainer}>
      <div className={styles.purchaseContent}>
        <h2>Purchase completed successfully</h2>
        <p>The purchased products are detailed below:</p>
        <table>
          <thead className={styles.purchaseTitles}>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody className={styles.purchaseDetails}>
            {cart.map((product, index) => (
              <tr key={index}>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>${(product.price * product.quantity).toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={3}>Total:</td>
              <td>${totalSpent.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <button className={styles.removeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PurchaseConfirm;

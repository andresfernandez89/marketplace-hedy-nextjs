"use client";
import Image from "next/image";
import styles from "../../styles/navbar.module.css";
import { useCart } from "../context/AuthContext";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className={styles.cartContainer}>
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <div>
          <div className={styles.tableContainer}>
            <table className={styles.productTable}>
              <thead>
                <tr className={styles.columnTitles}>
                  <th className={styles.columnTitle}>Product Details</th>
                  <th className={styles.columnTitle}>Quantity</th>
                  <th className={styles.columnTitle}>Price</th>
                  <th className={styles.columnTitle}>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id} className={styles.productItem}>
                    <td className={styles.productDetails}>
                      <div className={styles.imageContainer}>
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={120}
                          height={120}
                          className={styles.productImage}
                        />
                      </div>
                      <div className={styles.productInfo}>
                        <p className={styles.productName}>{product.title}</p>
                        <button className={styles.removeButton}>Remove</button>
                      </div>
                    </td>
                    <td className={styles.quantity}>
                      <button className={styles.quantityButton}>-</button>
                      <span className={styles.quantityValue}>1</span>
                      <button className={styles.quantityButton}>+</button>
                    </td>
                    <td className={styles.price}>${product.price}</td>
                    <td className={styles.total}>${product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.cartButtons}>
            <button className={styles.clearCartButton}>Clear Cart</button>
            <button className={styles.buyButton}>Buy</button>
          </div>
        </div>
      ) : (
        <div className={styles.emptyCartContainer}>
          <p className={styles.emptyCartText}>No products in the cart.</p>
        </div>
      )}
    </div>
  );
}

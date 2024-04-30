"use client";
import Image from "next/image";
import styles from "../../styles/cardProduct.module.css";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useState } from "react";
import PurchaseConfirm from "@/components/Purchase";

export default function Cart() {
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const handleClosePopup = () => {
    setShowConfirmation(false);
  };

  const notify = () =>
    toast.success("Thank you!. Purchase completed successfully.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyError = () => {
    toast.error("Something went wrong. Try it later please.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyInfo = () => {
    toast.info("Please login to purchase.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const {
    cart,
    clear,
    deleteItem,
    increaseQty,
    decreaseQty,
    totalSpent,
    totalByProduct,
  } = useCart();
  const { user } = useAuth();

  const handleBuy = () => {
    if (user) {
      setShowConfirmation(true);
      notify();
    } else {
      notifyInfo();
    }
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Shopping Cart</h2>
      <div className={styles.subContainer}>
        {cart.length > 0 ? (
          <div>
            <div className={styles.tableContainer}>
              <table className={styles.productTable}>
                <thead>
                  <tr className={styles.columnTitles}>
                    <th className={styles.columnTitle}>PRODUCT DETAILS</th>
                    <th className={styles.columnTitle}>QUANTITY</th>
                    <th className={styles.columnTitle}>PRICE</th>
                    <th className={styles.columnTitle}>TOTAL</th>
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
                          <button
                            className={styles.removeButton}
                            onClick={() => deleteItem(product.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </td>
                      <td className={styles.quantity}>
                        <button
                          className={styles.quantityButton}
                          onClick={() => decreaseQty(product.id)}
                        >
                          -
                        </button>
                        <span className={styles.quantityValue}>
                          {product.quantity}
                        </span>
                        <button
                          className={styles.quantityButton}
                          onClick={() => increaseQty(product.id)}
                        >
                          +
                        </button>
                      </td>
                      <td className={styles.price}>${product.price}</td>
                      <td className={styles.total}>
                        ${totalByProduct[product.id].toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={4} className={styles.total}>
                      Total Spent: ${totalSpent.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.cartButtons}>
              <button className={styles.clearCartButton} onClick={clear}>
                Clear Cart
              </button>
              <button className={styles.buyButton} onClick={handleBuy}>
                Buy
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.emptyCartContainer}>
            <p className={styles.emptyCartText}>No products in the cart.</p>
          </div>
        )}
        {showConfirmation && <PurchaseConfirm onClose={handleClosePopup} />}
      </div>
    </div>
  );
}

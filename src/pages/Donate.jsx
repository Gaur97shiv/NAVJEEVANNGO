import "../css/donate.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import BackToTop from "../components/BackToTop";
import upiQR from "../assets/upi-qr.jpg";
import { useState } from "react";

export default function Donate() {
  const [amount, setAmount] = useState(500);
  const [paymentMethod, setPaymentMethod] = useState("gateway");

  // 🔹 DEMO payment handler (UI only)
  const handleGatewayPayment = () => {
    alert(`Demo Mode:\nProceeding to pay ₹${amount}\n(Payment gateway not connected yet)`);
  };

  return (
    <>
      <Navbar />

      <PageHeader title="Donate Now" path="/donate" name="Donate" />

      <div className="donations">
        <div className="container">
          <div className="donate">
            <div className="row align-items-center">

              {/* LEFT CONTENT */}
              <div className="col-lg-7">
                <div className="donate-content">
                  <div className="section-header">
                    <p>Donate Now</p>
                    <h2>Support Education & Young Minds</h2>
                  </div>
                  <p>
                    Your contribution helps us educate underprivileged children
                    and empower communities for a better future.
                  </p>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div className="col-lg-5">
                <div className="donate-form">

                  {/* AMOUNT */}
                  <h4>Select Amount</h4>
                  <div className="btn-group w-100 mb-3">
                    {[100, 500, 1000].map((val) => (
                      <button
                        key={val}
                        type="button"
                        className={`btn btn-outline-warning ${
                          Number(amount) === val ? "active" : ""
                        }`}
                        onClick={() => setAmount(val)}
                      >
                        ₹ {val}
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    className="form-control mb-3"
                    placeholder="Custom Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  {/* PAYMENT METHOD */}
                  <h4>Select Payment Method</h4>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={paymentMethod === "gateway"}
                      onChange={() => setPaymentMethod("gateway")}
                    />
                    <label className="form-check-label">
                      Online Payment (Card / UPI)
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      checked={paymentMethod === "upi"}
                      onChange={() => setPaymentMethod("upi")}
                    />
                    <label className="form-check-label">
                      Donate via UPI
                    </label>
                  </div>

                  {/* GATEWAY (DEMO) */}
                  {paymentMethod === "gateway" && (
                    <div className="payment-box">
                      <p>Click below to proceed with secure online payment.</p>
                      <button
                        type="button"
                        onClick={handleGatewayPayment}
                        className="btn btn-custom w-100"
                      >
                        Proceed to Pay ₹{amount}
                      </button>
                      <p className="small text-muted mt-2">
                        * Demo mode. Payment gateway not connected yet.
                      </p>
                    </div>
                  )}

                  {/* UPI OPTION (FREE) */}
                  {paymentMethod === "upi" && (
                    <div className="upi-box text-center">
                      <p>
                        <strong>UPI ID:</strong> 9675928904@ptyes
                      </p>
                      <img
                        src={upiQR}
                        alt="UPI QR Code"
                        className="upi-qr"
                      />
                      <p className="small">
                        Scan the QR code using any UPI app to donate.
                        <br />
                        <strong>No gateway charges apply.</strong>
                      </p>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
}

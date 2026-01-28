# AI Financial Advisor — README

## 📌 Overview

This project is a simple AI-based **Financial Advisor** tool that allows users to:

* Input salary & financial goals
* Take a basic **risk profile quiz**
* Receive recommendations like **SIP, FD, Stocks, Mutual Funds**
* Redirect to **Opal (or any LLM backend)** for AI‑generated financial guidance

This is ideal for prototypes, demos, and n8n/Opal workflow integration.

---

## 🚀 Features

### 1. **User Inputs**

* Monthly Salary
* Financial Goals (short-term / long-term)
* Savings Target

### 2. **Risk Profile Quiz**

The UI asks 4–6 simple questions:

* Investment horizon
* Comfort with losses
* Knowledge level of investing
* Stability of income

Risk categories:

* **Low** → FD, RD, Liquid Funds
* **Medium** → Balanced Mutual Funds, SIPs
* **High** → Stocks, Index Funds, ETFs

### 3. **AI Recommendations**

After user submits the form → data is sent to **Opal** workflow.
Opal responds with:

* SIP plan (monthly recommendation)
* FD suggestions (dummy rate table)
* Stock exposure (safe %) based on risk profile
* Tax‑saving options (80C basics)

### 4. **Simple UI (Frontend)**

A minimal HTML/CSS page including:

* Clean input form
* Quiz section
* Submit button → triggers Opal API call

---

## 🏗️ Project Structure

```
/ai-financial-advisor
│── index.html        # frontend UI
│── script.js         # API call to Opal
│── styles.css        # basic styling
│── README.md
```

---

## 🔌 Connecting With Opal

Your `script.js` will POST user data like:

```javascript
fetch("https://api.opal.run/flow", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    salary: value,
    goal: value,
    riskScore: value,
  }),
})
.then(res => res.json())
.then(data => showRecommendations(data));
```

---

## 📚 Data You Can Use (Dummy or Real)

### Mutual Fund Types

* Equity, Debt, Hybrid, ELSS, Index Funds, ETFs

### FD Rates (Dummy)

| Bank  | FD Rate |
| ----- | ------- |
| SBI   | 6.8%    |
| HDFC  | 7.1%    |
| ICICI | 7.0%    |

### Tax Basics (India)

* **80C** limit: ₹1,50,000
* **LTCG stock/MF**: 10% after ₹1L exemption
* **STCG stock**: 15%

---

## 🛠️ Setup Instructions

### Local

1. Download project folder
2. Open `index.html` in browser
3. Update Opal endpoint in `script.js`

### Deployment

* Netlify
* GitHub Pages
* Vercel (recommended)

---

## 🎯 Future Enhancements

* Auto monthly SIP calculator
* Bank statement ingestion
* ML-based expense forecasting
* Chat-style advisor built into UI

---

## 👩‍💻 Author

Built by **Sashvitha Reddy**, B.Tech 2nd year @ Woxsen University.
Focused on ML, finance automation, and full‑stack projects.

---

## 📞 Support

If you want:

* advanced LSTM investment forecasting,
* N8N + Opal full automation,
* complete deployment setup,
  I can generate the entire project structure for you.

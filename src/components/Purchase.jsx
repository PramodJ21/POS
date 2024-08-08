import React from 'react'
import styles from './Purchase.module.css'
// import styles1 from './Dashboard.module.css'
import Sidebar from './SideBar.jsx'
import TransactionTable from './TransactionTable.jsx'
import PurchaseTransactionTable from './PurchaseTransactionTable.jsx'
const Purchase = () => {
  return (
    <div className={styles.purchase}>
        <Sidebar />
        <main className={styles.main}>
          <h1>Purchase</h1>
        <div className={styles.filter}>
          <div className={styles.from}>
            <p>From</p>
            <input type="date" />
          </div>
          <div className={styles.to}>
            <p>To</p>
            <input type="date" />
          </div>
          <button>Filter</button>
        </div>
        <div className={styles.content}>
          <div className={styles.charts}>
            <div className={styles.chart}>
            {/* <img src="chart1.png" alt="Purchase Chart" /> */}
            </div>
            <div className={styles.chart}>
            {/* <img src="chart1.png" alt="Purchase Chart" /> */}
            </div>
          </div>
          <div className={styles.purchaseTable}>
          <PurchaseTransactionTable transactions={[{
            "purchaseId":"1",
            "supplierId":"1",
            "purchaseDate":"2021-01-01",
            "productName":"Item A",
            "unitPrice":"$10",
            "quantity":"10",
            "totalAmount":"$100"
            },{
              "purchaseId":"1",
              "supplierId":"1",
              "purchaseDate":"2021-01-01",
              "productName":"Item A",
              "unitPrice":"$10",
              "quantity":"10",
              "totalAmount":"$100"
              },{
                "purchaseId":"1",
                "supplierId":"1",
                "purchaseDate":"2021-01-01",
                "productName":"Item A",
                "unitPrice":"$10",
                "quantity":"10",
                "totalAmount":"$100"
                },{
                  "purchaseId":"1",
                  "supplierId":"1",
                  "purchaseDate":"2021-01-01",
                  "productName":"Item A",
                  "unitPrice":"$10",
                  "quantity":"10",
                  "totalAmount":"$100"
                  },{
                    "purchaseId":"1",
                    "supplierId":"1",
                    "purchaseDate":"2021-01-01",
                    "productName":"Item A",
                    "unitPrice":"$10",
                    "quantity":"10",
                    "totalAmount":"$100"
                    },{
                      "purchaseId":"1",
                      "supplierId":"1",
                      "purchaseDate":"2021-01-01",
                      "productName":"Item A",
                      "unitPrice":"$10",
                      "quantity":"10",
                      "totalAmount":"$100"
                      },{
                        "purchaseId":"1",
                        "supplierId":"1",
                        "purchaseDate":"2021-01-01",
                        "productName":"Item A",
                        "unitPrice":"$10",
                        "quantity":"10",
                        "totalAmount":"$100"
                        },{
                          "purchaseId":"1",
                          "supplierId":"1",
                          "purchaseDate":"2021-01-01",
                          "productName":"Item A",
                          "unitPrice":"$10",
                          "quantity":"10",
                          "totalAmount":"$100"
                          },{
                            "purchaseId":"1",
                            "supplierId":"1",
                            "purchaseDate":"2021-01-01",
                            "productName":"Item A",
                            "unitPrice":"$10",
                            "quantity":"10",
                            "totalAmount":"$100"
                            },{
                              "purchaseId":"1",
                              "supplierId":"1",
                              "purchaseDate":"2021-01-01",
                              "productName":"Item A",
                              "unitPrice":"$10",
                              "quantity":"10",
                              "totalAmount":"$100"
                              },{
                                "purchaseId":"1",
                                "supplierId":"1",
                                "purchaseDate":"2021-01-01",
                                "productName":"Item A",
                                "unitPrice":"$10",
                                "quantity":"10",
                                "totalAmount":"$100"
                                },{
                                  "purchaseId":"1",
                                  "supplierId":"1",
                                  "purchaseDate":"2021-01-01",
                                  "productName":"Item A",
                                  "unitPrice":"$10",
                                  "quantity":"10",
                                  "totalAmount":"$100"
                                  },{
                                    "purchaseId":"1",
                                    "supplierId":"1",
                                    "purchaseDate":"2021-01-01",
                                    "productName":"Item A",
                                    "unitPrice":"$10",
                                    "quantity":"10",
                                    "totalAmount":"$100"
                                    },{
                                      "purchaseId":"1",
                                      "supplierId":"1",
                                      "purchaseDate":"2021-01-01",
                                      "productName":"Item A",
                                      "unitPrice":"$10",
                                      "quantity":"10",
                                      "totalAmount":"$100"
                                      },{
                                        "purchaseId":"1",
                                        "supplierId":"1",
                                        "purchaseDate":"2021-01-01",
                                        "productName":"Item A",
                                        "unitPrice":"$10",
                                        "quantity":"10",
                                        "totalAmount":"$100"
                                        },{
                                          "purchaseId":"1",
                                          "supplierId":"1",
                                          "purchaseDate":"2021-01-01",
                                          "productName":"Item A",
                                          "unitPrice":"$10",
                                          "quantity":"10",
                                          "totalAmount":"$100"
                                          },{
                                            "purchaseId":"1",
                                            "supplierId":"1",
                                            "purchaseDate":"2021-01-01",
                                            "productName":"Item A",
                                            "unitPrice":"$10",
                                            "quantity":"10",
                                            "totalAmount":"$100"
                                            },{
                                              "purchaseId":"1",
                                              "supplierId":"1",
                                              "purchaseDate":"2021-01-01",
                                              "productName":"Item A",
                                              "unitPrice":"$10",
                                              "quantity":"10",
                                              "totalAmount":"$100"
                                              },{
                                                "purchaseId":"1",
                                                "supplierId":"1",
                                                "purchaseDate":"2021-01-01",
                                                "productName":"Item A",
                                                "unitPrice":"$10",
                                                "quantity":"10",
                                                "totalAmount":"$100"
                                                },{
                                                  "purchaseId":"1",
                                                  "supplierId":"1",
                                                  "purchaseDate":"2021-01-01",
                                                  "productName":"Item A",
                                                  "unitPrice":"$10",
                                                  "quantity":"10",
                                                  "totalAmount":"$100"
                                                  },{
            "purchaseId":"1",
            "supplierId":"1",
            "purchaseDate":"2021-01-01",
            "productName":"Item A",
            "unitPrice":"$10",
            "quantity":"10",
            "totalAmount":"$100"
            },{
              "purchaseId":"1",
              "supplierId":"1",
              "purchaseDate":"2021-01-01",
              "productName":"Item A",
              "unitPrice":"$10",
              "quantity":"10",
              "totalAmount":"$100"
              },{
                "purchaseId":"1",
                "supplierId":"1",
                "purchaseDate":"2021-01-01",
                "productName":"Item A",
                "unitPrice":"$10",
                "quantity":"10",
                "totalAmount":"$100"
                },{
                  "purchaseId":"1",
                  "supplierId":"1",
                  "purchaseDate":"2021-01-01",
                  "productName":"Item A",
                  "unitPrice":"$10",
                  "quantity":"10",
                  "totalAmount":"$100"
                  },{
                    "purchaseId":"1",
                    "supplierId":"1",
                    "purchaseDate":"2021-01-01",
                    "productName":"Item A",
                    "unitPrice":"$10",
                    "quantity":"10",
                    "totalAmount":"$100"
                    },{
                      "purchaseId":"1",
                      "supplierId":"1",
                      "purchaseDate":"2021-01-01",
                      "productName":"Item A",
                      "unitPrice":"$10",
                      "quantity":"10",
                      "totalAmount":"$100"
                      },{
                        "purchaseId":"1",
                        "supplierId":"1",
                        "purchaseDate":"2021-01-01",
                        "productName":"Item A",
                        "unitPrice":"$10",
                        "quantity":"10",
                        "totalAmount":"$100"
                        },{
            "purchaseId":"1",
            "supplierId":"1",
            "purchaseDate":"2021-01-01",
            "productName":"Item A",
            "unitPrice":"$10",
            "quantity":"10",
            "totalAmount":"$100"
            },{
              "purchaseId":"1",
              "supplierId":"1",
              "purchaseDate":"2021-01-01",
              "productName":"Item A",
              "unitPrice":"$10",
              "quantity":"10",
              "totalAmount":"$100"
              },{
                "purchaseId":"1",
                "supplierId":"1",
                "purchaseDate":"2021-01-01",
                "productName":"Item A",
                "unitPrice":"$10",
                "quantity":"10",
                "totalAmount":"$100"
                },{
                  "purchaseId":"1",
                  "supplierId":"1",
                  "purchaseDate":"2021-01-01",
                  "productName":"Item A",
                  "unitPrice":"$10",
                  "quantity":"10",
                  "totalAmount":"$100"
                  },{
                    "purchaseId":"1",
                    "supplierId":"1",
                    "purchaseDate":"2021-01-01",
                    "productName":"Item A",
                    "unitPrice":"$10",
                    "quantity":"10",
                    "totalAmount":"$100"
                    },{
                      "purchaseId":"1",
                      "supplierId":"1",
                      "purchaseDate":"2021-01-01",
                      "productName":"Item A",
                      "unitPrice":"$10",
                      "quantity":"10",
                      "totalAmount":"$100"
                      },{
                        "purchaseId":"1",
                        "supplierId":"1",
                        "purchaseDate":"2021-01-01",
                        "productName":"Item A",
                        "unitPrice":"$10",
                        "quantity":"10",
                        "totalAmount":"$100"
                        },{
                          "purchaseId":"1",
                          "supplierId":"1",
                          "purchaseDate":"2021-01-01",
                          "productName":"Item A",
                          "unitPrice":"$10",
                          "quantity":"10",
                          "totalAmount":"$100"
                          },{
                            "purchaseId":"1",
                            "supplierId":"1",
                            "purchaseDate":"2021-01-01",
                            "productName":"Item A",
                            "unitPrice":"$10",
                            "quantity":"10",
                            "totalAmount":"$100"
                            },{
                              "purchaseId":"1",
                              "supplierId":"1",
                              "purchaseDate":"2021-01-01",
                              "productName":"Item A",
                              "unitPrice":"$10",
                              "quantity":"10",
                              "totalAmount":"$100"
                              },{
                                "purchaseId":"1",
                                "supplierId":"1",
                                "purchaseDate":"2021-01-01",
                                "productName":"Item A",
                                "unitPrice":"$10",
                                "quantity":"10",
                                "totalAmount":"$100"
                                },{
                                  "purchaseId":"1",
                                  "supplierId":"1",
                                  "purchaseDate":"2021-01-01",
                                  "productName":"Item A",
                                  "unitPrice":"$10",
                                  "quantity":"10",
                                  "totalAmount":"$100"
                                  },{
                                    "purchaseId":"1",
                                    "supplierId":"1",
                                    "purchaseDate":"2021-01-01",
                                    "productName":"Item A",
                                    "unitPrice":"$10",
                                    "quantity":"10",
                                    "totalAmount":"$100"
                                    },{
                                      "purchaseId":"1",
                                      "supplierId":"1",
                                      "purchaseDate":"2021-01-01",
                                      "productName":"Item A",
                                      "unitPrice":"$10",
                                      "quantity":"10",
                                      "totalAmount":"$100"
                                      },{
                                        "purchaseId":"1",
                                        "supplierId":"1",
                                        "purchaseDate":"2021-01-01",
                                        "productName":"Item A",
                                        "unitPrice":"$10",
                                        "quantity":"10",
                                        "totalAmount":"$100"
                                        },{
                                          "purchaseId":"1",
                                          "supplierId":"1",
                                          "purchaseDate":"2021-01-01",
                                          "productName":"Item A",
                                          "unitPrice":"$10",
                                          "quantity":"10",
                                          "totalAmount":"$100"
                                          },{
                                            "purchaseId":"1",
                                            "supplierId":"1",
                                            "purchaseDate":"2021-01-01",
                                            "productName":"Item A",
                                            "unitPrice":"$10",
                                            "quantity":"10",
                                            "totalAmount":"$100"
                                            },{
                                              "purchaseId":"1",
                                              "supplierId":"1",
                                              "purchaseDate":"2021-01-01",
                                              "productName":"Item A",
                                              "unitPrice":"$10",
                                              "quantity":"10",
                                              "totalAmount":"$100"
                                              },{
                                                "purchaseId":"1",
                                                "supplierId":"1",
                                                "purchaseDate":"2021-01-01",
                                                "productName":"Item A",
                                                "unitPrice":"$10",
                                                "quantity":"10",
                                                "totalAmount":"$100"
                                                },{
                                                  "purchaseId":"1",
                                                  "supplierId":"1",
                                                  "purchaseDate":"2021-01-01",
                                                  "productName":"Item A",
                                                  "unitPrice":"$10",
                                                  "quantity":"10",
                                                  "totalAmount":"$100"
                                                  },{
                                                    "purchaseId":"1",
                                                    "supplierId":"1",
                                                    "purchaseDate":"2021-01-01",
                                                    "productName":"Item A",
                                                    "unitPrice":"$10",
                                                    "quantity":"10",
                                                    "totalAmount":"$100"
                                                    },{
                                                      "purchaseId":"1",
                                                      "supplierId":"1",
                                                      "purchaseDate":"2021-01-01",
                                                      "productName":"Item A",
                                                      "unitPrice":"$10",
                                                      "quantity":"10",
                                                      "totalAmount":"$100"
                                                      },{
                                                        "purchaseId":"1",
                                                        "supplierId":"1",
                                                        "purchaseDate":"2021-01-01",
                                                        "productName":"Item A",
                                                        "unitPrice":"$10",
                                                        "quantity":"10",
                                                        "totalAmount":"$100"
                                                        },{
                                                          "purchaseId":"1",
                                                          "supplierId":"1",
                                                          "purchaseDate":"2021-01-01",
                                                          "productName":"Item A",
                                                          "unitPrice":"$10",
                                                          "quantity":"10",
                                                          "totalAmount":"$100"
                                                          },{
                                                            "purchaseId":"1",
                                                            "supplierId":"1",
                                                            "purchaseDate":"2021-01-01",
                                                            "productName":"Item A",
                                                            "unitPrice":"$10",
                                                            "quantity":"10",
                                                            "totalAmount":"$100"
                                                            },{
                                                              "purchaseId":"1",
                                                              "supplierId":"1",
                                                              "purchaseDate":"2021-01-01",
                                                              "productName":"Item A",
                                                              "unitPrice":"$10",
                                                              "quantity":"10",
                                                              "totalAmount":"$100"
                                                              },{
                                                                "purchaseId":"1",
                                                                "supplierId":"1",
                                                                "purchaseDate":"2021-01-01",
                                                                "productName":"Item A",
                                                                "unitPrice":"$10",
                                                                "quantity":"10",
                                                                "totalAmount":"$100"
                                                                },]} />
            </div>
        </div>
        </main>
    </div>
  )
}

export default Purchase;
import React from 'react'
import Sidebar from './SideBar'
import styles from './Inventory.module.css'
import InventoryTable from './InventoryTable'
const Inventory = () => {
  return (
    <div className={styles.inventory}>
        <Sidebar />
        <main className={styles.main}>
          <h1>Inventory</h1>
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
          <div className={styles.table}>
            <InventoryTable inventory={[{
              "name":"Item A",
              "type":"Raw Material",
              "openingBalance":"100",
              "purchased":"10",
              "sold":"0",
              "closingBalance":"110"
              },{
                "name":"Item A",
                "type":"Raw Material",
                "openingBalance":"100",
                "purchased":"10",
                "sold":"0",
                "closingBalance":"110"
                },{
                  "name":"Item A",
                  "type":"Raw Material",
                  "openingBalance":"100",
                  "purchased":"10",
                  "sold":"0",
                  "closingBalance":"110"
                  },{
                    "name":"Item A",
                    "type":"Raw Material",
                    "openingBalance":"100",
                    "purchased":"10",
                    "sold":"0",
                    "closingBalance":"110"
                    },{
                      "name":"Item A",
                      "type":"Raw Material",
                      "openingBalance":"100",
                      "purchased":"10",
                      "sold":"0",
                      "closingBalance":"110"
                      },{
                        "name":"Item A",
                        "type":"Raw Material",
                        "openingBalance":"100",
                        "purchased":"10",
                        "sold":"0",
                        "closingBalance":"110"
                        },{
                          "name":"Item A",
                          "type":"Raw Material",
                          "openingBalance":"100",
                          "purchased":"10",
                          "sold":"0",
                          "closingBalance":"110"
                          },{
                            "name":"Item A",
                            "type":"Raw Material",
                            "openingBalance":"100",
                            "purchased":"10",
                            "sold":"0",
                            "closingBalance":"110"
                            },{
                              "name":"Item A",
                              "type":"Raw Material",
                              "openingBalance":"100",
                              "purchased":"10",
                              "sold":"0",
                              "closingBalance":"110"
                              },{
                                "name":"Item A",
                                "type":"Raw Material",
                                "openingBalance":"100",
                                "purchased":"10",
                                "sold":"0",
                                "closingBalance":"110"
                                },{
                                  "name":"Item A",
                                  "type":"Raw Material",
                                  "openingBalance":"100",
                                  "purchased":"10",
                                  "sold":"0",
                                  "closingBalance":"110"
                                  },{
                                    "name":"Item A",
                                    "type":"Raw Material",
                                    "openingBalance":"100",
                                    "purchased":"10",
                                    "sold":"0",
                                    "closingBalance":"110"
                                    },{
                                      "name":"Item A",
                                      "type":"Raw Material",
                                      "openingBalance":"100",
                                      "purchased":"10",
                                      "sold":"0",
                                      "closingBalance":"110"
                                      },{
                                        "name":"Item A",
                                        "type":"Raw Material",
                                        "openingBalance":"100",
                                        "purchased":"10",
                                        "sold":"0",
                                        "closingBalance":"110"
                                        },{
                                          "name":"Item A",
                                          "type":"Raw Material",
                                          "openingBalance":"100",
                                          "purchased":"10",
                                          "sold":"0",
                                          "closingBalance":"110"
                                          },{
                                            "name":"Item A",
                                            "type":"Raw Material",
                                            "openingBalance":"100",
                                            "purchased":"10",
                                            "sold":"0",
                                            "closingBalance":"110"
                                            },{
                                              "name":"Item A",
                                              "type":"Raw Material",
                                              "openingBalance":"100",
                                              "purchased":"10",
                                              "sold":"0",
                                              "closingBalance":"110"
                                              },{
                                                "name":"Item A",
                                                "type":"Raw Material",
                                                "openingBalance":"100",
                                                "purchased":"10",
                                                "sold":"0",
                                                "closingBalance":"110"
                                                },{
                                                  "name":"Item A",
                                                  "type":"Raw Material",
                                                  "openingBalance":"100",
                                                  "purchased":"10",
                                                  "sold":"0",
                                                  "closingBalance":"110"
                                                  },{
                                                    "name":"Item A",
                                                    "type":"Raw Material",
                                                    "openingBalance":"100",
                                                    "purchased":"10",
                                                    "sold":"0",
                                                    "closingBalance":"110"
                                                    },{
                                                      "name":"Item A",
                                                      "type":"Raw Material",
                                                      "openingBalance":"100",
                                                      "purchased":"10",
                                                      "sold":"0",
                                                      "closingBalance":"110"
                                                      },{
                                                        "name":"Item A",
                                                        "type":"Raw Material",
                                                        "openingBalance":"100",
                                                        "purchased":"10",
                                                        "sold":"0",
                                                        "closingBalance":"110"
                                                        },]} />
            </div>
        </div>
        </main>
    </div>
  )
}

export default Inventory
import React from 'react'
import styles from "../ui/button.module.css";
import { useRouter } from "next/navigation";
const Contactme = () => {
    const route = useRouter()
  return (
    <>
       <div className="py-5">
          <button className={styles.btn} onClick={() => route.push("/contact")}>
            Contact Me
          </button>
        </div>
    </>
  )
}

export default Contactme

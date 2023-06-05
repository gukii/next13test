import { ReactNode } from 'react'
import Link from 'next/link'

import styles from './layout.module.css'

export default function Layout({ children } : { children: ReactNode }) {
   return (
      <html lang="en">
      <head>
         <title>Next.js</title>
      </head>
      <body>
         <div
            className={styles.header}
         >From layout</div>

         <div className={styles.header}>

           <div>
               <h1 style={{ marginTop: 0 }}>From layout</h1>
              </div>
             <div>
               <Link href="/profile/teacher">navigate to teacher profile</Link>
              </div>
              <div>
                <Link href="/profile/student">navigate to student profile</Link>
              </div>
              <div>
                <Link href="/poke">navigate to poke page for fetch</Link>
              </div>
            </div>

         <div>
            {children}
         </div>
      </body>
      </html>)
}


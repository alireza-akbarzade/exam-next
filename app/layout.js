import { Inter } from 'next/font/google'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Car Store',
  description: 'This is my Car store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800/,00i,900,900i" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Rufina:400,700" rel="stylesheet" />
        <link rel="shortcut icon" type="image/icon" href="/assets/logo/favicon.png" />
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/linearicons.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/bootsnav.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body className={inter.className}>

       <Navbar/>
        
        {children}

        <Footer/>


      </body>
    </html>
  )
}

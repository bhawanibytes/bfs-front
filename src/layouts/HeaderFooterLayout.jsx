import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Testimonials from '@/components/Testimonials'

const HeaderFooterLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        <main className="py-6 px-40">
            {children}
        </main>
        <Testimonials />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default HeaderFooterLayout
import { Rochester } from 'next/font/google'

// Configure the Rochester font
const rochester = Rochester({
  subsets: ['latin'], // Define subsets as needed
  weight: '400', // Specify the weight (Rochester only has 400)
})

export const metadata = {
  title: 'Warm Words',
  description: 'Ekspresikan perasaan dengan template unik',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={`wrapper-body ${rochester.className}`}>
      <div className="min-h-screen">{children}</div>
    </section>
  )
}

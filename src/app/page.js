import { Converters } from '@/components/Converters'
import { Markets } from '@/components/Markets'
import { AppProvider } from '@/context/AppContext'
import Image from 'next/image'

export default function Home() {
  return (
    <AppProvider>
    <main className="flex min-h-screen min-w-screen flex-row items-center justify-between p-24">
      <div>
  <Markets/>
  </div>
  <div>
  <Converters/>
  </div>
    </main>
    </AppProvider>
  )
}

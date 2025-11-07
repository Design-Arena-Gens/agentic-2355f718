import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Google My Business Ad Optimizer - Riyadh Curtains',
  description: 'Google My Business বিজ্ঞাপন অপটিমাইজেশন টুল - রিয়াদ পর্দা ব্যবসার জন্য কল বাড়ানোর সমাধান',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" dir="ltr">
      <body>{children}</body>
    </html>
  )
}

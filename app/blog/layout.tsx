import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: {
    default: 'مدونة شركة العالمية للعوازل - دليل عزل الفوم والأسطح بالرياض',
    template: '%s | مدونة العالمية للعوازل - نصائح وحلول العزل'
  },
  description: 'مدونة شركة العالمية للعوازل المتخصصة في عزل الفوم والأسطح بالرياض 📚 مقالات شاملة ونصائح احترافية حول العزل المائي والحراري، حلول مشاكل التسربات، وطرق توفير الكهرباء. دليلك المتكامل لعزل آمن ومضمون.',
  keywords: [
    // Blog-specific Keywords
    'مدونة عزل الفوم', 'نصائح عزل الأسطح', 'مقالات العزل المائي', 'دليل العزل الحراري',
    'مشاكل تسربات المياه', 'حلول ارتفاع فاتورة الكهرباء',

    // How-to Keywords
    'كيفية عزل السطح', 'طريقة عزل الفوم', 'خطوات العزل المائي',
    'أفضل مواد العزل', 'اختيار شركة العزل المناسبة',

    // Problem-solving Keywords
    'علاج تشققات السطح', 'منع تسرب مياه الأمطار', 'حماية المنزل من الحرارة',
    'أضرار الرطوبة على المباني', 'صيانة عزل الأسطح',

    // Comparison Keywords
    'مقارنة أنواع العزل', 'الفرق بين العزل المائي والحراري', 'سعر عزل الفوم مقابل العزل التقليدي',

    // Seasonal Keywords
    'عزل الأسطح قبل الشتاء', 'تجهيز المنزل للصيف', 'أهمية العزل في موسم الأمطار',

    // General Keywords
    'عزل فوم بالرياض', 'شركة عزل بالخرج', 'أفضل شركات العزل'
  ],
  openGraph: {
    title: 'مدونة شركة العالمية للعوازل - دليل عزل الفوم والأسطح بالرياض',
    description: 'مدونة شركة العالمية للعوازل المتخصصة في عزل الفوم والأسطح بالرياض. مقالات شاملة ونصائح احترافية حول العزل المائي والحراري.',
    type: 'website',
    locale: 'ar_SA',
    url: 'https://elazzl.sa/blog',
    siteName: 'مدونة شركة العالمية للعوازل',
    images: [{
      url: '/insulation-hero.avif',
      width: 1200,
      height: 630,
      alt: 'مدونة شركة العالمية للعوازل - نصائح وحلول العزل بالرياض',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مدونة شركة العالمية للعوازل - دليل عزل الفوم والأسطح بالرياض',
    description: 'مدونة شركة العالمية للعوازل المتخصصة في عزل الفوم والأسطح بالرياض. مقالات شاملة ونصائح احترافية.',
    images: ['/insulation-hero.avif'],
  },
  alternates: {
    canonical: 'https://elazzl.sa/blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

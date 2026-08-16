import { Metadata } from 'next'
import Link from 'next/link'
import { Thermometer, Phone, MessageCircle, CheckCircle, Shield, Zap, Home, Award } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
    IntroBlock,
    Statistics,
    ExpertTips,
    ExtendedFAQ,
    CTABanner,
    RelatedServices
} from '@/components/ContentSections'

import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'شركة عزل حراري بالرياض | 0551777962 | ضمان 15 سنة| شركة العالمية للعوازل',
    description: 'شركة عزل حراري بالرياض متخصصة في عزل الأسطح من الحرارة ✅ توفير 50% من الكهرباء ✅ حماية من الشمس ✅ ضمان 15 سنوات. اتصل: 0551777962',
    keywords: ['شركة عزل حراري بالرياض', 'عزل الحرارة', 'عزل الأسطح من الشمس', 'توفير الكهرباء'],
}

export default function ThermalInsulationPage() {
    return (
        <>
            <StructuredData
                type="service"
                pageData={{
                    title: 'شركة عزل حراري بالرياض | 0551777962 | ضمان 15 سنة| شركة العالمية للعوازل',
                    description: 'شركة عزل حراري بالرياض متخصصة في عزل الأسطح من الحرارة ✅ توفير 50% من الكهرباء ✅ حماية من الشمس ✅ ضمان 15 سنوات. اتصل: 0551777962',
                    url: 'https://elazzl.sa/services/thermal-insulation'
                }}
                aggregateRating={{
                    ratingValue: 4.9,
                    reviewCount: 39412
                }}
                reviews={[
                    {
                        author: 'سعد القحطاني',
                        reviewBody: 'خدمة ممتازة وعزل حراري فرق معي كثير في فاتورة الكهرباء.',
                        reviewRating: 5,
                        datePublished: '2025-02-15'
                    },
                    {
                        author: 'فهد الدوسري',
                        reviewBody: 'تعامل راقي وشغل نظيف، انصح بهم.',
                        reviewRating: 5,
                        datePublished: '2025-01-20'
                    }
                ]}
            />
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-brand-orange-500 rounded-full filter blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-2 mb-6 text-sm">
                                <Link href="/services" className="text-gray-300 hover:text-white">خدماتنا</Link>
                                <span className="text-gray-400">/</span>
                                <span className="text-brand-orange-400">عزل حراري</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                عزل حراري بالرياض
                                <span className="block text-brand-orange-400 mt-3">وفر 50% من الكهرباء</span>
                            </h1>

                            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                                العزل الحراري ضروري في مناخ الرياض الحار. نخفض درجة حرارة سطح المبنى ونوفر لك حتى 50% من فاتورة الكهرباء شهرياً مع ضمان 10 سنوات.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:0551777962" className="flex items-center justify-center gap-2 bg-brand-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-orange-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform">
                                    <Phone className="w-5 h-5" />
                                    اتصل: 0551777962
                                </a>
                                <a href="https://wa.me/966507067378" className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg">
                                    <MessageCircle className="w-5 h-5" />
                                    واتساب
                                </a>
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 text-center border border-white/10">
                                <Thermometer className="w-16 h-16 text-brand-orange-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-4">عزل حراري معتمد</h3>
                                <div className="space-y-4 text-right">
                                    <div className="flex justify-between border-b border-white/20 pb-3">
                                        <span>السعر يبدأ من</span>
                                        <span className="font-bold text-brand-orange-300">20 ريال/م²</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/20 pb-3">
                                        <span>توفير الكهرباء</span>
                                        <span className="font-bold text-green-400">حتى 50%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>الضمان</span>
                                        <span className="font-bold text-white">10 سنوات</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <Statistics
                stats={[
                    { value: '50', label: 'توفير كهرباء', suffix: '%' },
                    { value: '-15', label: 'درجة حرارة أقل', suffix: '°C' },
                    { value: '10', label: 'سنوات ضمان' },
                    { value: '+500', label: 'منزل معزول' },
                ]}
                variant="light"
            />

            {/* Intro Block with Image */}
            <IntroBlock
                title="أهمية العزل الحراري في الرياض"
                subtitle="لماذا تحتاج لعزل سطح منزلك؟"
                paragraphs={[
                    "في مناخ الرياض الصحراوي حيث تصل درجات الحرارة صيفاً إلى أكثر من 50 درجة مئوية، يمتص سطح المبنى كمية هائلة من الحرارة التي تنتقل إلى داخل المنزل وترفع الحمل على أجهزة التكييف.",
                    "العزل الحراري يخلق حاجزاً فعالاً يمنع انتقال هذه الحرارة، مما يحافظ على برودة المبنى ويوفر استهلاك الكهرباء بشكل كبير. تكلفة العزل تُسترد خلال 2-3 سنوات من التوفير في فواتير الكهرباء.",
                    "نستخدم أحدث تقنيات العزل الحراري مثل الفوم البولي يوريثان والألواح العازلة التي تضمن لك عزلاً مستداماً وفعالاً لسنوات طويلة."
                ]}
                image="/services/serv1.jpeg"
                imageAlt="عزل حراري للأسطح بالرياض"
                highlights={[
                    { icon: <Zap className="w-5 h-5" />, text: 'توفير 50% من الطاقة' },
                    { icon: <Thermometer className="w-5 h-5" />, text: 'خفض الحرارة 15 درجة' },
                    { icon: <Shield className="w-5 h-5" />, text: 'حماية أجهزة التكييف' },
                    { icon: <Home className="w-5 h-5" />, text: 'بيئة منزلية مريحة' },
                ]}
            />

            {/* Expert Tips */}
            <ExpertTips
                title="نصائح للعزل الحراري"
                subtitle="كيف تختار العزل المناسب؟"
                tips={[
                    { title: 'الكثافة أهم من السماكة', description: 'تأكد من استخدام مواد عزل بكثافة عالية لضمان أداء أفضل.' },
                    { title: 'العزل المائي والحراري معاً', description: 'أفضل نظام هو الذي يجمع بين العزلين في طبقة واحدة مثل الفوم.' },
                    { title: 'حماية العزل', description: 'يجب تغطية العزل بطبقة حماية من الأشعة فوق البنفسجية لضمان استدامته.' },
                    { title: 'اللون الفاتح', description: 'استخدام دهانات فاتحة للسطح يساعد في عكس أشعة الشمس.' },
                ]}
            />

            {/* FAQ */}
            <ExtendedFAQ
                title="أسئلة شائعة عن العزل الحراري"
                subtitle="معلومات تهمك"
                faqs={[
                    {
                        question: 'كم يوفر العزل الحراري من فاتورة الكهرباء؟',
                        answer: 'تشير الدراسات والتجارب العملية إلى أن العزل الحراري الجيد للأسطح يوفر ما بين 30% إلى 50% من استهلاك الطاقة المخصص للتكييف في فصل الصيف.'
                    },
                    {
                        question: 'ما هو أفضل نوع عزل للمنازل في الرياض؟',
                        answer: 'فوم البولي يوريثان يعتبر الخيار الأفضل لأنه يوفر عزلاً حرارياً ومائياً في آن واحد، ويغطي كامل السطح بدون فواصل.'
                    },
                    {
                        question: 'هل العزل الحراري ضروري للمباني الجديدة؟',
                        answer: 'نعم، كود البناء السعودي الجديد يلزم بتركيب العزل الحراري لجميع المباني الجديدة لترشيد استهلاك الطاقة.'
                    },
                ]}
            />

            {/* CTA */}
            <CTABanner
                title="جاهز لتوفير الكهرباء؟"
                description="احصل على معاينة مجانية وتقرير حراري لسطح منزلك"
                primaryButton={{ text: '📞 اتصل الآن', href: 'tel:0551777962' }}
                secondaryButton={{ text: 'واتساب', href: 'https://wa.me/966507067378' }}
            />

            {/* Related Services */}
            <RelatedServices
                title="خدمات أخرى قد تهمك"
                services={[
                    { title: 'عزل فوم', description: 'الحل المتكامل للعزل', href: '/services/foam-insulation', icon: <Award className="w-6 h-6" /> },
                    { title: 'عزل مائي', description: 'حماية من التسربات', href: '/services/waterproof-insulation', icon: <CheckCircle className="w-6 h-6" /> },
                    { title: 'عزل شينكو', description: 'للمستودعات والهناجر', href: '/services/roof-insulation-shinko', icon: <Home className="w-6 h-6" /> },
                ]}
            />

            <Footer />
        </>
    )
}

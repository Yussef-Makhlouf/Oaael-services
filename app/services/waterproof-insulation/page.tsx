import { Metadata } from 'next'
import Link from 'next/link'
import { Droplets, Phone, MessageCircle, CheckCircle, Shield, Thermometer, Home, Factory, Users, Zap, Award } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
    IntroBlock,
    DetailedSection,
    WorkStepsTimeline,
    ComparisonTable,
    ExtendedFAQ,
    CommonMistakes,
    ExpertTips,
    Statistics,
    CTABanner,
    RelatedServices
} from '@/components/ContentSections'
import {
    CaseStudy,
    TestimonialsCarousel,
    PricingCards,
    AreasCovered,
    ImageGallery
} from '@/components/AdvancedSections'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'شركة عزل مائي بالرياض | 0551777962 | ضمان 15 سنة| شركة العالمية للعوازل',
    description: 'شركة عزل مائي بالرياض متخصصة في منع تسرب المياه والرطوبة ✅ عزل الأسطح والحمامات والخزانات ✅ ضمان 7 سنوات ✅ مواد بيتومين معتمدة. اتصل: 0551777962',
    keywords: ['شركة عزل مائي بالرياض', 'عزل مائي للأسطح', 'عزل ضد الماء', 'عزل الرطوبة', 'عزل بيتومين', 'منع تسرب المياه'],
}

export default function WaterproofInsulationPage() {
    return (
        <>
            <StructuredData
                type="service"
                pageData={{
                    title: 'شركة عزل مائي بالرياض | حماية من التسربات | ضمان 10 سنوات',
                    description: 'شركة عزل مائي بالرياض متخصصة في منع تسرب المياه والرطوبة ✅ عزل الأسطح والحمامات والخزانات ✅ ضمان 7 سنوات ✅ مواد بيتومين معتمدة.',
                    url: 'https://elazzl.sa/services/waterproof-insulation'
                }}
                aggregateRating={{
                    ratingValue: 4.8,
                    reviewCount: 42156
                }}
                reviews={[
                    {
                        author: 'خالد العنزي',
                        reviewBody: 'كان عندي تسرب في السطح وحلوه لي بشكل نهائي. شكراً لكم.',
                        reviewRating: 5,
                        datePublished: '2025-02-10'
                    },
                    {
                        author: 'محمد الشهراني',
                        reviewBody: 'شركة محترمة ومواعيد دقيقة.',
                        reviewRating: 5,
                        datePublished: '2025-01-05'
                    }
                ]}
            />
            <Navbar />

            {/* ========================================
          Hero Section
      ======================================== */}
            <section className="relative bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20 overflow-hidden">
                    <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-brand-orange-500 rounded-full filter blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-2 mb-6 text-sm">
                                <Link href="/" className="text-gray-300 hover:text-white">الرئيسية</Link>
                                <span className="text-gray-400">/</span>
                                <Link href="/services" className="text-gray-300 hover:text-white">خدماتنا</Link>
                                <span className="text-gray-400">/</span>
                                <span className="text-blue-400">عزل مائي</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                عزل مائي بالرياض
                                <span className="block text-blue-400 mt-3">حماية 100% من التسربات</span>
                            </h1>

                            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                                نقدم خدمة العزل المائي للأسطح والحمامات والمطابخ والأساسات باستخدام أفضل مواد العزل المائي العالمية. نمنع تسرب المياه بنسبة 100% مع ضمان يصل إلى 7 سنوات.
                            </p>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-blue-300">100%</div>
                                    <div className="text-sm text-gray-300">منع التسرب</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-blue-300">7</div>
                                    <div className="text-sm text-gray-300">سنوات ضمان</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-blue-300">+800</div>
                                    <div className="text-sm text-gray-300">مشروع ناجح</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:0551777962"
                                    className="flex items-center justify-center gap-2 bg-brand-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-orange-600 transition-all shadow-lg"
                                >
                                    <Phone className="w-5 h-5" />
                                    اتصل: 0551777962
                                </a>
                                <a
                                    href="https://wa.me/966507067378"
                                    className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    واتساب
                                </a>
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <div className="bg-white rounded-3xl p-8 shadow-2xl text-gray-900">
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Droplets className="w-10 h-10 text-blue-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold">عزل مائي معتمد</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-600">السعر يبدأ من</span>
                                        <span className="font-bold text-blue-500 text-xl">30 ريال/م²</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-600">الضمان</span>
                                        <span className="font-bold text-navy-500">7 سنوات</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-gray-600">المعاينة</span>
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">مجانية</span>
                                    </div>
                                </div>

                                <a
                                    href="tel:0551777962"
                                    className="block w-full mt-6 bg-navy-500 text-white text-center py-4 rounded-xl font-bold hover:bg-navy-600 transition-colors"
                                >
                                    احجز معاينة مجانية
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <Statistics
                stats={[
                    { value: '+800', label: 'مشروع عزل مائي' },
                    { value: '15', label: 'سنة خبرة', suffix: '+' },
                    { value: '100', label: 'منع التسرب', suffix: '%' },
                    { value: '7', label: 'سنوات ضمان' },
                ]}
                variant="light"
            />

            {/* Introduction */}
            <IntroBlock
                title="ما هو العزل المائي وأهميته؟"
                subtitle="حماية مبناك من المياه"
                paragraphs={[
                    "العزل المائي هو عملية تطبيق طبقات عازلة على الأسطح والجدران لمنع نفاذ المياه والرطوبة إلى داخل المبنى. يحمي العزل المائي الأسطح والجدران من تسرب مياه الأمطار والرطوبة التي تسبب تلف الخرسانة والعفن وتشوه الدهانات.",
                    "في مناخ الرياض، رغم قلة الأمطار، يعتبر العزل المائي ضرورياً لحماية المباني من الرطوبة الناتجة عن تكثف بخار الماء، تسربات خزانات المياه العلوية، ومياه غسيل الأسطح. كما يحمي من رطوبة التربة في الطوابق السفلية والأقبية.",
                    "نستخدم أفضل مواد العزل المائي مثل البيتومين المعدل، رولات SBS عالية الجودة، والمواد البوليمرية المتطورة التي تتحمل الظروف الجوية القاسية وتدوم لسنوات طويلة."
                ]}
                image="/services/serv4.jpeg"
                imageAlt="عزل مائي بالرياض - تطبيق العزل على السطح"
                highlights={[
                    { icon: <Droplets className="w-5 h-5" />, text: 'منع التسرب 100%' },
                    { icon: <Shield className="w-5 h-5" />, text: 'حماية من الرطوبة' },
                    { icon: <Award className="w-5 h-5" />, text: 'مواد معتمدة' },
                    { icon: <CheckCircle className="w-5 h-5" />, text: 'ضمان 7 سنوات' },
                ]}
            />

            {/* Types of Waterproofing */}
            <DetailedSection
                title="أنواع العزل المائي"
                subtitle="اختر المناسب لمشروعك"
                sections={[
                    {
                        title: "عزل البيتومين (الزفت)",
                        content: "من أقدم وأشهر مواد العزل المائي. يتكون من مادة البيتومين السائلة التي تُطبق ساخنة أو باردة. يتميز بمقاومة ممتازة للماء وسهولة التطبيق. مناسب للأسطح الكبيرة والأساسات. يدوم 10-15 سنة مع الصيانة المناسبة.",
                        image: "/services/serv5.jpeg"
                    },
                    {
                        title: "رولات العزل SBS",
                        content: "رولات مصنوعة من البيتومين المعدل بالمطاط الصناعي (SBS). تتميز بمرونة عالية تتحمل التمدد والانكماش. سهلة التطبيق بالحرارة. مقاومة للأشعة فوق البنفسجية. مثالية للأسطح المعرضة للشمس والأمطار.",
                        image: "/services/ser6.jpeg"
                    },
                    {
                        title: "العزل السائل البوليمري",
                        content: "مادة سائلة تُطبق بالفرشاة أو الرش وتتحول لطبقة مطاطية مستمرة. مرونة فائقة تتحمل التشققات. بدون فواصل أو لحامات. مناسبة للحمامات والمطابخ والأماكن الضيقة.",
                        image: "/services/serv7.jpeg"
                    }
                ]}
            />

            {/* Work Steps */}
            <WorkStepsTimeline
                title="خطوات تنفيذ العزل المائي"
                subtitle="عملية احترافية"
                steps={[
                    { number: 1, title: 'فحص السطح', description: 'نفحص السطح للتأكد من عدم وجود تسربات نشطة ونحدد المناطق التي تحتاج إصلاح', icon: <Users className="w-6 h-6" /> },
                    { number: 2, title: 'تنظيف السطح', description: 'تنظيف شامل للسطح من الأتربة والشوائب وتجفيفه تماماً قبل العزل', icon: <Zap className="w-6 h-6" /> },
                    { number: 3, title: 'إصلاح التشققات', description: 'معالجة الشقوق والفجوات بمادة إيبوكسي أو سمنت بوليمري', icon: <Shield className="w-6 h-6" /> },
                    { number: 4, title: 'تطبيق الطبقة الأولى', description: 'تطبيق البرايمر ثم الطبقة الأولى من مادة العزل', icon: <Droplets className="w-6 h-6" /> },
                    { number: 5, title: 'الطبقة التعزيزية', description: 'تطبيق طبقة ثانية مع شبك تعزيز للأماكن الحرجة', icon: <Award className="w-6 h-6" /> },
                    { number: 6, title: 'التسليم والضمان', description: 'فحص نهائي وتسليم شهادة ضمان 7 سنوات', icon: <CheckCircle className="w-6 h-6" /> },
                ]}
            />

            {/* Comparison Table */}
            <ComparisonTable
                title="مقارنة مواد العزل المائي"
                subtitle="اختر الأفضل لمشروعك"
                headers={['رولات SBS', 'البيتومين السائل', 'البوليمر السائل']}
                recommendedIndex={0}
                rows={[
                    { feature: 'مقاومة الماء', options: ['ممتاز ⭐⭐⭐⭐⭐', 'ممتاز ⭐⭐⭐⭐⭐', 'ممتاز ⭐⭐⭐⭐⭐'] },
                    { feature: 'المرونة', options: ['عالية جداً', 'متوسطة', 'عالية جداً'] },
                    { feature: 'العمر الافتراضي', options: ['15-20 سنة', '10-15 سنة', '12-15 سنة'] },
                    { feature: 'مناسب للأسطح', options: [true, true, true] },
                    { feature: 'مناسب للحمامات', options: [true, false, true] },
                    { feature: 'سهولة التطبيق', options: ['متوسطة', 'سهل', 'سهل'] },
                    { feature: 'السعر (ريال/م²)', options: ['30-35', '20-25', '35'] },
                ]}
            />

            {/* Gallery */}
            <ImageGallery
                title="معرض مشاريع العزل المائي"
                subtitle="صور حقيقية من مواقع العمل"
                images={[
                    { src: '/services/serv8.jpeg', alt: 'عزل مائي سطح', title: 'عزل سطح مبلط', location: 'حي النرجس' },
                    { src: '/services/serv9.jpeg', alt: 'عزل حمامات', title: 'عزل مائي للحمامات', location: 'الرياض' },
                    { src: '/services/serv10.jpeg', alt: 'عزل بيتومين', title: 'عزل قواعد وأساسات', location: 'حي الملقا' },
                    { src: '/services/serv11.jpeg', alt: 'عزل مسبح', title: 'عزل مسابح', location: 'شمال الرياض' },
                ]}
            />

            {/* Pricing */}
            <PricingCards
                title="أسعار العزل المائي بالرياض"
                subtitle="باقات تناسب احتياجاتك"
                tiers={[
                    {
                        name: 'عزل بيتومين',
                        price: '20',
                        unit: 'ريال/م²',
                        description: 'عزل مائي اقتصادي للأسطح الكبيرة',
                        features: ['طبقة واحدة', 'ضمان 5 سنوات', 'مناسب للأسطح الكبيرة', 'معاينة مجانية'],
                    },
                    {
                        name: 'رولات SBS',
                        price: '30',
                        unit: 'ريال/م²',
                        description: 'الخيار الأمثل للحماية الشاملة',
                        features: ['طبقتين', 'ضمان 7 سنوات', 'مرونة عالية', 'مقاومة للأشعة فوق البنفسجية', 'صيانة سنوية'],
                        highlighted: true,
                        badge: 'الأكثر طلباً',
                    },
                    {
                        name: 'بوليمر متقدم',
                        price: '35',
                        unit: 'ريال/م²',
                        description: 'للحمامات والمطابخ والتفاصيل الدقيقة',
                        features: ['بدون فواصل', 'ضمان 7 سنوات', 'مرونة فائقة', 'مناسب للحمامات', 'تغطية كاملة'],
                    },
                ]}
            />

            {/* Common Mistakes */}
            <CommonMistakes
                title="أخطاء شائعة في العزل المائي"
                subtitle="تجنب هذه الأخطاء"
                mistakes={[
                    {
                        title: 'عدم تجفيف السطح قبل العزل',
                        problem: 'تطبيق العزل على سطح رطب يمنع الالتصاق الجيد ويسبب فشل العزل.',
                        solution: 'يجب تجفيف السطح تماماً والانتظار 48 ساعة بعد أي ترطيب.'
                    },
                    {
                        title: 'تجاهل إصلاح التشققات',
                        problem: 'التشققات غير المعالجة تسبب تسرب المياه حتى بعد تطبيق العزل.',
                        solution: 'يجب معالجة جميع التشققات بمادة إيبوكسي قبل العزل.'
                    },
                    {
                        title: 'توفير المال بطبقة واحدة',
                        problem: 'طبقة واحدة لا توفر الحماية الكافية خاصة في المناطق المعرضة للماء.',
                        solution: 'طبقتين على الأقل للأسطح، 3 طبقات للحمامات.'
                    },
                ]}
            />

            {/* Expert Tips */}
            <ExpertTips
                title="نصائح الخبراء للعزل المائي"
                subtitle="من خبرتنا 15 سنة"
                tips={[
                    { title: 'افحص الميول أولاً', description: 'تأكد من وجود ميول كافية لتصريف المياه قبل العزل' },
                    { title: 'لا تهمل التنظيف', description: 'نظافة السطح تحدد 50% من نجاح العزل' },
                    { title: 'عزل الحمام قبل التشطيب', description: 'عزل الحمامات يجب أن يتم قبل تركيب البلاط' },
                    { title: 'انتبه للتفاصيل', description: 'الفتحات والزوايا والأنابيب نقاط ضعف تحتاج عناية خاصة' },
                    { title: 'اختر الوقت المناسب', description: 'تجنب تطبيق العزل في الأيام الماطرة أو شديدة الرطوبة' },
                    { title: 'اطلب اختبار الماء', description: 'اختبار الماء لمدة 48 ساعة يكشف أي مشاكل قبل التشطيب' },
                ]}
            />

            {/* Testimonials */}
            <TestimonialsCarousel
                title="آراء عملائنا في العزل المائي"
                subtitle="تجارب حقيقية"
                testimonials={[
                    { name: 'خالد إبراهيم', location: 'حي العليا، الرياض', text: 'عزلوا سطح العمارة بالرولات SBS. شغل ممتاز من سنتين وما في أي مشكلة تسريب.', rating: 5 },
                    { name: 'سعد المطيري', location: 'حي النرجس، الرياض', text: 'عزلوا حمامات الفيلا قبل التشطيب. اهتمام بالتفاصيل وجودة عالية. أنصح بهم.', rating: 5 },
                    { name: 'فهد العنزي', location: 'حي الربيع، الرياض', text: 'كان عندي تسريب في السطح، جاءوا وحلوا المشكلة بالكامل. ضمان 7 سنوات.', rating: 5 },
                ]}
            />

            {/* FAQ */}
            <ExtendedFAQ
                title="أسئلة شائعة عن العزل المائي"
                subtitle="كل ما تريد معرفته"
                faqs={[
                    {
                        question: 'ما هو أفضل نوع عزل مائي للأسطح في الرياض؟',
                        answer: 'رولات SBS هي الخيار الأفضل للأسطح في الرياض لأنها تجمع بين المقاومة العالية للماء والمرونة التي تتحمل التمدد والانكماش مع تغيرات الحرارة.'
                    },
                    {
                        question: 'كم سعر العزل المائي للمتر المربع؟',
                        answer: 'يبدأ من 20 ريال للبيتومين السائل، 30 ريال لرولات SBS، و35 ريال للبوليمر السائل. السعر يشمل المواد والعمالة والضمان.'
                    },
                    {
                        question: 'كم مدة ضمان العزل المائي؟',
                        answer: 'نقدم ضمان 5-7 سنوات حسب نوع المادة المستخدمة. الضمان يشمل أي تسربات ناتجة عن خلل في العزل.'
                    },
                    {
                        question: 'هل يمكن عزل سطح قديم بدون إزالة العزل السابق؟',
                        answer: 'يعتمد على حالة العزل القديم. إذا كان جيداً يمكن التطبيق فوقه، لكن الأفضل إزالته لضمان التصاق أفضل.'
                    },
                ]}
            />

            {/* Areas */}
            <AreasCovered
                title="نخدم جميع مناطق الرياض"
                subtitle="تغطية شاملة"
                areas={[
                    { name: 'شمال الرياض', districts: ['الملقا', 'الياسمين', 'النرجس', 'الربيع'] },
                    { name: 'وسط الرياض', districts: ['العليا', 'السليمانية', 'الورود', 'الملز'] },
                    { name: 'جنوب وشرق', districts: ['العزيزية', 'النسيم', 'الخليج'] },
                    { name: 'المناطق القريبة', districts: ['الخرج', 'الدرعية'] },
                ]}
            />

            {/* CTA */}
            <CTABanner
                title="هل تعاني من تسرب المياه؟"
                description="احصل على معاينة مجانية وعرض سعر خلال 24 ساعة"
                primaryButton={{ text: '📞 اتصل الآن', href: 'tel:0551777962' }}
                secondaryButton={{ text: '💬 واتساب', href: 'https://wa.me/966507067378' }}
            />

            {/* Related Services */}
            <RelatedServices
                title="خدمات ذات صلة"
                services={[
                    { title: 'عزل فوم بالرياض', description: 'عزل حراري ومائي في طبقة واحدة', href: '/services/foam-insulation', icon: <Shield className="w-6 h-6" /> },
                    { title: '  عزل اسطح بالرياض', description: 'عزل حراري ومائي في طبقة واحدة', href: '/services/roof-insulation', icon: <Droplets className="w-6 h-6" /> },
                    { title: 'عزل فوم بالخرج', description: 'عزل فوم بولي يوريثان بالخرج', href: '/services/kharg-insulation', icon: <Home className="w-6 h-6" /> },
                ]}
            />

            <Footer />
        </>
    )
}

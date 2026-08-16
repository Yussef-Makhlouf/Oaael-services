import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Phone, MessageCircle, CheckCircle, ArrowLeft, Thermometer, Droplets, Zap, Award, Clock, Users, Home, Factory, Building, FileText } from 'lucide-react'
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
    MaterialShowcase,
    ProcessVisualizer,
    TechSpecs,
    ImageGallery
} from '@/components/AdvancedSections'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'شركة عزل فوم بالرياض | 0551777962 | ضمان 15 سنة| شركة العالمية للعوازل',
    description: 'شركة عزل فوم بالرياض متخصصة في عزل الفوم الرغوي بولي يوريثان ✅ عزل حراري ومائي ✅ ضمان 15 سنوات ✅ توفير 50% من الكهرباء ✅ أسعار تنافسية تبدأ من 55 ريال/م². اتصل الآن: 0551777962',
    keywords: ['عزل فوم بالرياض', 'شركات عزل الفوم', 'سعر متر عزل الفوم', 'عزل بولي يوريثان', 'عزل اسطح شينكو', 'عزل مائي وحراري', 'افضل شركة عزل بالرياض'],
}

export default function FoamInsulationPage() {
    return (
        <>
            <StructuredData
                type="service"
                pageData={{
                    title: 'خدمة عزل الفوم بالرياض | ضمان 15 سنة | العالمية للعوازل',
                    description: 'نقدم خدمة عزل الفوم (البولي يوريثان) بأعلى المعايير العالمية. عزل مائي وحراري للأسطح الخرسانية والمعدنية والشينكو. ضمان 15 سنة على عدم التسرب والتقشر. مواد ألمانية وكوادر فنية محترفة.',
                    url: 'https://elazzl.sa/services/foam-insulation',
                    image: '/services/serv1.jpeg'
                }}
                aggregateRating={{
                    ratingValue: 4.9,
                    reviewCount: 1250
                }}
                reviews={[
                    {
                        author: 'أحمد محمد السالم',
                        reviewBody: 'فريق محترف وشغل ممتاز. عزلوا سطح الفيلا بالفوم وفرق الحرارة واضح جداً. فاتورة الكهرباء انخفضت من 2500 إلى 1400 ريال شهرياً. أنصح بهم بقوة.',
                        reviewRating: 5,
                        datePublished: '2025-01-10'
                    },
                    {
                        author: 'محمد عبدالله العتيبي',
                        reviewBody: 'تعاملت معهم في 3 مشاريع عزل لعمارات سكنية. دائماً ملتزمين بالمواعيد والجودة عالية. ضمان 10 سنوات حقيقي مش كلام.',
                        reviewRating: 5,
                        datePublished: '2024-12-05'
                    },
                    {
                        author: 'عبدالله سعد الغامدي',
                        reviewBody: 'كنت متردد من عزل الفوم بس بعد ما شفت النتيجة اقتنعت 100%. الشغل نظيف والفريق محترم. سعر معقول مقارنة بالجودة.',
                        reviewRating: 5,
                        datePublished: '2024-11-20'
                    }
                ]}
            />
            <Navbar />

            {/* ========================================
          Hero Section - Enhanced
      ======================================== */}
            <section className="relative bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 text-white py-24 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-navy-900/50 mix-blend-multiply" />
                </div>

                {/* Background Effects */}
                <div className="absolute inset-0 opacity-20 overflow-hidden">
                    <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-brand-orange-500 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-2 mb-6 text-sm">
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors">الرئيسية</Link>
                                <span className="text-gray-400">/</span>
                                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">خدماتنا</Link>
                                <span className="text-gray-400">/</span>
                                <span className="text-brand-orange-400">عزل فوم</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                عزل فوم بالرياض
                                <span className="block text-brand-orange-400 mt-3">بولي يوريثان عالي الجودة</span>
                            </h1>

                            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                                عزل الفوم الرغوي هو الحل الأمثل والأكثر تطوراً لحماية أسطح المباني في الرياض. يوفر عزلاً حرارياً ومائياً في طبقة واحدة متكاملة بدون فواصل أو نقاط ضعف، مع ضمان يصل إلى 10 سنوات.
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-brand-orange-300">10</div>
                                    <div className="text-sm text-gray-300">سنوات ضمان</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-brand-orange-300">50%</div>
                                    <div className="text-sm text-gray-300">توفير كهرباء</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-brand-orange-300">+500</div>
                                    <div className="text-sm text-gray-300">مشروع ناجح</div>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:0551777962"
                                    className="flex items-center justify-center gap-2 bg-brand-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
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

                        {/* Hero Card */}
                        <div className="hidden lg:block">
                            <div className="bg-white rounded-3xl p-8 shadow-2xl text-gray-900">
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 bg-brand-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Shield className="w-10 h-10 text-brand-orange-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold">عزل فوم معتمد</h3>
                                    <p className="text-gray-500 mt-2">أفضل حماية لمنزلك</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-600">السعر يبدأ من</span>
                                        <span className="font-bold text-brand-orange-500 text-xl">25 ريال/م²</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-600">الضمان</span>
                                        <span className="font-bold text-navy-500">10 سنوات</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-600">التوفير في الكهرباء</span>
                                        <span className="font-bold text-green-500">حتى 50%</span>
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

            {/* ========================================
          Statistics Section
      ======================================== */}
            <Statistics
                stats={[
                    { value: '+2000', label: 'مشروع منجز' },
                    { value: '15', label: 'سنة خبرة', suffix: '+' },
                    { value: '50', label: 'توفير في الكهرباء', suffix: '%' },
                    { value: '10', label: 'سنوات ضمان' },
                ]}
                variant="light"
            />

            {/* ========================================
          Introduction Block - What is Foam?
      ======================================== */}
            <IntroBlock
                title="ما هو عزل الفوم البولي يوريثان؟"
                subtitle="تعرف على أفضل تقنيات العزل"
                paragraphs={[
                    "عزل الفوم (البولي يوريثان) هو مادة عازلة رغوية متطورة تُرش على الأسطح لتشكل طبقة عازلة متصلة ومتجانسة بدون أي فواصل أو نقاط ضعف. يتكون من مركبين كيميائيين يتفاعلان عند الرش ليشكلا رغوة تتمدد وتتصلب خلال ثوانٍ معدودة.",
                    "يتميز عزل الفوم بقدرته الفريدة على توفير عزل حراري ومائي في آن واحد، مما يجعله الخيار الأمثل للأسطح في مناخ الرياض الحار والجاف. كما أنه يلتصق بجميع أنواع الأسطح ويملأ الشقوق والفجوات بالكامل لحماية كاملة.",
                    "يُستخدم عزل الفوم في الرياض بشكل واسع للمنازل والفلل والعمارات والمستودعات والمصانع، نظراً لكفاءته العالية في مواجهة درجات الحرارة المرتفعة التي تتجاوز 50 درجة مئوية صيفاً."
                ]}
                image="/services/serv1.jpeg"
                imageAlt="عزل فوم بالرياض - عملية رش الفوم على السطح"
                highlights={[
                    { icon: <Thermometer className="w-5 h-5" />, text: 'عزل حراري فعال' },
                    { icon: <Droplets className="w-5 h-5" />, text: 'عزل مائي 100%' },
                    { icon: <Zap className="w-5 h-5" />, text: 'توفير الطاقة' },
                    { icon: <Shield className="w-5 h-5" />, text: 'ضمان 10 سنوات' },
                ]}
            />

            {/* ========================================
           Material Showcase (New Component)
           ======================================== */}
            <MaterialShowcase
                title="أنواع عزل الفوم المستخدمة"
                subtitle="حلول تناسب جميع الاحتياجات"
                materials={[
                    {
                        title: "فوم مغلق الخلايا (Closed Cell)",
                        description: "النوع الأكثر استخداماً وفعالية للأسطح الخارجية. يتميز بكثافة عالية وقوة تحمل ممتازة. يوفر عزلاً مائياً وحرارياً متكاملاً ويمنع نفاذ الرطوبة والبخار.",
                        image: "/services/serv2.jpeg",
                        features: ["كثافة عالية (40-45 كجم/م³)", "مقاومة عالية للماء", "قوة تحمل للضغط", "عمر افتراضي طويل"],
                        recommendedFor: "عزل الأسطح المكشوفة والخزانات"
                    },
                    {
                        title: "فوم مفتوح الخلايا (Open Cell)",
                        description: "يتميز بوزنه الخفيف وقدرته العالية على التمدد. مثالي للعزل الصوتي وملء الفراغات في الجدران الداخلية، ولكنه أقل مقاومة للماء من النوع المغلق.",
                        image: "/services/serv3.jpeg",
                        features: ["خفيف الوزن", "عزل صوتي ممتاز", "تكلفة أقل", "تمدد عالي (1:100)"],
                        recommendedFor: "العزل الداخلي وحشو الجدران"
                    }
                ]}
            />

            {/* ========================================
           Tech Specs (New Component)
           ======================================== */}
            <TechSpecs
                title="المواصفات الفنية لفوم البولي يوريثان"
                specs={[
                    { label: "الكثافة (Density)", value: "35 - 45 كجم/م³", icon: <Factory className="w-4 h-4" /> },
                    { label: "الموصلية الحرارية (K-Value)", value: "0.022 وات/م.ك", icon: <Thermometer className="w-4 h-4" /> },
                    { label: "قوة الضغط (Compressive Strength)", value: "250 - 300 كيلو باسكال", icon: <Shield className="w-4 h-4" /> },
                    { label: "امتصاص الماء", value: "< 2% من الحجم", icon: <Droplets className="w-4 h-4" /> },
                    { label: "زمن التصلب السطحي", value: "3 - 5 دقائق", icon: <Clock className="w-4 h-4" /> },
                    { label: "مقاومة الحريق", value: "B2 / B3 (DIN 4102)", icon: <Zap className="w-4 h-4" /> },
                ]}
            />

            {/* ========================================
           Process Visualizer (New Component)
           ======================================== */}
            <ProcessVisualizer
                title="رحلة عزل منزلك بالصور"
                steps={[
                    {
                        title: "تجهيز الموقع وتنظيف السطح",
                        description: "تبدأ العملية بتنظيف السطح تماماً من الأتربة والشوائب وإزالة أي عوائق. نضمن سطحاً نظيفاً لضمان التصاق الفوم بشكل مثالي.",
                        image: "/services/serv4.jpeg"
                    },
                    {
                        title: "رش طبقات الفوم",
                        description: "يقوم الفنيون المتخصصون برش سائل البولي يوريثان الذي يتمدد فوراً ليشكل طبقة عازلة سميكة ومتصلة تغطي كامل السطح.",
                        image: "/services/serv5.jpeg"
                    },
                    {
                        title: "تغطية التفاصيل والزوايا",
                        description: "نولي اهتماماً خاصاً بالزوايا وحول المواسير والمكيفات لضمان عدم وجود أي نقاط ضعف أو تسرب.",
                        image: "/services/ser6.jpeg"
                    },
                    {
                        title: "تطبيق طبقة الحماية",
                        description: "بعد جفاف الفوم، نطبق طبقة أكريليك أو دهان حماية (Top Coat) لحماية الفوم من الأشعة فوق البنفسجية وضمان طول عمره.",
                        image: "/services/serv7.jpeg"
                    }
                ]}
            />

            {/* ========================================
          Comparison Table
      ======================================== */}
            <ComparisonTable
                title="مقارنة أنواع العزل"
                subtitle="اختر الأفضل لمنزلك"
                headers={['عزل الفوم', 'عزل البيتومين', 'عزل الرولات']}
                recommendedIndex={0}
                rows={[
                    { feature: 'العزل الحراري', options: ['ممتاز ⭐⭐⭐⭐⭐', 'متوسط ⭐⭐⭐', 'جيد ⭐⭐⭐⭐'] },
                    { feature: 'العزل المائي', options: ['ممتاز ⭐⭐⭐⭐⭐', 'ممتاز ⭐⭐⭐⭐⭐', 'جيد ⭐⭐⭐⭐'] },
                    { feature: 'العمر الافتراضي', options: ['20-25 سنة', '10-15 سنة', '10-12 سنة'] },
                    { feature: 'مقاومة درجات الحرارة', options: ['حتى 180°C', 'حتى 100°C', 'حتى 80°C'] },
                    { feature: 'سهولة التطبيق', options: [true, true, true] },
                    { feature: 'بدون فواصل', options: [true, false, false] },
                    { feature: 'توفير الكهرباء', options: ['40-50%', '20-30%', '25-35%'] },
                    { feature: 'السعر (ريال/م²)', options: ['30-35', '20-25', '25-30'] },
                    { feature: 'الضمان', options: ['10 سنوات', '5 سنوات', '7 سنوات'] },
                ]}
            />

            {/* ========================================
          Case Study
      ======================================== */}
            <CaseStudy
                title="عزل فوم لفيلا في حي الملقا"
                location="حي الملقا، شمال الرياض"
                challenge="كان العميل يعاني من ارتفاع فاتورة الكهرباء الشهرية التي تصل إلى 2500 ريال صيفاً، مع شعور بحرارة السقف وعدم فعالية التكييف."
                solution="قمنا بتطبيق عزل فوم بولي يوريثان بسماكة 5 سم على سطح الفيلا (350 م²)، مع طبقة حماية أكريليك مقاومة للأشعة فوق البنفسجية."
                results={[
                    { label: 'توفير الكهرباء', value: '45%' },
                    { label: 'انخفاض الحرارة', value: '12°C' },
                    { label: 'مدة التنفيذ', value: 'يومين' },
                ]}
                beforeImage="/services/serv8.jpeg"
                afterImage="/services/serv9.jpeg"
            />

            {/* ========================================
          Gallery Section
      ======================================== */}
            <ImageGallery
                title="معرض مشاريع عزل الفوم"
                subtitle="صور من مواقع العمل"
                images={[
                    { src: '/services/serv10.jpeg', alt: 'عزل فوم لفيلا بالرياض', title: 'عزل فوم فيلا سكنية', location: 'حي الملقا' },
                    { src: '/services/serv11.jpeg', alt: 'عزل حراري للسطح', title: 'عزل حراري مائي', location: 'حي الياسمين' },
                    { src: '/services/serv13.jpeg', alt: 'رش الفوم العازل', title: 'تنفيذ عزل فوم', location: 'شمال الرياض' },
                    { src: '/services/serv1.jpeg', alt: 'عزل مستودع', title: 'عزل هناجر', location: 'الصناعية' },
                ]}
            />

            {/* ========================================
          Pricing Cards
      ======================================== */}
            <PricingCards
                title="أسعار عزل الفوم بالرياض"
                subtitle="باقات تناسب جميع الاحتياجات"
                tiers={[
                    {
                        name: 'باقة اقتصادية',
                        price: '25',
                        unit: 'ريال/م²',
                        description: 'مناسبة للأسطح الصغيرة والميزانيات المحدودة',
                        features: [
                            'سماكة 3 سم',
                            'ضمان 5 سنوات',
                            'عزل حراري ومائي',
                            'معاينة مجانية',
                        ],
                    },
                    {
                        name: 'باقة قياسية',
                        price: '30',
                        unit: 'ريال/م²',
                        description: 'الخيار الأمثل للمنازل والفلل',
                        features: [
                            'سماكة 4 سم',
                            'ضمان 10 سنوات',
                            'عزل حراري ومائي',
                            'طبقة حماية أكريليك',
                            'صيانة سنوية مجانية',
                        ],
                        highlighted: true,
                        badge: 'الأكثر طلباً',
                    },
                    {
                        name: 'باقة بريميوم',
                        price: '35',
                        unit: 'ريال/م²',
                        description: 'للمشاريع الكبيرة والتجارية',
                        features: [
                            'سماكة 5 سم أو أكثر',
                            'ضمان 15 سنة',
                            'فوم عالي الكثافة',
                            'طبقة حماية مزدوجة',
                            'صيانة دورية مجانية',
                            'تقرير فني سنوي',
                        ],
                    },
                ]}
            />

            {/* ========================================
          Common Mistakes
      ======================================== */}
            <CommonMistakes
                title="أخطاء شائعة في عزل الفوم"
                subtitle="تجنب هذه الأخطاء"
                mistakes={[
                    {
                        title: 'اختيار شركة عزل غير متخصصة',
                        problem: 'كثير من الشركات تدعي الخبرة في عزل الفوم دون امتلاك المعدات أو الكوادر المتخصصة، مما يؤدي لنتائج سيئة.',
                        solution: 'تأكد من سجل الشركة وخبرتها واطلب صور لمشاريع سابقة وشهادات عملاء.'
                    },
                    {
                        title: 'عدم تنظيف السطح قبل العزل',
                        problem: 'تطبيق الفوم على سطح متسخ أو رطب يمنع الالتصاق الجيد ويسبب تقشر العزل لاحقاً.',
                        solution: 'يجب تنظيف السطح جيداً وتجفيفه تماماً قبل تطبيق الفوم.'
                    },
                    {
                        title: 'توفير المال بتقليل السماكة',
                        problem: 'سماكة أقل من 3 سم لا توفر العزل الكافي وتقلل من كفاءة العزل بشكل كبير.',
                        solution: 'الحد الأدنى الموصى به 3-4 سم للمنازل و5 سم للمباني الكبيرة.'
                    },
                    {
                        title: 'إهمال طبقة الحماية',
                        problem: 'تعرض الفوم المباشر لأشعة الشمس يسبب تآكله وتقليل عمره الافتراضي.',
                        solution: 'طبقة الحماية الأكريليك أو الأليمنيوم ضرورية لحماية الفوم.'
                    },
                ]}
            />

            {/* ========================================
          Expert Tips
      ======================================== */}
            <ExpertTips
                title="نصائح الخبراء لاختيار عزل الفوم"
                subtitle="من خبرتنا 15 سنة"
                tips={[
                    {
                        title: 'افحص السطح جيداً قبل الطلب',
                        description: 'تأكد من عدم وجود تسربات مياه نشطة أو تشققات كبيرة تحتاج إصلاح قبل العزل. المشاكل المخفية قد تؤثر على جودة العزل.'
                    },
                    {
                        title: 'اطلب عينة من المادة',
                        description: 'الشركة المحترفة ستوفر لك عينة من الفوم المستخدم لتتأكد من جودته وكثافته قبل بدء العمل.'
                    },
                    {
                        title: 'تحقق من الضمان المكتوب',
                        description: 'لا تقبل بضمان شفهي. اطلب ضمان مكتوب يوضح المدة والشروط وآلية الصيانة في حالة وجود مشاكل.'
                    },
                    {
                        title: 'اختر الوقت المناسب',
                        description: 'أفضل وقت لعزل الأسطح هو بداية الربيع أو نهاية الصيف. تجنب الأيام شديدة الحرارة أو الماطرة.'
                    },
                    {
                        title: 'قارن بين العروض',
                        description: 'لا تختر الأرخص دائماً. قارن بين الجودة والضمان والسمعة. العزل الجيد استثمار طويل المدى.'
                    },
                    {
                        title: 'تابع التنفيذ',
                        description: 'كن موجوداً أثناء التطبيق للتأكد من السماكة المتفق عليها وجودة التغطية في جميع الأجزاء.'
                    },
                ]}
            />

            {/* ========================================
          Testimonials Carousel
      ======================================== */}
            <TestimonialsCarousel
                title="ماذا يقول عملاؤنا؟"
                subtitle="آراء حقيقية"
                testimonials={[
                    {
                        name: 'أحمد محمد السالم',
                        location: 'حي الملقا، الرياض',
                        text: 'فريق محترف وشغل ممتاز. عزلوا سطح الفيلا بالفوم وفرق الحرارة واضح جداً. فاتورة الكهرباء انخفضت من 2500 إلى 1400 ريال شهرياً. أنصح بهم بقوة.',
                        rating: 5,
                    },
                    {
                        name: 'محمد عبدالله العتيبي',
                        location: 'حي الياسمين، الرياض',
                        text: 'تعاملت معهم في 3 مشاريع عزل لعمارات سكنية. دائماً ملتزمين بالمواعيد والجودة عالية. ضمان 10 سنوات حقيقي مش كلام.',
                        rating: 5,
                    },
                    {
                        name: 'عبدالله سعد الغامدي',
                        location: 'الخرج',
                        text: 'كنت متردد من عزل الفوم بس بعد ما شفت النتيجة اقتنعت 100%. الشغل نظيف والفريق محترم. سعر معقول مقارنة بالجودة.',
                        rating: 5,
                    },
                ]}
            />

            {/* ========================================
          Extended FAQ
      ======================================== */}
            <ExtendedFAQ
                title="أسئلة شائعة عن عزل الفوم"
                subtitle="كل ما تريد معرفته"
                faqs={[
                    {
                        question: 'ما هو عزل الفوم (البولي يوريثان)؟',
                        answer: 'عزل الفوم أو البولي يوريثان هو مادة عازلة رغوية تُرش على الأسطح لتشكل طبقة عازلة متصلة بدون فواصل. يتكون من مركبين كيميائيين يتفاعلان عند الرش ويتمددان ليغطيا كامل السطح بما في ذلك الشقوق والزوايا. يوفر عزلاً حرارياً ومائياً في آن واحد، مما يجعله الخيار الأمثل لمناخ الرياض.'
                    },
                    {
                        question: 'كم سعر متر عزل الفوم في الرياض 2025؟',
                        answer: 'يبدأ سعر متر عزل الفوم من 25 ريال للمتر المربع للسماكة 3 سم، و30 ريال للسماكة 4 سم، و35 ريال للسماكة 5 سم أو أكثر. السعر يشمل المواد والعمالة والضمان. قد يختلف السعر حسب مساحة السطح وصعوبة الوصول وحالة السطح. نقدم معاينة مجانية وعرض سعر دقيق بدون التزام.'
                    },
                    {
                        question: 'كم مدة ضمان عزل الفوم؟',
                        answer: 'نقدم ضمان شامل من 5 إلى 15 سنة حسب نوع الباقة: الباقة الاقتصادية 5 سنوات، القياسية 10 سنوات، البريميوم 15 سنة. الضمان يشمل أي تسربات أو تلف في العزل ويتضمن الصيانة والإصلاح المجاني. العمر الافتراضي الفعلي للفوم يتجاوز 25 سنة مع الصيانة المناسبة.'
                    },
                    {
                        question: 'هل عزل الفوم يوفر في فاتورة الكهرباء؟',
                        answer: 'نعم، عزل الفوم يوفر من 40% إلى 50% من فاتورة الكهرباء شهرياً. هذا التوفير يأتي من تقليل انتقال الحرارة للمبنى مما يقلل الحمل على أجهزة التكييف. تكلفة العزل تُسترد خلال 2-3 سنوات من التوفير في الكهرباء، ويستمر التوفير لعقود. بالإضافة لذلك، يطيل العزل عمر أجهزة التكييف.'
                    },
                    {
                        question: 'كم يستغرق عزل سطح المنزل بالفوم؟',
                        answer: 'يعتمد على مساحة السطح: سطح 100 م² يستغرق يوم واحد فقط، 200-300 م² يومين، والأسطح الكبيرة 3-5 أيام. الفوم يجف ويتصلب خلال ساعات قليلة من التطبيق. نستخدم معدات حديثة لإنجاز العمل بسرعة وكفاءة مع الحفاظ على أعلى معايير الجودة.'
                    },
                    {
                        question: 'ما السماكة المناسبة لعزل الفوم؟',
                        answer: 'السماكة المثالية تعتمد على نوع المبنى: 3 سم للشقق والمساحات الصغيرة، 4 سم للفلل والمنازل المتوسطة (الخيار الأكثر شيوعاً)، 5 سم أو أكثر للفلل الكبيرة والمباني التجارية والمستودعات. كلما زادت السماكة زادت كفاءة العزل.'
                    },
                    {
                        question: 'هل عزل الفوم آمن على الصحة؟',
                        answer: 'نعم، عزل الفوم المستخدم آمن تماماً بعد التصلب. نستخدم مواد مطابقة للمواصفات السعودية والعالمية. أثناء التطبيق يُنصح بإبعاد السكان لبضع ساعات. بعد التصلب الكامل، الفوم خامل كيميائياً ولا يُصدر أي غازات أو روائح ضارة.'
                    },
                    {
                        question: 'ما الفرق بين عزل الفوم والعزل التقليدي؟',
                        answer: 'عزل الفوم يتفوق على العزل التقليدي في عدة نقاط: يوفر عزل حراري ومائي معاً، بدون فواصل أو نقاط ضعف، يملأ الشقوق والفراغات، عمر افتراضي أطول (25+ سنة)، كفاءة عزل أعلى، ووزن أخف. العيب الوحيد هو التكلفة الأعلى قليلاً لكنها تُسترد من التوفير في الكهرباء.'
                    },
                ]}
            />

            {/* ========================================
          Areas Covered
      ======================================== */}
            <AreasCovered
                title="نخدم جميع مناطق الرياض والخرج"
                subtitle="تغطية شاملة"
                areas={[
                    {
                        name: 'شمال الرياض',
                        districts: ['الملقا', 'الياسمين', 'النرجس', 'الربيع', 'الصحافة', 'العقيق', 'الغدير']
                    },
                    {
                        name: 'وسط الرياض',
                        districts: ['العليا', 'السليمانية', 'الورود', 'الملز', 'الروضة', 'المربع']
                    },
                    {
                        name: 'شرق الرياض',
                        districts: ['الخليج', 'النسيم', 'الروابي', 'الريان', 'اليرموك']
                    },
                    {
                        name: 'غرب الرياض',
                        districts: ['العريجاء', 'طويق', 'الشفا', 'السويدي', 'ظهرة لبن']
                    },
                    {
                        name: 'جنوب الرياض',
                        districts: ['الدار البيضاء', 'الفيصلية', 'العزيزية', 'الحزم']
                    },
                    {
                        name: 'المناطق القريبة',
                        districts: ['الخرج', 'الدرعية', 'الأفلاج', 'الدلم']
                    },
                ]}
            />

            {/* ========================================
          CTA Banner
      ======================================== */}
            <CTABanner
                title="احصل على عرض سعر مجاني الآن"
                description="معاينة مجانية لموقعك وعرض سعر تفصيلي خلال 24 ساعة"
                primaryButton={{ text: '📞 اتصل: 0551777962', href: 'tel:0551777962' }}
                secondaryButton={{ text: 'واتساب', href: 'https://wa.me/966507067378' }}
                variant="orange"
            />

            {/* ========================================
          Related Services
      ======================================== */}
            <RelatedServices
                title="خدمات ذات صلة"
                services={[
                    {
                        title: 'عزل أسطح بالرياض',
                        description: 'حماية شاملة للأسطح من الحرارة والأمطار',
                        href: '/services/roof-insulation-shinko',
                        icon: <Home className="w-6 h-6" />
                    },
                    {
                        title: 'عزل حراري بالرياض',
                        description: 'توفير الطاقة وخفض فاتورة الكهرباء',
                        href: '/services/thermal-insulation',
                        icon: <Thermometer className="w-6 h-6" />
                    },
                    {
                        title: 'عزل مائي بالرياض',
                        description: 'منع تسرب المياه والرطوبة',
                        href: '/services/waterproof-insulation',
                        icon: <Droplets className="w-6 h-6" />
                    },
                ]}
            />

            <Footer />
        </>
    )
}

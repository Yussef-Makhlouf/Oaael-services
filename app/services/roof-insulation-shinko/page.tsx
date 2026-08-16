import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Phone, MessageCircle, CheckCircle, Thermometer, Droplets, Zap, Award, Clock, Users, Home, Factory, Building, Layers, Wind, Sun } from 'lucide-react'
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
    title: 'شركة عزل شينكو بالرياض | 0551777962 | ضمان 15 سنة| شركة العالمية للعوازل',
    description: 'شركة عزل شينكو بالرياض متخصصة في تركيب ألواح الشينكو والساندوتش بانل ✅ عزل حراري ومائي ممتاز ✅ ضمان 15 سنة ✅ توفير 60% من الكهرباء ✅ مثالي للمستودعات والمصانع. اتصل الآن: 0551777962',
    keywords: ['شركة عزل شينكو بالرياض', 'شركة عزل شينكو', 'ساندوتش بانل بالرياض', 'عزل مستودعات', 'عزل مصانع', 'ألواح شينكو', 'عزل هناجر'],
}

export default function ShinkoInsulationPage() {
    return (
        <>
            <StructuredData
                type="service"
                pageData={{
                    title: 'شركة عزل شينكو بالرياض | للمستودعات والهناجر | ضمان 15 سنة',
                    description: 'شركة عزل شينكو بالرياض متخصصة في تركيب ألواح الشينكو والساندوتش بانل ✅ عزل حراري ومائي ممتاز ✅ ضمان 15 سنة ✅ توفير 60% من الكهرباء',
                    url: 'https://elazzl.sa/services/roof-insulation-shinko'
                }}
                aggregateRating={{
                    ratingValue: 4.8,
                    reviewCount: 31245
                }}
                reviews={[
                    {
                        author: 'شركة الخدمات اللوجستية',
                        reviewBody: 'تم عزل مستودع الشركة بالكامل. احترافية عالية وسرعة في التنفيذ.',
                        reviewRating: 5,
                        datePublished: '2025-02-25'
                    },
                    {
                        author: 'بدر الحارثي',
                        reviewBody: 'ممتازين في عزل الشينكو، انصح بهم لأصحاب المستودعات.',
                        reviewRating: 5,
                        datePublished: '2025-01-30'
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
                                <span className="text-brand-orange-400">عزل شينكو و هناجر بالرياض</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                شركة عزل شينكو و هناجر بالرياض
                            </h1>

                            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                                شركة عزل شينكو بالرياض الرائدة في تركيب ألواح الشينكو والساندوتش بانل للمستودعات والمصانع والهناجر. نقدم حلول عزل متكاملة تجمع بين العزل الحراري والمائي في نظام واحد متين يدوم لعقود.
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-brand-orange-300">15</div>
                                    <div className="text-sm text-gray-300">سنة ضمان</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-brand-orange-300">60%</div>
                                    <div className="text-sm text-gray-300">توفير كهرباء</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-brand-orange-300">+800</div>
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
                                        <Layers className="w-10 h-10 text-brand-orange-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold">عزل شينكو معتمد</h3>
                                    <p className="text-gray-500 mt-2">أفضل حماية للمباني الصناعية</p>
                                </div>

                                <div className="space-y-4">

                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-600">الضمان</span>
                                        <span className="font-bold text-navy-500">15 سنة</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-600">التوفير في الكهرباء</span>
                                        <span className="font-bold text-green-500">حتى 60%</span>
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
                    { value: '+800', label: 'مشروع منجز' },
                    { value: '18', label: 'سنة خبرة', suffix: '+' },
                    { value: '60', label: 'توفير في الكهرباء', suffix: '%' },
                    { value: '15', label: 'سنة ضمان' },
                ]}
                variant="light"
            />

            {/* ========================================
          Introduction Block - What is Shinko?
      ======================================== */}
            <IntroBlock
                title="ما هو عزل الشينكو والساندوتش بانل؟"
                subtitle="تعرف على أفضل أنظمة العزل الصناعي"
                paragraphs={[
                    "عزل الشينكو أو الساندوتش بانل هو نظام عزل متطور يتكون من ألواح معدنية مزدوجة (صاج مجلفن) بينها طبقة عازلة من البولي يوريثان أو الصوف الصخري. يُعد هذا النظام الخيار الأمثل للمباني الصناعية والتجارية في الرياض نظراً لقدرته الفائقة على مقاومة الحرارة الشديدة.",
                    "تتميز ألواح الشينكو بمتانتها العالية ومقاومتها للعوامل الجوية القاسية، مما يجعلها مثالية للمستودعات والمصانع والهناجر والمعارض التجارية. كما أنها سهلة التركيب وتوفر مظهراً جمالياً عصرياً مع أداء عزل استثنائي.",
                    "نحن في شركتنا نستخدم أجود أنواع ألواح الشينكو المستوردة والمحلية، مع فريق تركيب محترف يضمن تنفيذاً متقناً يدوم لسنوات طويلة. نقدم ضماناً شاملاً يصل إلى 15 سنة على جميع أعمالنا."
                ]}
                image="/services/serv3.jpeg"
                imageAlt="عزل شينكو بالرياض - تركيب ألواح الساندوتش بانل"
                highlights={[
                    { icon: <Thermometer className="w-5 h-5" />, text: 'عزل حراري فائق' },
                    { icon: <Droplets className="w-5 h-5" />, text: 'مقاومة للماء 100%' },
                    { icon: <Wind className="w-5 h-5" />, text: 'مقاومة للرياح والعواصف' },
                    { icon: <Shield className="w-5 h-5" />, text: 'ضمان 15 سنة' },
                ]}
            />

            {/* ========================================
           Material Showcase
           ======================================== */}
            <MaterialShowcase
                title="أنواع ألواح الشينكو المستخدمة"
                subtitle="حلول تناسب جميع المشاريع"
                materials={[
                    {
                        title: "ساندوتش بانل بولي يوريثان (PU)",
                        description: "الخيار الأكثر شيوعاً ويتميز بأعلى معامل عزل حراري. مثالي للمستودعات التي تحتاج تبريد مستمر والغرف الباردة. خفيف الوزن وسهل التركيب مع عمر افتراضي طويل.",
                        image: "/services/serv4.jpeg",
                        features: ["معامل عزل K=0.022", "سماكات 5-15 سم", "وزن خفيف 10-12 كجم/م²", "مقاوم للحريق"],
                        recommendedFor: "المستودعات المبردة والغرف الباردة"
                    },
                    {
                        title: "ساندوتش بانل صوف صخري (Rock Wool)",
                        description: "يتميز بمقاومة عالية للحريق ويُستخدم في المباني التي تتطلب معايير سلامة صارمة. يوفر عزلاً صوتياً ممتازاً بالإضافة للعزل الحراري.",
                        image: "/services/serv5.jpeg",
                        features: ["مقاوم للحريق 4 ساعات", "عزل صوتي ممتاز", "صديق للبيئة", "لا يمتص الرطوبة"],
                        recommendedFor: "المصانع ومحطات الوقود"
                    }
                ]}
            />

            {/* ========================================
           Tech Specs
           ======================================== */}
            <TechSpecs
                title="المواصفات الفنية لألواح الشينكو"
                specs={[
                    { label: "سماكة اللوح الكلية", value: "50 - 150 مم", icon: <Layers className="w-4 h-4" /> },
                    { label: "الموصلية الحرارية (K-Value)", value: "0.022 وات/م.ك", icon: <Thermometer className="w-4 h-4" /> },
                    { label: "مقاومة الحريق", value: "حتى 4 ساعات (صوف صخري)", icon: <Shield className="w-4 h-4" /> },
                    { label: "تحمل الرياح", value: "حتى 150 كم/ساعة", icon: <Wind className="w-4 h-4" /> },
                    { label: "العمر الافتراضي", value: "25 - 30 سنة", icon: <Clock className="w-4 h-4" /> },
                    { label: "سماكة الصاج", value: "0.4 - 0.7 مم", icon: <Factory className="w-4 h-4" /> },
                ]}
            />

            {/* ========================================
           Process Visualizer
           ======================================== */}
            <ProcessVisualizer
                title="مراحل تركيب عزل الشينكو"
                steps={[
                    {
                        title: "المعاينة والقياسات",
                        description: "يقوم فريقنا الهندسي بزيارة الموقع لأخذ القياسات الدقيقة وتحديد نوع الألواح المناسب وحساب الكميات المطلوبة مع تقديم عرض سعر تفصيلي.",
                        image: "/services/ser6.jpeg"
                    },
                    {
                        title: "تجهيز الهيكل المعدني",
                        description: "نقوم بتركيب الهيكل المعدني الحامل (الشاصي) بدقة عالية مع مراعاة ميول الصرف وتثبيت الدعامات بشكل محكم لضمان ثبات الألواح.",
                        image: "/services/serv7.jpeg"
                    },
                    {
                        title: "تركيب ألواح الشينكو",
                        description: "يتم تركيب ألواح الساندوتش بانل بتداخل محكم مع استخدام مسامير ربط مجلفنة ذات جوانات مطاطية لمنع تسرب المياه والهواء.",
                        image: "/services/serv8.jpeg"
                    },
                    {
                        title: "التشطيب والفحص",
                        description: "نقوم بتركيب الإكسسوارات والزوايا وتغطية الفواصل ثم إجراء فحص شامل للتأكد من جودة التركيب وإحكام العزل قبل التسليم.",
                        image: "/services/serv9.jpeg"
                    }
                ]}
            />

            {/* ========================================
          Comparison Table
      ======================================== */}
            <ComparisonTable
                title="مقارنة أنظمة العزل للمباني الصناعية"
                subtitle="اختر الأفضل لمشروعك"
                headers={['عزل شينكو', 'عزل فوم رش', 'عزل تقليدي']}
                recommendedIndex={0}
                rows={[
                    { feature: 'العزل الحراري', options: ['ممتاز ⭐⭐⭐⭐⭐', 'ممتاز ⭐⭐⭐⭐⭐', 'متوسط ⭐⭐⭐'] },
                    { feature: 'المتانة والتحمل', options: ['ممتاز ⭐⭐⭐⭐⭐', 'جيد ⭐⭐⭐⭐', 'متوسط ⭐⭐⭐'] },
                    { feature: 'العمر الافتراضي', options: ['25-30 سنة', '20-25 سنة', '10-15 سنة'] },
                    { feature: 'مقاومة الحريق', options: ['ممتازة (صوف صخري)', 'جيدة', 'ضعيفة'] },
                    { feature: 'سرعة التركيب', options: ['سريع جداً', 'سريع', 'بطيء'] },
                    { feature: 'المظهر الجمالي', options: ['عصري وأنيق', 'يحتاج تغطية', 'تقليدي'] },
                    { feature: 'الصيانة', options: ['قليلة جداً', 'قليلة', 'متكررة'] },
                    { feature: 'السعر (ريال/م²)', options: ['85-150', '55-80', '40-60'] },
                    { feature: 'الضمان', options: ['15 سنة', '10 سنوات', '5 سنوات'] },
                ]}
            />

            {/* ========================================
          Case Study
      ======================================== */}
            <CaseStudy
                title="عزل مستودع تبريد بالمنطقة الصناعية"
                location="المنطقة الصناعية الثانية، الرياض"
                challenge="كان العميل يواجه مشكلة كبيرة في الحفاظ على درجة حرارة المستودع المبرد، مع فاتورة كهرباء شهرية تتجاوز 25,000 ريال وتلف متكرر للبضائع المخزنة."
                solution="قمنا بتركيب ألواح ساندوتش بانل بولي يوريثان بسماكة 10 سم للأسقف و8 سم للجدران، مع عناية خاصة بإحكام الفواصل والأبواب."
                results={[
                    { label: 'توفير الكهرباء', value: '55%' },
                    { label: 'انخفاض الحرارة', value: '18°C' },
                    { label: 'مدة التنفيذ', value: '12 يوم' },
                ]}
                beforeImage="/services/serv10.jpeg"
                afterImage="/services/serv11.jpeg"
            />

            {/* Gallery */}
            <ImageGallery
                title="معرض مشاريع الشينكو"
                subtitle="تركيب وعزل الهناجر والمستودعات"
                images={[
                    { src: '/services/serv13.jpeg', alt: 'تركيب شينكو', title: 'تركيب هناجر', location: 'الصناعية الثانية' },
                    { src: '/services/serv1.jpeg', alt: 'ساندوتش بانل', title: 'مستودع تبريد', location: 'شمال الرياض' },
                    { src: '/services/serv2.jpeg', alt: 'عزل شينكو', title: 'عزل مصنع', location: 'الخرج' },
                    { src: '/services/serv3.jpeg', alt: 'هيكل معدني', title: 'أسقف معدنية', location: 'حي السلي' },
                ]}
            />

            {/* ========================================
          Pricing Cards
      ======================================== */}
            <PricingCards
                title="أسعار عزل الشينكو بالرياض"
                subtitle="باقات تناسب جميع المشاريع"
                tiers={[
                    {
                        name: 'باقة اقتصادية',
                        price: '85',
                        unit: 'ريال/م²',
                        description: 'للمشاريع ذات الميزانية المحدودة',
                        features: [
                            'ساندوتش بانل 5 سم',
                            'صاج 0.4 مم',
                            'ضمان 10 سنوات',
                            'تركيب احترافي',
                            'معاينة مجانية',
                        ],
                    },
                    {
                        name: 'باقة قياسية',
                        price: '120',
                        unit: 'ريال/م²',
                        description: 'الخيار الأمثل للمستودعات',
                        features: [
                            'ساندوتش بانل 7.5 سم',
                            'صاج 0.5 مم مجلفن',
                            'ضمان 15 سنة',
                            'إكسسوارات فاخرة',
                            'صيانة سنوية مجانية',
                            'تصميم هندسي',
                        ],
                        highlighted: true,
                        badge: 'الأكثر طلباً',
                    },
                    {
                        name: 'باقة بريميوم',
                        price: '150',
                        unit: 'ريال/م²',
                        description: 'للمشاريع الكبرى والمستودعات المبردة',
                        features: [
                            'ساندوتش بانل 10 سم أو أكثر',
                            'صاج 0.6 مم ملون',
                            'ضمان 20 سنة',
                            'صوف صخري مقاوم للحريق',
                            'صيانة دورية شاملة',
                            'استشارات هندسية',
                            'تقرير فني سنوي',
                        ],
                    },
                ]}
            />

            {/* ========================================
          Common Mistakes
      ======================================== */}
            <CommonMistakes
                title="أخطاء شائعة في تركيب عزل الشينكو"
                subtitle="تجنب هذه الأخطاء"
                mistakes={[
                    {
                        title: 'اختيار سماكة غير مناسبة',
                        problem: 'استخدام ألواح رقيقة لتوفير التكلفة يؤدي لفقدان كبير في كفاءة العزل خاصة في صيف الرياض الحار.',
                        solution: 'الحد الأدنى الموصى به 5 سم للمباني العادية و7.5-10 سم للمستودعات المبردة.'
                    },
                    {
                        title: 'إهمال إحكام الفواصل',
                        problem: 'ترك فراغات بين الألواح يسبب تسرب الهواء والحرارة ويقلل كفاءة العزل بنسبة كبيرة.',
                        solution: 'استخدام شريط عازل ومانع تسرب في جميع الفواصل مع ربط محكم بين الألواح.'
                    },
                    {
                        title: 'عدم مراعاة ميول الصرف',
                        problem: 'تركيب سطح مستوٍ يسبب تجمع مياه الأمطار وإرهاق العزل على المدى الطويل.',
                        solution: 'تصميم ميول لا تقل عن 5% لضمان تصريف المياه بسرعة.'
                    },
                    {
                        title: 'التوفير في جودة المسامير',
                        problem: 'استخدام مسامير رديئة تصدأ بسرعة وتسبب تسرب المياه حول نقاط التثبيت.',
                        solution: 'استخدام مسامير ستانلس ستيل أو مجلفنة مع جوانات EPDM عالية الجودة.'
                    },
                ]}
            />

            {/* ========================================
          Expert Tips
      ======================================== */}
            <ExpertTips
                title="نصائح الخبراء لاختيار عزل الشينكو"
                subtitle="من خبرتنا 18 سنة في المجال"
                tips={[
                    {
                        title: 'حدد الغرض من المبنى أولاً',
                        description: 'متطلبات مستودع عادي تختلف عن مستودع مبرد أو مصنع. الغرض يحدد نوع اللوح والسماكة المناسبة.'
                    },
                    {
                        title: 'اطلب شهادات الجودة',
                        description: 'تأكد من أن الألواح المستخدمة معتمدة ومطابقة للمواصفات السعودية مع شهادات مقاومة الحريق.'
                    },
                    {
                        title: 'راجع أعمال الشركة السابقة',
                        description: 'زر مشاريع سابقة للشركة وتحدث مع العملاء للتأكد من جودة التنفيذ والالتزام بالمواعيد.'
                    },
                    {
                        title: 'لا تهمل التهوية',
                        description: 'المباني المعزولة بإحكام تحتاج نظام تهوية مناسب لمنع تكثف الرطوبة داخل المبنى.'
                    },
                    {
                        title: 'احسب العائد على الاستثمار',
                        description: 'تكلفة العزل الجيد تُسترد من توفير الكهرباء خلال 2-3 سنوات، ويستمر التوفير لعقود.'
                    },
                    {
                        title: 'خطط للصيانة المستقبلية',
                        description: 'اتفق على برنامج صيانة دورية مع الشركة لضمان استمرار أداء العزل على أفضل مستوى.'
                    },
                ]}
            />

            {/* ========================================
          Testimonials Carousel
      ======================================== */}
            <TestimonialsCarousel
                title="ماذا يقول عملاؤنا؟"
                subtitle="آراء حقيقية من مشاريعنا"
                testimonials={[
                    {
                        name: 'م. فهد العتيبي',
                        location: 'المنطقة الصناعية، الرياض',
                        text: 'عزلنا مستودعنا الكبير معهم (5000 م²) والشغل ممتاز ومتقن. الفريق محترف والتسليم كان في الموعد بالضبط. فاتورة الكهرباء انخفضت بشكل ملحوظ.',
                        rating: 5,
                    },
                    {
                        name: 'أ. عبدالرحمن الشمري',
                        location: 'حي السلي، الرياض',
                        text: 'ركبوا لنا عزل شينكو للهنجر الجديد وكانت تجربة ممتازة. السعر منافس والجودة عالية جداً. أنصح بهم بقوة لأي مشروع صناعي.',
                        rating: 5,
                    },
                    {
                        name: 'م. خالد الدوسري',
                        location: 'المدينة الصناعية الثانية',
                        text: 'تعاملت معهم في 4 مشاريع مختلفة على مدار 3 سنوات. دائماً ملتزمين ومحترفين. الضمان حقيقي وجادين في خدمة ما بعد البيع.',
                        rating: 5,
                    },
                ]}
            />

            {/* ========================================
          Extended FAQ
      ======================================== */}
            <ExtendedFAQ
                title="أسئلة شائعة عن عزل الشينكو"
                subtitle="كل ما تريد معرفته"
                faqs={[
                    {
                        question: 'ما الفرق بين عزل الشينكو والساندوتش بانل؟',
                        answer: 'الشينكو هو الاسم الشائع في السوق السعودي لألواح الساندوتش بانل. كلاهما يشير لنفس المنتج: ألواح معدنية مزدوجة بينها عازل. الفرق يكون في نوع العازل (بولي يوريثان أو صوف صخري) ونوع الصاج الخارجي.'
                    },
                    {
                        question: 'كم تكلفة عزل الشينكو للمتر المربع في الرياض؟',
                        answer: 'تبدأ الأسعار من 85 ريال/م² للألواح الاقتصادية (5 سم) وتصل إلى 150+ ريال/م² للألواح السميكة والمتخصصة. السعر يعتمد على: سماكة اللوح، نوع العازل، سماكة الصاج، الكمية الإجمالية، وصعوبة التركيب. نقدم عرض سعر مجاني ومفصل.'
                    },
                    {
                        question: 'ما السماكة المناسبة للمستودعات العادية؟',
                        answer: 'للمستودعات العادية في الرياض نوصي بسماكة 5-7.5 سم كحد أدنى. للمستودعات المبردة يجب استخدام 10-15 سم حسب درجة التبريد المطلوبة. سماكة أكبر تعني عزل أفضل وتوفير أكثر في الكهرباء.'
                    },
                    {
                        question: 'هل عزل الشينكو مقاوم للحريق؟',
                        answer: 'يعتمد على نوع العازل. ألواح الصوف الصخري تتحمل الحريق حتى 4 ساعات وتُستخدم في المصانع ومحطات الوقود. ألواح البولي يوريثان أقل مقاومة للحريق لكنها أفضل في العزل الحراري. نساعدك في اختيار النوع المناسب حسب متطلبات السلامة.'
                    },
                    {
                        question: 'كم يستغرق تركيب عزل الشينكو؟',
                        answer: 'يعتمد على حجم المشروع. مستودع 500 م² يستغرق 3-5 أيام. المشاريع الكبيرة (2000-5000 م²) تستغرق 2-4 أسابيع. نلتزم بجدول زمني محدد ونسلم في الموعد المتفق عليه.'
                    },
                    {
                        question: 'ما الضمان المقدم على عزل الشينكو؟',
                        answer: 'نقدم ضمان من 10 إلى 20 سنة حسب نوع الباقة. الضمان يشمل: العزل الحراري والمائي، سلامة الألواح من التلف، عيوب التصنيع والتركيب. نوفر أيضاً عقود صيانة سنوية اختيارية.'
                    },
                    {
                        question: 'هل يمكن تركيب عزل شينكو على مبنى قائم؟',
                        answer: 'نعم، يمكن تركيب الشينكو على المباني القائمة سواء كتغطية جديدة أو فوق السقف الحالي. نقوم بتقييم الهيكل الحالي وتصميم نظام تثبيت مناسب. هذا الخيار أسرع وأوفر من إعادة البناء.'
                    },
                    {
                        question: 'ما الألوان المتاحة لألواح الشينكو؟',
                        answer: 'نوفر تشكيلة واسعة من الألوان: الأبيض (الأكثر شيوعاً للتبريد)، البيج، الأزرق، الأخضر، الرمادي، وألوان خاصة حسب الطلب. الألوان الفاتحة تعكس أشعة الشمس وتحسن كفاءة العزل.'
                    },
                ]}
            />

            {/* ========================================
          Areas Covered
      ======================================== */}
            <AreasCovered
                title="نخدم جميع مناطق الرياض"
                subtitle="تغطية شاملة للمنطقة الصناعية والتجارية"
                areas={[
                    {
                        name: 'المناطق الصناعية',
                        districts: ['الصناعية الأولى', 'الصناعية الثانية', 'الصناعية الثالثة', 'صناعية العاصمة', 'صناعية الخرج']
                    },
                    {
                        name: 'شمال الرياض',
                        districts: ['الملقا', 'الياسمين', 'العارض', 'القيروان', 'النرجس', 'العقيق']
                    },
                    {
                        name: 'شرق الرياض',
                        districts: ['الخليج', 'النسيم', 'الروابي', 'السلي', 'الصفا']
                    },
                    {
                        name: 'غرب الرياض',
                        districts: ['العريجاء', 'طويق', 'الشفا', 'ظهرة لبن', 'نمار']
                    },
                    {
                        name: 'جنوب الرياض',
                        districts: ['العزيزية', 'الدار البيضاء', 'الفيصلية', 'الحزم', 'المصانع']
                    },
                    {
                        name: 'المناطق القريبة',
                        districts: ['الخرج', 'الدرعية', 'الدلم', 'المزاحمية', 'الحريق']
                    },
                ]}
            />

            {/* ========================================
          CTA Banner
      ======================================== */}
            <CTABanner
                title="احصل على عرض سعر مجاني لمشروعك"
                description="معاينة مجانية وتصميم هندسي وعرض سعر تفصيلي خلال 24 ساعة"
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
                        title: 'عزل فوم بالرياض',
                        description: 'عزل رغوي متكامل للأسطح والجدران',
                        href: '/services/foam-insulation',
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

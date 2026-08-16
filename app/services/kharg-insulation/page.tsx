import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Phone, MessageCircle, CheckCircle, Thermometer, Droplets, Zap, Award, Clock, Users, Home, Factory, Building, MapPin, Sun, Snowflake } from 'lucide-react'
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
    title: 'شركة عزل فوم بالخرج | 0551777962 | ضمان 15 سنة| شركة العالمية للعوازل',
    description: 'شركة عزل فوم بالخرج متخصصة في عزل الفوم البولي يوريثان ✅ عزل حراري ومائي ✅ ضمان 15 سنوات ✅ توفير 50% من الكهرباء ✅ نخدم الخرج والدلم والمناطق المجاورة. اتصل الآن: 0551777962',
    keywords: ['شركة عزل فوم بالخرج', 'شركة عزل فوم الخرج', 'عزل بولي يوريثان بالخرج', 'عزل اسطح بالخرج', 'عزل حراري الخرج', 'عزل مائي الخرج'],
}

export default function FoamInsulationKharjPage() {
    return (
        <>
            <StructuredData
                type="service"
                pageData={{
                    title: 'شركة عزل فوم بالخرج | 0551777962 | ضمان 15 سنة| شركة العالمية للعوازل',
                    description: 'شركة عزل فوم بالخرج متخصصة في عزل الفوم البولي يوريثان ✅ عزل حراري ومائي ✅ ضمان 15 سنوات ✅ توفير 50% من الكهرباء',
                    url: 'https://elazzl.sa/services/kharg-insulation'
                }}
                aggregateRating={{
                    ratingValue: 4.9,
                    reviewCount: 46789
                }}
                reviews={[
                    {
                        author: 'ابو فيصل',
                        reviewBody: 'شغل نظيف ومرتب، والخزان رجع كأنه جديد.',
                        reviewRating: 5,
                        datePublished: '2025-02-12'
                    },
                    {
                        author: 'صالح التميمي',
                        reviewBody: 'خدمة ممتازة وسعر مناسب.',
                        reviewRating: 5,
                        datePublished: '2025-01-18'
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
                                <span className="text-brand-orange-400">عزل فوم بالخرج</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                شركة عزل فوم بالخرج
                                <span className="block text-brand-orange-400 mt-3">بولي يوريثان عالي الجودة</span>
                            </h1>

                            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                                أفضل شركة عزل فوم بالخرج تقدم خدمات عزل الفوم الرغوي المتكامل لجميع أنواع الأسطح. نخدم محافظة الخرج والدلم والهياثم وجميع المناطق المجاورة بأعلى معايير الجودة وأسعار منافسة.
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
                                    <div className="text-2xl font-bold text-brand-orange-300">+300</div>
                                    <div className="text-sm text-gray-300">مشروع بالخرج</div>
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
                                        <MapPin className="w-10 h-10 text-brand-orange-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold">عزل فوم معتمد</h3>
                                    <p className="text-gray-500 mt-2">خدمة محافظة الخرج</p>
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
                    { value: '+300', label: 'مشروع بالخرج' },
                    { value: '15', label: 'سنة خبرة', suffix: '+' },
                    { value: '50', label: 'توفير في الكهرباء', suffix: '%' },
                    { value: '10', label: 'سنوات ضمان' },
                ]}
                variant="light"
            />

            {/* ========================================
          Introduction Block - What is Foam Insulation?
      ======================================== */}
            <IntroBlock
                title="لماذا عزل الفوم ضروري في الخرج؟"
                subtitle="حماية منزلك من مناخ الخرج القاسي"
                paragraphs={[
                    "تتميز محافظة الخرج بمناخها الصحراوي القاسي حيث تصل درجات الحرارة صيفاً إلى أكثر من 50 درجة مئوية، مما يجعل عزل الأسطح والجدران ضرورة حتمية وليس رفاهية. عزل الفوم البولي يوريثان هو الحل الأمثل لمواجهة هذه الظروف المناخية القاسية.",
                    "نحن شركة متخصصة في عزل الفوم بالخرج منذ أكثر من 15 عاماً، ننفذ مئات المشاريع سنوياً في الخرج والدلم والهياثم والسلمية وجميع القرى والمراكز التابعة. نفهم جيداً طبيعة المباني في المنطقة ومتطلبات العزل الخاصة بها.",
                    "يوفر عزل الفوم عزلاً حرارياً ومائياً متكاملاً في طبقة واحدة، يمنع انتقال الحرارة للمبنى صيفاً ويحافظ على درجة حرارة مريحة داخلياً مع توفير يصل إلى 50% من فاتورة الكهرباء. كما يحمي السطح من مياه الأمطار والرطوبة."
                ]}
                image="/services/serv13.jpeg"
                imageAlt="عزل فوم بالخرج - رش الفوم على السطح"
                highlights={[
                    { icon: <Sun className="w-5 h-5" />, text: 'حماية من حرارة الصيف' },
                    { icon: <Droplets className="w-5 h-5" />, text: 'عزل مائي 100%' },
                    { icon: <Zap className="w-5 h-5" />, text: 'توفير الطاقة' },
                    { icon: <Shield className="w-5 h-5" />, text: 'ضمان 10 سنوات' },
                ]}
            />

            {/* ========================================
           Material Showcase
           ======================================== */}
            <MaterialShowcase
                title="أنواع عزل الفوم المستخدمة بالخرج"
                subtitle="حلول مخصصة لمناخ المنطقة"
                materials={[
                    {
                        title: "فوم بولي يوريثان مغلق الخلايا",
                        description: "النوع الأفضل والأكثر استخداماً في الخرج. يتميز بكثافة عالية تصل إلى 45 كجم/م³ وقدرة فائقة على مقاومة الحرارة الشديدة. يوفر عزلاً مائياً محكماً ولا يمتص الرطوبة نهائياً.",
                        image: "/services/serv1.jpeg",
                        features: ["كثافة عالية 40-45 كجم/م³", "مقاومة حرارة حتى 180°C", "عزل مائي 100%", "عمر افتراضي 25+ سنة"],
                        recommendedFor: "جميع أنواع الأسطح بالخرج"
                    },
                    {
                        title: "فوم بولي يوريثان مع طبقة حماية",
                        description: "عزل الفوم مع طبقة أكريليك عاكسة تزيد من كفاءة العزل وتحمي الفوم من أشعة الشمس المباشرة. مثالي للأسطح المكشوفة التي تتعرض للشمس طوال اليوم.",
                        image: "/services/serv2.jpeg",
                        features: ["طبقة حماية UV", "لون أبيض عاكس", "مقاومة للخدش", "جمالية عالية"],
                        recommendedFor: "الأسطح المكشوفة والبادرووم"
                    }
                ]}
            />

            {/* ========================================
           Tech Specs
           ======================================== */}
            <TechSpecs
                title="المواصفات الفنية لعزل الفوم"
                specs={[
                    { label: "الكثافة (Density)", value: "40 - 45 كجم/م³", icon: <Factory className="w-4 h-4" /> },
                    { label: "الموصلية الحرارية (K-Value)", value: "0.022 وات/م.ك", icon: <Thermometer className="w-4 h-4" /> },
                    { label: "قوة الضغط", value: "250 - 300 كيلو باسكال", icon: <Shield className="w-4 h-4" /> },
                    { label: "امتصاص الماء", value: "< 2% من الحجم", icon: <Droplets className="w-4 h-4" /> },
                    { label: "مقاومة الحرارة", value: "حتى 180°C", icon: <Sun className="w-4 h-4" /> },
                    { label: "العمر الافتراضي", value: "25 - 30 سنة", icon: <Clock className="w-4 h-4" /> },
                ]}
            />

            {/* ========================================
           Process Visualizer
           ======================================== */}
            <ProcessVisualizer
                title="خطوات تنفيذ عزل الفوم بالخرج"
                steps={[
                    {
                        title: "المعاينة المجانية",
                        description: "يقوم فريقنا بزيارة موقعك في الخرج أو المناطق المجاورة لفحص السطح وأخذ القياسات وتقديم عرض سعر مفصل مجاناً.",
                        image: "/services/serv3.jpeg"
                    },
                    {
                        title: "تجهيز السطح",
                        description: "ننظف السطح جيداً من الأتربة والشوائب ونعالج أي تشققات أو مشاكل موجودة قبل تطبيق العزل لضمان أفضل التصاق.",
                        image: "/services/serv4.jpeg"
                    },
                    {
                        title: "رش طبقات الفوم",
                        description: "نقوم برش الفوم البولي يوريثان بالسماكة المتفق عليها مع تغطية كاملة للسطح والزوايا والتفاصيل حول المكيفات والمواسير.",
                        image: "/services/serv5.jpeg"
                    },
                    {
                        title: "طبقة الحماية والتسليم",
                        description: "بعد جفاف الفوم نضيف طبقة الحماية الأكريليك ثم نجري فحصاً شاملاً للجودة ونسلم العميل شهادة الضمان.",
                        image: "/services/ser6.jpeg"
                    }
                ]}
            />

            {/* ========================================
          Comparison Table
      ======================================== */}
            <ComparisonTable
                title="مقارنة أنواع العزل للمباني بالخرج"
                subtitle="اختر الأفضل لمنزلك"
                headers={['عزل الفوم', 'عزل البيتومين', 'عزل الرولات']}
                recommendedIndex={0}
                rows={[
                    { feature: 'العزل الحراري', options: ['ممتاز ⭐⭐⭐⭐⭐', 'متوسط ⭐⭐⭐', 'جيد ⭐⭐⭐⭐'] },
                    { feature: 'العزل المائي', options: ['ممتاز ⭐⭐⭐⭐⭐', 'ممتاز ⭐⭐⭐⭐⭐', 'جيد ⭐⭐⭐⭐'] },
                    { feature: 'العمر الافتراضي', options: ['20-25 سنة', '10-15 سنة', '10-12 سنة'] },
                    { feature: 'مقاومة الحرارة العالية', options: ['ممتازة (180°C)', 'متوسطة (100°C)', 'ضعيفة (80°C)'] },
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
                title="عزل فيلا سكنية بحي الخالدية - الخرج"
                location="حي الخالدية، الخرج"
                challenge="كان صاحب الفيلا يعاني من حرارة شديدة في الدور الثاني صيفاً مع فاتورة كهرباء مرتفعة تصل إلى 3000 ريال شهرياً رغم تشغيل التكييف على أقصى قوة."
                solution="قمنا بتطبيق عزل فوم بولي يوريثان بسماكة 5 سم على سطح الفيلا (420 م²) مع طبقة حماية أكريليك عاكسة للحرارة."
                results={[
                    { label: 'توفير الكهرباء', value: '48%' },
                    { label: 'انخفاض الحرارة الداخلية', value: '10°C' },
                    { label: 'مدة التنفيذ', value: 'يومين' },
                ]}
                beforeImage="/services/serv7.jpeg"
                afterImage="/services/serv8.jpeg"
            />

            {/* Gallery */}
            <ImageGallery
                title="معرض مشاريع الفوم بالخرج"
                subtitle="أحدث مشاريعنا في المنطقة"
                images={[
                    { src: '/services/serv9.jpeg', alt: 'عزل جدران', title: 'عزل جدران بالخرج', location: 'حي العزيزية' },
                    { src: '/services/serv10.jpeg', alt: 'عزل سطح', title: 'عزل سطح شينكو', location: 'الصناعية' },
                    { src: '/services/serv11.jpeg', alt: 'فوم بولي يوريثان', title: 'عزل مزارع', location: 'اليمامة' },
                    { src: '/services/serv13.jpeg', alt: 'عزل فوم كامل', title: 'عزل حراري مائي', location: 'حي الناصرية' },
                ]}
            />

            {/* ========================================
          Pricing Cards
      ======================================== */}
            <PricingCards
                title="أسعار عزل الفوم بالخرج"
                subtitle="عروض خاصة لعملاء الخرج"
                tiers={[
                    {
                        name: 'باقة اقتصادية',
                        price: '25',
                        unit: 'ريال/م²',
                        description: 'مناسبة للأسطح والمساحات الصغيرة',
                        features: [
                            'سماكة 3 سم',
                            'ضمان 5 سنوات',
                            'عزل حراري ومائي',
                            'معاينة مجانية',
                            'تنفيذ سريع',
                        ],
                    },
                    {
                        name: 'باقة قياسية',
                        price: '30',
                        unit: 'ريال/م²',
                        description: 'الخيار الأفضل للفلل والمنازل',
                        features: [
                            'سماكة 4 سم',
                            'ضمان 10 سنوات',
                            'عزل حراري ومائي',
                            'طبقة حماية أكريليك',
                            'صيانة سنوية مجانية',
                            'شهادة ضمان موثقة',
                        ],
                        highlighted: true,
                        badge: 'الأكثر طلباً',
                    },
                    {
                        name: 'باقة بريميوم',
                        price: '35',
                        unit: 'ريال/م²',
                        description: 'للمشاريع الكبيرة والمزارع',
                        features: [
                            'سماكة 5 سم أو أكثر',
                            'ضمان 15 سنة',
                            'فوم عالي الكثافة',
                            'طبقة حماية مزدوجة',
                            'صيانة دورية مجانية',
                            'تقرير فني سنوي',
                            'أولوية في الخدمة',
                        ],
                    },
                ]}
            />

            {/* ========================================
          Common Mistakes
      ======================================== */}
            <CommonMistakes
                title="أخطاء شائعة في عزل الفوم بالخرج"
                subtitle="تجنب هذه الأخطاء"
                mistakes={[
                    {
                        title: 'التعامل مع شركات غير متخصصة',
                        problem: 'بعض الشركات تعمل في الخرج بدون خبرة كافية، مما يسبب مشاكل في جودة العزل وعدم الالتزام بالمواعيد.',
                        solution: 'اختر شركة لها سمعة جيدة ومشاريع سابقة موثقة في الخرج. اطلب مراجع من عملاء سابقين.'
                    },
                    {
                        title: 'تجاهل حالة السطح القديم',
                        problem: 'تطبيق الفوم على سطح متشقق أو رطب يمنع الالتصاق الجيد ويسبب مشاكل لاحقاً.',
                        solution: 'يجب معالجة جميع المشاكل في السطح قبل تطبيق العزل، وتنظيفه وتجفيفه جيداً.'
                    },
                    {
                        title: 'التوفير بتقليل السماكة',
                        problem: 'سماكة أقل من 3 سم غير كافية لمناخ الخرج الحار، وتفقد معظم فعالية العزل.',
                        solution: 'الحد الأدنى الموصى به للخرج هو 4 سم، والأفضل 5 سم للحصول على أقصى توفير في الكهرباء.'
                    },
                    {
                        title: 'إهمال طبقة الحماية',
                        problem: 'تعرض الفوم لأشعة الشمس المباشرة في الخرج يسبب تآكله خلال سنوات قليلة.',
                        solution: 'طبقة الحماية الأكريليك ضرورية لحماية الفوم وإطالة عمره إلى 25 سنة وأكثر.'
                    },
                ]}
            />

            {/* ========================================
          Expert Tips
      ======================================== */}
            <ExpertTips
                title="نصائح خبراء العزل في الخرج"
                subtitle="من خبرتنا 15 سنة في المنطقة"
                tips={[
                    {
                        title: 'أفضل وقت للعزل',
                        description: 'الربيع (مارس-أبريل) والخريف (سبتمبر-أكتوبر) هما أفضل الأوقات للعزل في الخرج. تجنب أيام الحرارة الشديدة والأمطار.'
                    },
                    {
                        title: 'اهتم بالتفاصيل',
                        description: 'تأكد من تغطية جميع الزوايا وحول المكيفات والمواسير. نقاط الضعف هذه تسبب معظم مشاكل التسرب.'
                    },
                    {
                        title: 'اطلب ضمان موثق',
                        description: 'لا تقبل بضمان شفهي. احصل على شهادة ضمان مكتوبة ومختومة توضح المدة والشروط.'
                    },
                    {
                        title: 'قارن بين أكثر من عرض',
                        description: 'خذ عروضاً من 2-3 شركات وقارن بين الجودة والسعر والضمان. لا تختر الأرخص دائماً.'
                    },
                    {
                        title: 'تابع التنفيذ شخصياً',
                        description: 'احضر أثناء تطبيق العزل للتأكد من السماكة والجودة والتغطية الكاملة لجميع الأجزاء.'
                    },
                    {
                        title: 'خطط للصيانة الدورية',
                        description: 'فحص العزل كل سنة يضمن اكتشاف أي مشاكل مبكراً ويطيل عمر العزل لسنوات طويلة.'
                    },
                ]}
            />

            {/* ========================================
          Testimonials Carousel
      ======================================== */}
            <TestimonialsCarousel
                title="آراء عملائنا في الخرج"
                subtitle="تجارب حقيقية"
                testimonials={[
                    {
                        name: 'أبو عبدالله السبيعي',
                        location: 'حي الريان، الخرج',
                        text: 'عزلوا لي سطح البيت وفيلا الوالد. شغل ممتاز وملتزمين بالموعد. فرق الحرارة واضح جداً والفاتورة انخفضت من 2800 إلى 1500 ريال. جزاهم الله خير.',
                        rating: 5,
                    },
                    {
                        name: 'م. سلطان الدوسري',
                        location: 'الدلم',
                        text: 'تعاملت معهم لعزل مستودع كبير في الدلم. فريق محترف وأسعار معقولة. التنفيذ كان سريع وجودة العمل ممتازة. أنصح بهم بقوة.',
                        rating: 5,
                    },
                    {
                        name: 'عبدالرحمن العتيبي',
                        location: 'السلمية',
                        text: 'أفضل شركة عزل تعاملت معها. جاؤوا للسلمية بدون أي تأخير. السعر مناسب والعمل متقن. شهادة الضمان واضحة ومفصلة. ',
                        rating: 5,
                    },
                ]}
            />

            {/* ========================================
          Extended FAQ
      ======================================== */}
            <ExtendedFAQ
                title="أسئلة شائعة عن عزل الفوم بالخرج"
                subtitle="كل ما تريد معرفته"
                faqs={[
                    {
                        question: 'كم سعر متر عزل الفوم في الخرج؟',
                        answer: 'يبدأ سعر عزل الفوم في الخرج من 25 ريال للمتر المربع (سماكة 3 سم) ويصل إلى 35 ريال للسماكة 5 سم مع طبقة الحماية. الأسعار تشمل المواد والعمالة والضمان. نقدم عروض خاصة للمساحات الكبيرة فوق 500 م².'
                    },
                    {
                        question: 'هل تخدمون جميع مناطق الخرج؟',
                        answer: 'نعم، نغطي جميع أحياء الخرج ومركزها والمناطق القريبة: الدلم، الهياثم، السلمية، نعجان، حي الريان، حي الخالدية، حي الناصرية، الصناعية، وجميع القرى التابعة. المعاينة مجانية لجميع المناطق.'
                    },
                    {
                        question: 'كم يستغرق عزل سطح فيلا في الخرج؟',
                        answer: 'فيلا بمساحة 300-400 م² تستغرق يوم إلى يومين. المنازل الأصغر نصف يوم. المشاريع الكبيرة تحتاج 3-5 أيام. نحدد الوقت الدقيق بعد المعاينة ونلتزم به.'
                    },
                    {
                        question: 'ما أفضل سماكة لعزل الفوم بالخرج؟',
                        answer: 'بسبب الحرارة العالية في الخرج، نوصي بسماكة 4 سم كحد أدنى للمنازل العادية، و5 سم للفلل الكبيرة والأسطح المكشوفة. السماكة الأكبر تعني توفير أكثر في الكهرباء على المدى الطويل.'
                    },
                    {
                        question: 'هل الضمان يشمل منطقة الخرج؟',
                        answer: 'نعم، الضمان يشمل جميع مناطق الخرج والمناطق المجاورة. نقدم ضمان من 5 إلى 15 سنة حسب الباقة. في حال وجود أي مشكلة نصل للموقع خلال 24-48 ساعة.'
                    },
                    {
                        question: 'ما الفرق بين عزل الفوم وعزل البيتومين للخرج؟',
                        answer: 'عزل الفوم أفضل للخرج لأنه يوفر عزل حراري فائق (توفير 50% كهرباء) مقارنة بالبيتومين (20-30%). كما أن الفوم يدوم أطول (20-25 سنة) ولا يتأثر بالحرارة الشديدة مثل البيتومين الذي قد يتشقق.'
                    },
                    {
                        question: 'هل تقدمون خدمة للمزارع والاستراحات؟',
                        answer: 'نعم، نقدم خدمات عزل شاملة للمزارع والاستراحات ومباني المواشي في جميع مناطق الخرج. لدينا باقات خاصة للمساحات الكبيرة بأسعار تنافسية. اتصل للحصول على عرض سعر مخصص.'
                    },
                    {
                        question: 'كيف أتأكد من جودة العزل بعد التركيب؟',
                        answer: 'يمكنك ملاحظة الفرق خلال أسبوع من التركيب: انخفاض في درجة حرارة السقف، تحسن في برودة المكيف، وانخفاض ملحوظ في فاتورة الكهرباء. نقدم أيضاً تقرير فني يوضح السماكة الفعلية والجودة.'
                    },
                ]}
            />

            {/* ========================================
          Areas Covered
      ======================================== */}
            <AreasCovered
                title="نخدم الخرج وجميع المناطق المجاورة"
                subtitle="تغطية شاملة لمحافظة الخرج"
                areas={[
                    {
                        name: 'مدينة الخرج',
                        districts: ['حي الريان', 'حي الخالدية', 'حي الناصرية', 'حي العزيزية', 'حي الفيصلية', 'المنطقة الصناعية']
                    },
                    {
                        name: 'مراكز تابعة',
                        districts: ['الدلم', 'الهياثم', 'السلمية', 'نعجان', 'اليمامة']
                    },
                    {
                        name: 'مناطق قريبة',
                        districts: ['الأفلاج', 'حوطة بني تميم', 'الحريق', 'المزاحمية']
                    },
                    {
                        name: 'خدمات خاصة',
                        districts: ['المزارع', 'الاستراحات', 'مباني المواشي', 'المستودعات']
                    },
                ]}
            />

            {/* ========================================
          CTA Banner
      ======================================== */}
            <CTABanner
                title="احصل على عرض سعر مجاني بالخرج"
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
                        title: 'عزل أسطح بالخرج',
                        description: 'حماية شاملة للأسطح من الحرارة والأمطار',
                        href: '/services/roof-insulation',
                        icon: <Home className="w-6 h-6" />
                    },
                    {
                        title: 'عزل فوم بالرياض',
                        description: 'خدمات عزل الفوم في الرياض',
                        href: '/services/foam-insulation',
                        icon: <Building className="w-6 h-6" />
                    },
                    {
                        title: 'عزل حراري',
                        description: 'توفير الطاقة وخفض فاتورة الكهرباء',
                        href: '/services/thermal-insulation',
                        icon: <Thermometer className="w-6 h-6" />
                    },
                ]}
            />

            <Footer />
        </>
    )
}

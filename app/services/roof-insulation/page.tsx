import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Phone, MessageCircle, CheckCircle, Thermometer, Droplets, Zap, Award, Clock, Users, Home, Factory, Building, MapPin, Sun, CloudRain, Umbrella, Layers } from 'lucide-react'
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
    title: 'شركة عزل أسطح بالرياض | 0551777962 | ضمان 15 سنة| شركة العالمية للعوازل',
    description: 'شركة عزل أسطح بالرياض معتمدة ⭐️ عزل فوم بولي يوريثان وعزل مائي وحراري للأسطح المبلطة و غير المبلطة ✅ توفير 40% من الكهرباء ✅ ضمان شامل 15 سنوات ✅ كشف تسربات مجاني مع العزل',
    keywords: ['شركة عزل أسطح بالرياض', 'عزل فوم بالرياض', 'أفضل شركة عزل بالرياض', 'عزل مائي وحراري بالرياض', 'عزل اسطح شمال الرياض', 'سعر متر عزل الاسطح بالرياض', 'عزل شنكو بالرياض'],
}

export default function RoofInsulationRiyadhPage() {
    return (
        <>
            <StructuredData
                type="service"
                pageData={{
                    title: 'شركة عزل أسطح بالرياض | 0551777962 | ضمان 15 سنة| شركة العالمية للعوازل',
                    description: 'شركة عزل أسطح بالرياض معتمدة ⭐️ عزل فوم بولي يوريثان وعزل مائي وحراري للأسطح المبلطة و غير المبلطة ✅ توفير 40% من الكهرباء ✅ ضمان شامل 15 سنوات ✅ كشف تسربات مجاني مع العزل',
                    url: 'https://elazzl.sa/services/roof-insulation'
                }}
                aggregateRating={{
                    ratingValue: 4.9,
                    reviewCount: 35890
                }}
                reviews={[
                    {
                        author: 'عبدالرحمن العلي',
                        reviewBody: 'شغل ممتاز وسرعة في الإنجاز. السطح صار معزول تماماً عن الحرارة والمطر.',
                        reviewRating: 5,
                        datePublished: '2025-02-20'
                    },
                    {
                        author: 'سلطان المطيري',
                        reviewBody: 'انصح بالتعامل معهم، مصداقية وضمان حقيقي.',
                        reviewRating: 5,
                        datePublished: '2025-01-15'
                    }
                ]}
            />
            <Navbar />

            {/* ========================================
          Hero Section - Enhanced for Riyadh
      ======================================== */}
            <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white py-24 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
                    <img src="/services/serv1.jpeg" alt="خلفية عزل أسطح بالرياض" className="w-full h-full object-cover" />
                </div>

                {/* Background Effects */}
                <div className="absolute inset-0 opacity-30 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange-500 rounded-full filter blur-[100px] opacity-40"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px] opacity-40"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-2 mb-6 text-sm font-medium">
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors">الرئيسية</Link>
                                <span className="text-gray-500">/</span>
                                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">خدماتنا</Link>
                                <span className="text-gray-500">/</span>
                                <span className="text-brand-orange-400">عزل أسطح بالرياض</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                شركة عزل أسطح بالرياض
                                <span className="block text-brand-orange-400 mt-2 text-3xl md:text-4xl">حماية منزلك من حرارة الرياض القاسية</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                                نقدم حلول عزل أسطح متكاملة في الرياض (حراري ومائي) باستخدام أحدث تقنيات الفوم الأمريكي والألماني. نحمي منزلك من تسربات المياه وحرارة الصيف، مع ضمان معتمد يبدأ من 10 سنوات.
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 text-center border border-white/10 hover:border-brand-orange-500/50 transition-colors">
                                    <div className="text-2xl font-bold text-brand-orange-300">15+</div>
                                    <div className="text-sm text-gray-300">سنة خبرة بالرياض</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 text-center border border-white/10 hover:border-brand-orange-500/50 transition-colors">
                                    <div className="text-2xl font-bold text-brand-orange-300">100%</div>
                                    <div className="text-sm text-gray-300">ضمان العزل</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 text-center border border-white/10 hover:border-brand-orange-500/50 transition-colors">
                                    <div className="text-2xl font-bold text-brand-orange-300">2000+</div>
                                    <div className="text-sm text-gray-300">عميل راضٍ</div>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:0551777962"
                                    className="flex items-center justify-center gap-2 bg-brand-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-orange-600 transition-all shadow-lg hover:shadow-brand-orange-500/30 transform hover:-translate-y-1"
                                >
                                    <Phone className="w-5 h-5" />
                                    اتصل الآن: 0551777962
                                </a>
                                <a
                                    href="https://wa.me/966507067378"
                                    className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-600/30 transform hover:-translate-y-1"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    واتساب مباشر
                                </a>
                            </div>
                        </div>

                        {/* Hero Card */}
                        <div className="hidden lg:block relative">
                            {/* Decorative blob */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange-500 to-purple-600 rounded-3xl blur-lg opacity-30"></div>

                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl text-gray-900 border border-gray-100">
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 bg-brand-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
                                        <Home className="w-10 h-10 text-brand-orange-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">عرض العزل المتكامل</h3>
                                    <p className="text-gray-500 mt-2">افضل سعر للمتر في الرياض</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-600 font-medium">سعر المتر يبدأ من</span>
                                        <span className="font-bold text-brand-orange-600 text-xl">18 ريال</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-600 font-medium">الضمان المعتمد</span>
                                        <span className="font-bold text-indigo-600">10 سنوات</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-600 font-medium">كشف تسربات</span>
                                        <span className="font-bold text-green-600">مجاني مع العزل</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-gray-600 font-medium">المعاينة</span>
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-sm">فورية ومجانية</span>
                                    </div>
                                </div>

                                <a
                                    href="tel:0551777962"
                                    className="block w-full mt-8 bg-gray-900 text-white text-center py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
                                >
                                    أطلب المعاينة المجانية
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
                    { value: '+2500', label: 'مشروع بالرياض' },
                    { value: '15', label: 'سنة خبرة', suffix: '+' },
                    { value: '40', label: 'توفير بالطاقة', suffix: '%' },
                    { value: '100', label: 'رضا العملاء', suffix: '%' },
                ]}
                variant="light"
            />

            {/* ========================================
          Introduction Block - Riyadh Specific
      ======================================== */}
            <IntroBlock
                title="لماذا تحتاج لعزل أسطح منزلك في الرياض؟"
                subtitle="حلول جذرية لمشاكل الحرارة والتسربات في العاصمة"
                paragraphs={[
                    "تتميز مدينة الرياض بمناخ صحراوي شديد الحرارة صيفاً، حيث تتجاوز درجات الحرارة حاجز الـ 45 درجة مئوية، مما يجعل العزل الحراري للأسطح ضرورة قصوى وليس رفاهية. بدون عزل جيد، تتسرب الحرارة إلى داخل منزلك، مما يضاعف استهلاك الكهرباء ويقلل من كفاءة المكيفات.",
                    "علاوة على ذلك، تتعرض الرياض لمواسم أمطار قد تكون غزيرة ومفاجئة، مما يعرض الأسطح غير المعزولة لمخاطر تسرب المياه، وتلف الديكورات الجبسية، وتآكل حديد التسليح. نحن في اكزو نقدم حلاً مزدوجاً: عزل يحميك من حرارة الشمس الحارقة ويمنع تسرب مياه الأمطار تماماً.",
                    "نستخدم في مشاريعنا بالرياض أحدث مواد العزل المعتمدة من شركة الكهرباء السعودية، والتي تضمن لك اجتياز الفحص الفني وتخفيض فاتورة الكهرباء بنسبة تصل إلى 40%."
                ]}
                image="/services/serv2.jpeg"
                imageAlt="فني يقوم بعزل سطح في الرياض"
                highlights={[
                    { icon: <Sun className="w-5 h-5" />, text: 'خفض حرارة الدور الأخير 8-10 درجات' },
                    { icon: <Zap className="w-5 h-5" />, text: 'تقليل فاتورة الكهرباء 40%' },
                    { icon: <Umbrella className="w-5 h-5" />, text: 'منع تام لتسربات مياه الأمطار' },
                    { icon: <Award className="w-5 h-5" />, text: 'ضمان معتمد 10 سنوات' },
                ]}
            />

            {/* ========================================
           Material Showcase - Intensive Content
           ======================================== */}
            <MaterialShowcase
                title="أحدث تقنيات مواد العزل المستخدمة بالرياض"
                subtitle="نختار المادة الأنسب لنوع سطح منزلك"
                materials={[
                    {
                        title: "عزل الفوم البولي يوريثان (PU Foam)",
                        description: "التقنية رقم 1 في الرياض حالياً. يتم رشه كسائل ليتمدد ويغطي كافة الشقوق والفراغات، مكوناً طبقة صلبة عازلة للماء والحرارة في آن واحد. يتميز بخفة وزنه وسرعة تنفيذه.",
                        image: "/services/serv3.jpeg",
                        features: ["عزل ثنائي (مائي وحراري)", "تغطية كاملة بدون فواصل", "سريع الجفاف (يمكن استخدام السطح خلال ساعات)", "يعكس أشعة الشمس"],
                        recommendedFor: "الأسطح الخرسانية والشينكو والمستودعات"
                    },
                    {
                        title: "العزل المائي (بيتومين وممبرين)",
                        description: "نستخدم لفائف البيتومين (الممبرين) المدعمة بالبوليستر بسماكات متعددة (3ملم، 4ملم). تعتبر الحل الكلاسيكي والموثوق لمنع تسرب المياه، خاصة في الأسطح المبلطة.",
                        image: "/services/serv4.jpeg",
                        features: ["قوة التصاق عالية", "تحمل عالي للإجهاد الميكانيكي", "عمر افتراضي طويل", "سعر اقتصادي"],
                        recommendedFor: "الأسطح المبلطة، الحمامات، الخزانات"
                    },
                    {
                        title: "العزل الإيبوكسي (Epoxy)",
                        description: "دهان عازل قوي جداً ومقاوم للكيماويات والاحتكاك. يعطي مظهراً جمالياً للسطح ويحميه من التآكل وتسربات المياه الدقيقة.",
                        image: "/services/serv5.jpeg",
                        features: ["مظهر جمالي لامع", "مقاومة للخدش والبري", "مانع قوي للتسرب", "سهل التنظيف"],
                        recommendedFor: "أسطح المستشفيات، المعامل، مواقف السيارات"
                    }
                ]}
            />

            {/* ========================================
           Tech Specs - Detailed
           ======================================== */}
            <TechSpecs
                title="المواصفات الفنية المعتمدة"
                specs={[
                    { label: "كثافة الفوم", value: "40 - 45 كجم/م³", icon: <Factory className="w-4 h-4" /> },
                    { label: "التوصيل الحراري", value: "0.021 وات/م.ك (منخفض جداً)", icon: <Thermometer className="w-4 h-4" /> },
                    { label: "نسبة الخلايا المغلقة", value: "> 95% (عزل مائي تام)", icon: <Droplets className="w-4 h-4" /> },
                    { label: "سماكة العزل", value: "3 سم - 5 سم (حسب الطلب)", icon: <Layers className="w-4 h-4" /> },
                    { label: "قوة الالتصاق", value: "عالية جداً مع الخرسانة والحديد", icon: <Shield className="w-4 h-4" /> },
                    { label: "مقاومة الحريق", value: "Class B2 / B3", icon: <Available className="w-4 h-4" /> },
                ]}
            />

            {/* ========================================
           Process Visualizer
           ======================================== */}
            <ProcessVisualizer
                title="كيف نقوم بعزل سطح منزلك؟"
                steps={[
                    {
                        title: "التنظيف والتهيئة",
                        description: "نقوم بكنس وغسل السطح بالكامل لإزالة الأتربة والشوائب، ونتأكد من خلوه من أي عوائق تمنع التصاق العازل.",
                        image: "/services/ser6.jpeg"
                    },
                    {
                        title: "معالجة التشققات",
                        description: "نستخدم معجون اسمنتي خاص أو مواد سيكاولس لإغلاق جميع الشروخ والفتحات في السطح والزوايا (الرقبة).",
                        image: "/services/serv7.jpeg"
                    },
                    {
                        title: "تطبيق العزل (الطبقة الأولى)",
                        description: "نبدأ برش طبقة أساس أو فرد لفائف العزل وتثبيتها بالحرق أو اللصق لضمان تغطية شاملة.",
                        image: "/services/serv8.jpeg"
                    },
                    {
                        title: "طبقة الحماية والاكريليك",
                        description: "بعد جفاف العزل، ندهن طبقة اكريليك (للفوم) لحمايته من الاشعة فوق البنفسجية واطالة عمره الافتراضي.",
                        image: "/services/serv9.jpeg"
                    }
                ]}
            />

            {/* ========================================
          Comparison Table
      ======================================== */}
            <ComparisonTable
                title="مقارنة بين أنواع العزل الشائعة بالرياض"
                subtitle="ساعدك قرارك باختيار الأنسب"
                headers={['عزل فوم (بولي يوريثان)', 'عزل مائي (رولات)', 'عزل مائي واسمنتي']}
                recommendedIndex={0}
                rows={[
                    { feature: 'نوع العزل', options: ['حراري ومائي (2 في 1)', 'مائي فقط', 'مائي وطبقة حماية'] },
                    { feature: 'الوزن على السقف', options: ['خفيف جداً', 'ثقيل نسبياً', 'متوسط'] },
                    { feature: 'السطح المناسب', options: ['جميع الأسطح (شينكو/خرسانة)', 'الخرسانة المبلطة وغير المبلطة', 'الخرسانة'] },
                    { feature: 'سرعة التنفيذ', options: ['يوم واحد', '2-3 أيام', '2 يوم'] },
                    { feature: 'السعر', options: ['اقتصادي وموفر', 'متوسط', 'مرتفع'] },
                    { feature: 'العمر الافتراضي', options: ['15+ سنة', '10 سنوات', '12 سنة'] },
                ]}
            />

            {/* ========================================
          Areas Covered - All Riyadh Districts
      ======================================== */}
            <AreasCovered
                title="تغطية شاملة لجميع أحياء الرياض"
                subtitle="فِرقنا جاهزة للوصول إليك في أي مكان داخل الرياض"
                areas={[
                    {
                        name: 'شمال الرياض',
                        districts: ['حي الملقا', 'حي الياسمين', 'حي النرجس', 'حي الصحافة', 'حي العقيق', 'حي القيروان', 'حي حطين']
                    },
                    {
                        name: 'شرق الرياض',
                        districts: ['حي النسيم', 'حي الرمال', 'حي المونسية', 'حي اليرموك', 'حي الخليج', 'حي اشبيلية', 'حي النهضة']
                    },
                    {
                        name: 'غرب الرياض',
                        districts: ['حي لبن', 'حي طويق', 'حي السويدي', 'حي البديعة', 'حي العريجاء', 'حي شبرا', 'حي الدخل المحدود']
                    },
                    {
                        name: 'جنوب الرياض',
                        districts: ['حي الشفا', 'حي العزيزية', 'حي الدار البيضاء', 'حي المناخ', 'حي بدر', 'حي المروة']
                    },
                ]}
            />

            {/* ========================================
           Testimonials Carousel - Riyadh Customers
       ======================================== */}
            <TestimonialsCarousel
                title="آراء عملاء الرياض"
                subtitle="قصص نجاح حقيقية من جيرانك"
                testimonials={[
                    {
                        name: 'أبو فهد الدوسري',
                        location: 'حي الملقا - شمال الرياض',
                        text: 'كانت حرارة الدور الثاني لا تطاق في الظهر. ركبنا عزل فوم من العالمية للعوازل والفرق صراحة خيالي. المكيف صار يبرد ويفصل، والشغل كان نظيف جداً.',
                        rating: 5,
                    },
                    {
                        name: 'أم عبد الرحمن',
                        location: 'حي الرمال - شرق الرياض',
                        text: 'بيتنا جديد وكان فيه تهريب موية مع أول مطرة قوية. جو الشباب وكشفوا عالمكان وعزلوه بالكامل. السعر ممتاز وتعاملهم راقي.',
                        rating: 5,
                    },
                    {
                        name: 'م. سامي الحربي',
                        location: 'حي لبن - غرب الرياض',
                        text: 'بصفتي مهندس، فاهم شغلهم. المواد المستخدمة أصلية والكثافة مضبوطة. عطوني ضمان 10 سنوات موثق. انصح بالتعامل معهم.',
                        rating: 5,
                    },
                ]}
            />

            {/* ========================================
          Extended FAQ - Riyadh Context
      ======================================== */}
            <ExtendedFAQ
                title="الأسئلة الشائعة عن عزل الأسطح بالرياض"
                subtitle="كل ما يدور في ذهنك عن العزل"
                faqs={[
                    {
                        question: 'كم سعر متر عزل الفوم بالرياض؟',
                        answer: 'يتراوح سعر متر عزل الفوم في الرياض ما بين 25 إلى 45 ريال حسب السماكة (3 سم، 4 سم، 5 سم) ونوع المادة وطبقة الحماية (الاكريليك). نقدم عروضاً خاصة للمساحات الكبيرة والمساجد.'
                    },
                    {
                        question: 'هل العزل معتمد لدى شركة الكهرباء؟',
                        answer: 'نعم، جميع مواد العزل التي نستخدمها (خاصة الفوم البولي يوريثان) مطابقة لمواصفات كود البناء السعودي ومعتمدة من شركة الكهرباء لتخفيض الفاتورة.'
                    },
                    {
                        question: 'ما هو افضل عزل للأسطح المبلطة؟',
                        answer: 'للأسطح المبلطة القديمة، نفضل استخدام "عزل الشاش" (سيكو كوت بلس) أو الفوم فوق البلاط في بعض الحالات بعد المعالجة. كما يمكن استخدام العزل المائي الشفاف (الايبوكسي) اذا كان البلاط بحالة جيدة.'
                    },
                    {
                        question: 'هل تقدمون ضمان على العزل؟',
                        answer: 'بالتأكيد. نقدم ضماناً رسمياً ومصدقاً يتراوح من 10 إلى 15 سنة حسب نوع العزل المنفذ. الضمان يشمل إصلاح أي عيوب أو تسربات قد تظهر لا سمح الله مجاناً.'
                    },
                    {
                        question: 'هل يمكن عزل السطح في الشتاء/موسم الأمطار؟',
                        answer: 'نعم يمكن، ولكن يجب اختيار أيام صحوة وجافة تماماً. نحن نتابع الأرصاد بدقة ونستخدم مجففات صناعية لتجفيف السطح تماماً قبل العزل لضمان التصاق المادة.'
                    },
                ]}
            />

            {/* ========================================
           Gallery
           ======================================== */}
            <ImageGallery
                title="معرض مشاريعنا بالرياض"
                subtitle="شاهد جودة التنفيذ على الطبيعة"
                images={[
                    { src: '/services/serv11.jpeg', alt: 'عزل سطح فيلا بالرياض', title: 'عزل حراري لفيلا بحي الياسمين', location: 'الرياض - الياسمين' },
                    { src: '/services/serv13.jpeg', alt: 'عزل مائي لمجمع سكني', title: 'مشروع عزل مجمع سكني', location: 'الرياض - العزيزية' },
                    { src: '/services/serv1.jpeg', alt: 'عزل سطح شينكو', title: 'عزل مستودع شينكو', location: 'صناعية الرياض' },
                    { src: '/services/serv2.jpeg', alt: 'فني عزل اسطح', title: 'فريق العمل أثناء التنفيذ', location: 'غرب الرياض' },
                ]}
            />

            {/* ========================================
          Pricing Cards
      ======================================== */}
            <PricingCards
                title="باقات وعروض أسعار العزل بالرياض"
                subtitle="أسعار شفافة ومناسبة للجميع"
                tiers={[
                    {
                        name: 'الباقة الاقتصادية',
                        price: '25',
                        unit: 'ريال/م²',
                        description: 'حماية أساسية ضد التسربات',
                        features: [
                            'عزل مائي (رولات بيتومين)',
                            'طبقة واحدة',
                            'ضمان 5 سنوات',
                            'تنظيف السطح',
                        ],
                    },
                    {
                        name: 'الباقة الماسية (الأكثر طلباً)',
                        price: '35',
                        unit: 'ريال/م²',
                        description: 'عزل فوم متكامل (مائي وحراري)',
                        features: [
                            'عزل فوم سماكة 3 سم',
                            'طبقة حماية اكريليك',
                            'عزل مائي 100%',
                            'عزل حراري 100%',
                            'ضمان 10 سنوات',
                            'كشف تسربات مجاني',
                        ],
                        highlighted: true,
                        badge: 'عرض الموسم',
                    },
                    {
                        name: 'باقة البريميوم',
                        price: '45',
                        unit: 'ريال/م²',
                        description: 'أعلى درجات الحماية والعزل',
                        features: [
                            'عزل فوم سماكة 5 سم (كثافة عالية)',
                            'طبقتين حماية (دبل كوت)',
                            'ضمان 15 سنة',
                            'صيانة دورية مجانية',
                            'اختبار دقيق بالماء',
                        ],
                    },
                ]}
            />

            {/* ========================================
           Expert Tips
           ======================================== */}
            <ExpertTips
                title="نصائح مهندسي العزل للحفاظ على سطحك"
                subtitle="كيف تزيد من عمر العزل الافتراضي"
                tips={[
                    {
                        title: 'نظافة السطح دورية',
                        description: 'احرص على كنس السطح وإزالة الأتربة كل 3 أشهر، فكترة الغبار قد تؤثر على طبقة الحماية العاكسة.'
                    },
                    {
                        title: 'فحص مصارف المياه',
                        description: 'تأكد دائماً قبل موسم الأمطار من أن "المزاريب" (صفايات المطر) مفتوحة وليست مسدودة لمنع تجمع المياه.'
                    },
                    {
                        title: 'تفقد الخزانات العلوية',
                        description: 'أي تسرب من الخزان العلوي قد يفسد العزل على المدى الطويل. افحص عوامة الخزان باستمرار.'
                    },
                    {
                        title: 'عدم وضع أغراض ثقيلة وحادة',
                        description: 'تجنب سحب اسطوانات الغاز أو وضع مخلفات حديدية مباشرة على العزل، فقد تسبب ثقوباً فيه.'
                    },
                ]}
            />

            {/* ========================================
          CTABanner
      ======================================== */}
            <CTABanner
                title="هل تبحث عن أفضل شركة عزل بالرياض؟"
                description="لا تتردد في الاتصال بنا لحماية منزلك وتوفير أموالك. المعاينة مجانية بالكامل!"
                primaryButton={{ text: '📞 اتصل الآن: 0551777962', href: 'tel:0551777962' }}
                secondaryButton={{ text: 'مراسلة واتساب', href: 'https://wa.me/966507067378' }}
                variant="orange"
            />

            {/* ========================================
          Related Services
      ======================================== */}
            {/* <RelatedServices
                title="خدمات أخرى نقدمها في الرياض"
                services={[
                    {
                        title: 'كشف تسربات المياه',
                        description: 'فحص إلكتروني دقيق بدون تكسير',
                        href: '/services/roof-insulation',
                        icon: <Building className="w-6 h-6" />
                    },
                    {
                        title: 'شركة عزل أسطح بالرياض',
                        description: 'خدماتنا تغطي الرياض',
                        href: '/services/kharg-insulation',
                        icon: <Droplets className="w-6 h-6" />
                    },
                    {
                        title: 'عزل فوم بالرياض',
                        description: 'خدماتنا تغطي الرياض',
                        href: '/services/foam-insulation',
                        icon: <Home className="w-6 h-6" />
                    },
                ]}
            /> */}

            <Footer />
        </>
    )
}

function Available({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    )
}

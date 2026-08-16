import { Metadata } from 'next'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from 'next/image'
import Link from 'next/link'
import { Award, Users, Clock, MapPin, Shield, Building, CheckCircle, Target, Eye, Phone, Star, Zap, Droplets, Thermometer } from 'lucide-react'

export const metadata: Metadata = {
    title: 'من نحن | شركة العالمية للعوازل',
    description: 'شركة العالمية للعوازل - رواد عزل الفوم والأسطح في الرياض لأكثر من 15 عاماً.',
    keywords: ['شركة عزل فوم بالرياض', 'عزل اسطح بالرياض', 'عزل مائي وحراري', 'من نحن', 'شركة عزل بالرياض'],
}

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6">
                            <Star className="w-5 h-5 text-brand-orange-400 fill-brand-orange-400" />
                            <span className="text-white font-medium">أكثر من 15 عاماً من الخبرة</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            من نحن
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            الشركة الرائدة في مجال عزل الأسطح والمباني في الرياض والخرج
                        </p>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-brand-orange-50 px-4 py-2 rounded-full">
                                <Award className="w-5 h-5 text-brand-orange-500" />
                                <span className="text-navy-600 font-semibold">خبراء عزل الأسطح في الرياض</span>
                            </div>

                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                                    نحمي منزلك من الحرارة والرطوبة منذ أكثر من 15 عاماً
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                    <p>
                                        شركة عزل أسطح بالرياض هي الخيار الأمثل للحماية الشاملة من الحرارة والرطوبة.
                                        تأسست شركتنا عام 2009 بهدف تقديم حلول عزل متكاملة تواكب احتياجات المباني في المملكة العربية السعودية.
                                    </p>
                                    <p>
                                        نستخدم أحدث التقنيات وأفضل المواد العالمية، مع فريق من المتخصصين المدربين على أعلى مستوى.
                                        نلتزم بتقديم خدمات عالية الجودة مع ضمان يصل إلى 10 سنوات على جميع أعمالنا.
                                    </p>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                    <Shield className="w-10 h-10 text-brand-orange-500 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">ضمان 10 سنوات</h3>
                                    <p className="text-gray-600">نقدم ضمان شامل على جميع أعمال العزل لراحة بالك</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                    <Users className="w-10 h-10 text-brand-orange-500 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">فريق محترف</h3>
                                    <p className="text-gray-600">فنيين متخصصين مدربين على أحدث تقنيات العزل</p>
                                </div>
                            </div>
                        </div>

                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/services/serv9.jpeg"
                                        alt="أعمال عزل الأسطح بالفوم في الرياض"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="bg-navy-500 p-6 rounded-2xl text-white">
                                    <Clock className="w-8 h-8 mb-3 text-brand-orange-300" />
                                    <h3 className="text-xl font-bold mb-2">معاينة مجانية</h3>
                                    <p className="text-gray-200">نصل إليك خلال 24 ساعة لتقييم المشروع</p>
                                </div>
                            </div>
                            <div className="space-y-4 mt-8">
                                <div className="bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 p-6 rounded-2xl text-white">
                                    <CheckCircle className="w-8 h-8 mb-3" />
                                    <h3 className="text-xl font-bold mb-2">جودة معتمدة</h3>
                                    <p className="text-orange-100">مواد عزل معتمدة من الجهات الرسمية</p>
                                </div>
                                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/services/serv10.jpeg"
                                        alt="عزل فوم بالخرج"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-navy-600">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '+2000', label: 'مشروع ناجح', icon: Building },
                            { value: '15+', label: 'سنة خبرة', icon: Award },
                            { value: '100%', label: 'رضا العملاء', icon: Star },
                            { value: '50%', label: 'توفير كهرباء', icon: Zap }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <stat.icon className="w-10 h-10 text-brand-orange-400 mx-auto mb-4" />
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-gray-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">رؤيتنا ورسالتنا</h2>
                        <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-6 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-navy-500 p-8 rounded-3xl text-white">
                            <Eye className="w-12 h-12 mb-4 text-brand-orange-300" />
                            <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                            <p className="text-gray-200 leading-relaxed">
                                أن نكون الشركة الرائدة في مجال عزل الأسطح والمباني في المملكة العربية السعودية،
                                ونسهم في توفير بيئة آمنة ومريحة لكل منزل ومنشأة. نسعى لتحقيق الريادة من خلال الابتكار المستمر
                                واستخدام أحدث التقنيات العالمية في مجال العزل.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
                            <Target className="w-12 h-12 mb-4 text-brand-orange-500" />
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">رسالتنا</h3>
                            <p className="text-gray-600 leading-relaxed">
                                تقديم خدمات عزل عالية الجودة بأسعار تنافسية، مع الالتزام بأعلى معايير الأمان والجودة،
                                وتوفير حلول مبتكرة تلبي احتياجات عملائنا. نؤمن بأن كل عميل يستحق أفضل خدمة،
                                ونعمل بكل شفافية ومهنية لتحقيق رضاه الكامل.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">خدماتنا المتخصصة</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            نقدم مجموعة شاملة من خدمات العزل لتلبية جميع احتياجاتك
                        </p>
                        <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-6 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Thermometer,
                                title: 'عزل الفوم الحراري',
                                description: 'عزل حراري ومائي متكامل باستخدام أفضل أنواع الفوم البولي يوريثان، يوفر 50% من استهلاك الكهرباء',
                                link: '/services/foam-insulation'
                            },
                            {
                                icon: Droplets,
                                title: 'العزل المائي',
                                description: 'حماية شاملة من تسربات المياه باستخدام مواد البيتومين والممبرين عالية الجودة المعتمدة دولياً',
                                link: '/services/waterproof-insulation'
                            },
                            {
                                icon: Building,
                                title: 'عزل الأسطح الشامل',
                                description: 'نظام متكامل يجمع بين العزل الحراري والمائي لحماية كاملة مع ضمان يصل إلى 10 سنوات',
                                link: '/services/roof-insulation-shinko'
                            }
                        ].map((service, idx) => (
                            <Link
                                key={idx}
                                href={service.link}
                                className="group bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-brand-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange-500 transition-colors">
                                    <service.icon className="w-8 h-8 text-brand-orange-500 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">لماذا تختارنا؟</h2>
                        <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-6 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Award, title: 'خبرة 15+ سنة', desc: 'خبرة طويلة في مجال العزل' },
                            { icon: Shield, title: 'ضمان مكتوب', desc: 'ضمان شامل يصل 10 سنوات' },
                            { icon: Users, title: 'فريق محترف', desc: 'فنيين مدربين ومعتمدين' },
                            { icon: Clock, title: 'سرعة التنفيذ', desc: 'التزام بالمواعيد المتفق عليها' },
                            { icon: CheckCircle, title: 'مواد معتمدة', desc: 'أفضل المواد العالمية' },
                            { icon: MapPin, title: 'تغطية شاملة', desc: 'خدمة في الرياض والخرج' },
                            { icon: Star, title: 'رضا العملاء', desc: '100% رضا مضمون' },
                            { icon: Zap, title: 'أسعار منافسة', desc: 'جودة عالية بسعر مناسب' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
                                <div className="w-14 h-14 bg-brand-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-7 h-7 text-brand-orange-500" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-16 bg-navy-600">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">نخدم جميع مناطق الرياض والخرج</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                        {[
                            'حي الملقا', 'حي الياسمين', 'حي النرجس', 'حي الربيع', 'حي الورود',
                            'حي العليا', 'حي السليمانية', 'حي النخيل', 'حي الروضة', 'الخرج'
                        ].map((area) => (
                            <div key={area} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                                <MapPin className="w-4 h-4 text-brand-orange-400" />
                                <span className="text-white font-medium">{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-l from-navy-600 to-navy-700 rounded-3xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            هل تحتاج خدمات عزل احترافية؟
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            تواصل معنا الآن للحصول على معاينة مجانية وعرض سعر بدون التزام
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:0551777962" className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all">
                                <Phone className="w-5 h-5" />
                                اتصل الآن: 0551777962
                            </a>
                            <a href="https://wa.me/966507067378" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all">
                                💬 واتساب مباشر
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

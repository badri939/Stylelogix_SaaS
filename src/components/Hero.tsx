import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from './ui/Button';

export const Hero = () => {
    const t = useTranslations('Hero');

    return (
        <div className="relative overflow-hidden pt-12 pb-24 lg:pt-20">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-[30%] -right-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl" />
                <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-400/20 to-blue-300/20 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-8 animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                        {t('badge')}
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight" dangerouslySetInnerHTML={{
                        __html: t.raw('title').replace('<brand>', '<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">').replace('</brand>', '</span>')
                    }} />

                    <p className="mt-4 text-xl text-gray-600 mb-10 leading-relaxed">
                        {t('description')}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <Button variant="primary" size="lg" className="shadow-xl shadow-blue-500/20">
                            {t('cta_primary')}
                        </Button>
                        <Button variant="secondary" size="lg">
                            {t('cta_secondary')}
                        </Button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative mx-auto lg:ml-auto w-full max-w-lg lg:max-w-none">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-sm group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image
                            src="/hero-dashboard.png"
                            alt="StyleLogix AI Dashboard"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            priority
                        />
                    </div>
                    {/* Floating UI Elements for depth */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-float hidden md:block">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="text-sm font-bold text-gray-800">{t('ai_status')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

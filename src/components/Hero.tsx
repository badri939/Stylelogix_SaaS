import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from './ui/Button';

export const Hero = () => {
    const t = useTranslations('Hero');

    return (
        <div className="relative bg-gradient-to-br from-primary-50/50 via-white to-primary-100/30 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-gradient-to-br from-primary-50/50 via-white to-primary-100/30 lg:bg-none">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <div className="inline-flex items-center rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-600 mb-6 animate-fade-in-up">
                                <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2"></span>
                                {t('badge')}
                            </div>

                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
                                <span className="block xl:inline">{t('title_prefix')}</span>{' '}
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 xl:inline">{t('title_brand')}</span>
                            </h1>

                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 mb-8">
                                {t('description')}
                            </p>

                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-xl shadow-blue-500/20">
                                    {t('cta_primary')}
                                </Button>
                                <Button variant="secondary" size="lg" className="w-full sm:w-auto mt-3 sm:mt-0">
                                    {t('cta_secondary')}
                                </Button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
                    <Image
                        src="/hero-dashboard.png"
                        alt="StyleLogix AI Dashboard"
                        fill
                        className="w-full h-full object-cover object-left leading-none"
                        priority
                    />
                    {/* Gradient overlay for better text contrast if needed or edge blending */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:via-white/20 lg:to-transparent" />
                </div>
            </div>
        </div>
    );
};

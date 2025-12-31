import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const Footer = () => {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="StyleLogix.ai" className="h-6 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                            <span className="text-xl font-bold text-gray-900">
                                StyleLogix.ai
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {t('tagline')}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">{t('columns.product')}</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-primary-600 transition">{t('links.merch')}</Link></li>
                            <li><Link href="#" className="hover:text-primary-600 transition">{t('links.marketing')}</Link></li>
                            <li><Link href="#" className="hover:text-primary-600 transition">{t('links.ecommerce')}</Link></li>
                            <li><Link href="#" className="hover:text-primary-600 transition">{t('links.pricing')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">{t('columns.company')}</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-primary-600 transition">{t('links.about')}</Link></li>
                            <li><Link href="#" className="hover:text-primary-600 transition">{t('links.blog')}</Link></li>
                            <li><Link href="#" className="hover:text-primary-600 transition">{t('links.careers')}</Link></li>
                            <li><Link href="#" className="hover:text-primary-600 transition">{t('links.contact')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">{t('columns.legal')}</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-primary-600 transition">{t('links.privacy')}</Link></li>
                            <li><Link href="#" className="hover:text-primary-600 transition">{t('links.terms')}</Link></li>
                            <li><Link href="#" className="hover:text-primary-600 transition">{t('links.imprint')}</Link></li>
                            <li><Link href="#" className="hover:text-primary-600 transition">{t('links.security')}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>{t('copyright', { year: new Date().getFullYear() })}</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/* Social icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Button } from './ui/Button';
import LanguageSwitcher from './LanguageSwitcher';

export const Navbar = () => {
    const t = useTranslations('Navbar');

    return (
        <nav className="glass-nav w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            {/* Logo */}
                            <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-primary-600 to-secondary-500 flex items-center justify-center text-white shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
                                StyleLogix
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/#solutions" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                            {t('solutions')}
                        </Link>
                        <Link href="/#features" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                            {t('features')}
                        </Link>
                        <Link href="/#pricing" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                            {t('pricing')}
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <LanguageSwitcher />
                        <Link href="/login" className="hidden md:block text-gray-600 hover:text-gray-900 font-medium">
                            {t('login')}
                        </Link>
                        <Link href="/login">
                            <Button variant="primary" size="md">
                                {t('get_started')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

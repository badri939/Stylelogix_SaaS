import Link from 'next/link';
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
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            StyleLogix.ai
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#solutions" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                            {t('solutions')}
                        </Link>
                        <Link href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                            {t('features')}
                        </Link>
                        <Link href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                            {t('pricing')}
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <LanguageSwitcher />
                        <Link href="/login" className="hidden md:block text-gray-600 hover:text-gray-900 font-medium">
                            {t('login')}
                        </Link>
                        <Button variant="primary" size="md">
                            {t('get_started')}
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

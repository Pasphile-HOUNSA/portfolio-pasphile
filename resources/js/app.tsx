import { createInertiaApp } from '@inertiajs/react';
import { useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';

const appName = import.meta.env.VITE_APP_NAME;

function ScrollReveal() {
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('[data-reveal], section, article, .card'));

        if (!elements.length) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target as HTMLElement;

                    if (entry.isIntersecting) {
                        target.classList.add('is-visible');
                        observer.unobserve(target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -30px 0px',
            },
        );

        elements.forEach((element) => {
            const target = element as HTMLElement;
            target.classList.add('reveal');
            observer.observe(target);
        });

        return () => observer.disconnect();
    }, []);

    return null;
}

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    layout: (name) => {
        switch (true) {
            case name === 'welcome':
                return null;
            case name === 'portfolio':
                return null;
            case name.startsWith('auth/'):
                return AuthLayout;
            case name.startsWith('settings/'):
                return [AppLayout, SettingsLayout];
            default:
                return AppLayout;
        }
    },
    strictMode: true,
    withApp(app) {
        return (
            <>
                <ScrollReveal />
                <TooltipProvider delayDuration={0}>
                    {app}
                    <Toaster />
                </TooltipProvider>
            </>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();

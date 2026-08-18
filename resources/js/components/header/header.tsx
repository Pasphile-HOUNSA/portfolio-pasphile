export default function Header() {
    const links = [
        { label: 'Accueil', href: '#hero' },
        { label: 'Projets', href: '#projects' },
        { label: 'À propos', href: '#about' },
        { label: 'Compétences', href: '#skills' },
        { label: 'Expériences', href: '#experiences' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-(--border) bg-(--background)/90 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
                <a
                    href="#hero"
                    data-reveal
                    className="font-[Archivo Black,sans-serif] text-lg tracking-tight"
                >
                    Pasphile<span className="text-(--primary)"> .. </span>HOUNSA
                </a>

                <ul className="hidden items-center gap-8 md:flex">
                    {links.map((link, index) => (
                        <li
                            key={link.href}
                            data-reveal
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            <a
                                href={link.href}
                                className="text-sm font-semibold text-(--muted-foreground) transition-colors hover:text-(--primary)"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

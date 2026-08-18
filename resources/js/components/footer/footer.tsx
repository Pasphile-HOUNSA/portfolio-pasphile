export default function Footer() {
    return (
        <footer className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-8 md:px-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-[var(--muted-foreground)] md:flex-row">
                <span className="font-medium tracking-[0.12em] text-[var(--foreground)] uppercase">
                    Pasphile<span className="text-[var(--primary)]"> .. </span>HOUNSA
                    <span className="ml-2 font-normal tracking-normal normal-case text-[var(--muted-foreground)]">
                        — © {new Date().getFullYear()}
                    </span>
                </span>

                <nav aria-label="Navigation du footer" className="flex items-center gap-6">
                    <a href="#hero" className="transition-colors hover:text-[var(--foreground)]">
                        Accueil
                    </a>
                    <a href="#projets" className="transition-colors hover:text-[var(--foreground)]">
                        Projets
                    </a>
                    <a href="#contact" className="transition-colors hover:text-[var(--foreground)]">
                        Contact
                    </a>
                </nav>
            </div>
        </footer>
    );
}

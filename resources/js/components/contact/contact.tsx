const socialLinks = [
    { href: 'mailto:hounsapasphile@gmail.com', label: 'Envoyer un mail', icon: '/google-mail-svgrepo-com.svg', alt: 'Mail' },
    { href: 'https://wa.me/qr/Z5V4XPUGO5PRL1', label: 'WhatsApp', icon: '/whatsapp-svgrepo-com.svg', alt: 'WhatsApp' },
    { href: 'https://www.facebook.com/pasphilehounsa.2025', label: 'Facebook', icon: '/facebook-boxed-svgrepo-com.svg', alt: 'Facebook' },
    { href: 'https://www.linkedin.com/in/m-pasphile-hounsa-b4180935b', label: 'LinkedIn', icon: '/linkedin-svgrepo-com.svg', alt: 'LinkedIn' },
    { href: 'https://github.com/Pasphile-HOUNSA', label: 'GitHub', icon: '/github-svgrepo-com.svg', alt: 'GitHub' },
    { href: 'https://www.instagram.com/wwfpasphile?igsh=MXZmMXRwNmIyMnNybw==', label: 'Instagram', icon: '/instagram-167-svgrepo-com.svg', alt: 'Instagram' },
];

export default function Contact() {
    return (
        <section id="contact" className="bg-(--card) px-6 py-20 md:px-10">
            <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
                <div>
                    <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-(--primary)">
                        <span className="inline-block h-0.5 w-6 bg-(--primary)" />
                        CONTACT
                    </div>
                    <h2 className="font-[Archivo Black,sans-serif] text-3xl uppercase leading-tight md:text-4xl">
                        Travaillons
                        <br />
                        ensemble
                    </h2>
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-(--muted-foreground)">
                        Un projet, une question sur mon travail&nbsp;? Écrivez-moi, je réponds sous 48h.
                    </p>
                    <div className="mt-6 gap-4">
                        <div className="flex flex-col mt-3 text-sm text-(--muted-foreground)">
                            <span className="text-sm text-(--muted-foreground)">Email&nbsp;:</span>{' '}
                            <br />
                            <a
                                href="mailto:hounsapasphile@gmail.com"
                                className="text-(--primary) hover:underline"
                            >
                                hounsapasphile@gmail.com
                            </a>
                        </div>

                        <div className="flex flex-col mt-3 text-sm text-(--muted-foreground)">
                            <span className="text-sm text-(--muted-foreground)">WhatsApp&nbsp;:</span>{' '}
                            <br />
                            <a
                                href="https://wa.me/33612345678"
                                className="text-(--primary) hover:underline"
                            >
                                +229 01 62 80 42 28
                            </a>
                        </div>

                        <div className="mt-8 flex items-center gap-4 text-white">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-(--border) bg-white text-[var(--foreground)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)]"
                                    aria-label={social.label}
                                    target={social.href.startsWith('http') ? '_blank' : undefined}
                                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                                >
                                    <img src={social.icon} alt={social.alt} className="h-5 w-5 object-contain" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <input
                            type="text"
                            placeholder="Nom"
                            className="w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[var(--muted-foreground)] focus:border-[var(--primary)]"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[var(--muted-foreground)] focus:border-[var(--primary)]"
                        />
                    </div>
                    <textarea
                        placeholder="Votre message"
                        rows={5}
                        className="w-full rounded-2xl resize-none border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[var(--muted-foreground)] focus:border-[var(--primary)]"
                    />
                    <button
                        type="submit"
                        className="rounded-2xl border border-[var(--primary)] px-7 py-3 text-xs font-bold tracking-widest transition-colors hover:bg-[var(--primary)] hover:text-[var(--background)]"
                    >
                        ENVOYER LE MESSAGE
                    </button>
                </form>
            </div>
        </section>
    );
}

export default function Hero() {
    return (
        <section id="hero" className="mx-auto grid max-w-6xl h-full gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-10 md:py-24">
            <div>
                <div className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-[var(--primary)]">
                    <span className="inline-block h-[2px] w-6 bg-[var(--primary)]" />
                    DÉVELOPPEUSE FULL STACK
                </div>

                <h3 className="font-[Archivo Black,sans-serif] text-4xl uppercase leading-[0.98] tracking-tight md:text-6xl">
                    Je construis
                    <br />
                    des <span className="text-[var(--primary)]">produits</span>
                    <br />
                    web fiables
                </h3>

                <div className="mt-10 flex flex-wrap gap-4">
                    <a
                        href="#projets"
                        className="rounded-2xl border border-[var(--primary)] px-7 py-3 text-xs font-bold tracking-widest transition-colors hover:bg-[var(--primary)] hover:text-[var(--background)]"
                    >
                        VOIR MES PROJETS
                    </a>
                </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-gradient-to-br from-[var(--card)] to-[var(--background)] shadow-2xl">
                <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[var(--primary)] opacity-30 blur-3xl" />

                <div className="flex gap-1.5 border-b border-[var(--border)] px-4 py-3.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                </div>

                <div className="relative space-y-2 px-5 py-6 font-mono text-sm leading-8">
                    <div className="text-[var(--muted-foreground)]">$ pasphile@local:~$ start-portfolio</div>
                    <div>
                        <span className="text-[var(--primary)]">namespace</span> Pasphile\\Portfolio
                    </div>
                    <div>&nbsp;&nbsp;function deploy(): void</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;console.log(<span className="text-emerald-400">'Building assets...'</span>)</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;exec <span className="text-emerald-400">'npm run build'</span></div>
                    <div className="text-[var(--muted-foreground)]">
                        ✓ déploiement prêt — <span className="font-bold">Pasphile HOUNSA</span>
                        <span className="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-[var(--primary)] align-middle" />
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useEffect, useRef, useState } from 'react';

const competences = [
    { label: 'HTML', pourcentage: 100 },
    { label: 'CSS', pourcentage: 100 },
    { label: 'Tailwind CSS', pourcentage: 85 },
    { label: 'Bootstrap', pourcentage: 80 },
    { label: 'PHP', pourcentage: 95 },
    { label: 'JavaScript', pourcentage: 85 },
    { label: 'TypeScript', pourcentage: 80 },
    { label: 'Laravel', pourcentage: 90 },
    { label: 'React', pourcentage: 85 },
    { label: 'MySQL', pourcentage: 70 },
    { label: 'UI/UX', pourcentage: 65 },
];

const RADIUS = 48;
const CIRCONFERENCE = 2 * Math.PI * RADIUS;
const DUREE = 1200; // ms — doit matcher la transition du stroke-dashoffset

function Ring({ label, pourcentage }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [compte, setCompte] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.4 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;
        let frame;
        const debut = performance.now();

        const tick = (maintenant) => {
            const progres = Math.min((maintenant - debut) / DUREE, 1);
            setCompte(Math.round(progres * pourcentage));
            if (progres < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [visible, pourcentage]);

    const offset = visible ? CIRCONFERENCE - (pourcentage / 100) * CIRCONFERENCE : CIRCONFERENCE;

    return (
        <div ref={ref} className="flex flex-col items-center gap-4">
            <div className="relative h-28 w-28">
                <svg viewBox="0 0 106 106" className="h-full w-full -rotate-90">
                    <circle cx="53" cy="53" r={RADIUS} fill="none" stroke="var(--border)" strokeWidth="6" />
                    <circle
                        cx="53"
                        cy="53"
                        r={RADIUS}
                        fill="none"
                        stroke="var(--primary)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={CIRCONFERENCE}
                        strokeDashoffset={offset}
                        style={{ transition: `stroke-dashoffset ${DUREE}ms ease` }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-extrabold">
                    {compte}%
                </div>
            </div>
            <span className="text-sm font-semibold tracking-wide text-(--muted)">{label}</span>
        </div>
    );
}

export default function Competences() {
    const piste = [...competences, ...competences];

    return (
        <section id="competences" className="overflow-hidden bg-(--card) px-6 py-20 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-[Archivo Black,sans-serif] text-3xl uppercase leading-tight md:text-4xl">
                    Mes compétences
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-(--muted)">
                    Le cœur de mon travail est full stack Laravel + React, avec un souci constant pour la clarté du
                    code et l'expérience utilisateur.
                </p>
            </div>

            <div className="group relative mt-14 overflow-hidden">
                <div className="mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                    <div className="flex w-max min-w-full animate-[marquee_28s_linear_infinite] items-center gap-12 px-4 group-hover:paused">
                        {piste.map((c, i) => (
                            <Ring key={`${c.label}-${i}`} label={c.label} pourcentage={c.pourcentage} />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}

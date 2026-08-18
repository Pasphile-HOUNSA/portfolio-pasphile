const experiences = [
    {
        periode: "2025 — Aujourd'hui",
        titre: 'Développeuse Full Stack — Projet cantine',
        description:
            "Conception et développement d'une application de gestion de commandes de cantine (repas et vivres) avec Laravel et Inertia/React, incluant la gestion des statuts de commande.",
    },
    {
        periode: '2024 — 2025',
        titre: 'Formation développement web',
        description:
            'Apprentissage du développement full stack : PHP/Laravel côté serveur, React côté client, modélisation de bases de données MySQL.',
    },
];

export default function Experiences() {
    return (
        <section id="experiences" className="mx-auto max-w-4xl px-6 py-20 md:px-10">
            <div className="mb-14 max-w-xl">
                <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-[var(--primary)]">
                    <span className="inline-block h-[2px] w-6 bg-[var(--primary)]" />
                    Expériences
                </div>
            </div>

            <div className="relative space-y-10 border-l border-[var(--border)] pl-8">
                {experiences.map((exp) => (
                    <div key={exp.titre} className="relative">
                        <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                        <span className="text-xs font-bold tracking-widest text-[var(--primary)]">{exp.periode}</span>
                        <h3 className="mt-2 text-base font-extrabold">{exp.titre}</h3>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted-foreground)]">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

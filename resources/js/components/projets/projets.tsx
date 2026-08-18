import { ArrowRight } from 'lucide-react';


const projets = [
    {
        image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
        titre: 'Gestion de commandes de cantine',
        description: "Application Laravel + Inertia/React pour commander repas et vivres, avec suivi en temps réel des statuts jusqu'à la livraison.",
        tags: ['React'],
        domaine: 'https://cantine.pasphile.com',
    },
    {
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        titre: 'Espace administrateur',
        description: "Back-office sécurisé pour gérer les commandes, mettre à jour leurs statuts et suivre l'activité de la plateforme.",
        tags: ['React'],
        domaine: 'https://cantine.pasphile.com',
    },
    {
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
        titre: 'Portfolio développeur',
        description: 'Site vitrine public présentant mes projets, avec une page administration protégée pour la mise à jour du contenu.',
        tags: ['React'],
        domaine: 'https://cantine.pasphile.com',
    },
];

export default function Projets() {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
            <div className="mb-14 max-w-xl">
                <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-[var(--primary)]">
                    <span className="inline-block h-[2px] w-6 bg-[var(--primary)]" />
                    PROJETS
                </div>
                <h2 className="font-[Archivo Black,sans-serif] text-3xl uppercase leading-tight md:text-4xl">
                    Ce que j'ai construit
                </h2>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
                {projets.map((projet) => (

                    <article
                        key={projet.titre}
                        className="group rounded-2xl relative overflow-hidden border border-[var(--border)] bg-[var(--card)] p-0 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                    >
                        <span className="absolute -right-4 -bottom-4 h-12 w-12 border-b-4 border-r-4 border-[var(--primary)] border-l-0 border-t-0" />
                        <span className="absolute -left-4 -top-4 h-12 w-12 border-l-4 border-t-4 border-[var(--primary)] border-r-0 border-b-0" />

                        <div className="relative h-[26rem] w-full overflow-hidden transition-all duration-500 group-hover:h-[26rem]">
                            <div
                                className="absolute inset-0 scale-110 bg-cover bg-center transition-all duration-700 group-hover:scale-100 group-hover:-translate-y-1"
                                style={{ backgroundImage: `url(${projet.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-[var(--card)]/40 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 h-[52%] bg-[var(--card)]/90 backdrop-blur-[1px] transition-all duration-500 group-hover:opacity-0" />

                            <div className="absolute inset-x-0 top-[46%] z-10 flex flex-col p-5">
                                <h3 className="mb-2 text-base font-extrabold text-[var(--foreground)]">{projet.titre}</h3>
                                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">{projet.description}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {projet.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-sm border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-[0.65rem] font-bold tracking-wide text-[var(--muted-foreground)]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-1 mb-2 flex items-center gap-4 opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:opacity-100">
                                    <a
                                        href={projet.domaine}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-2xl border border-[var(--primary)] bg-[var(--primary)]/10 px-3 py-2 text-sm font-bold text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-[var(--background)]"
                                    >
                                        Voir le projet
                                        <ArrowRight className="h-4 w-4 transition-transform duration-600 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
                <a
                    href="#projets"
                    className="group flex items-center rounded-2xl border border-[var(--primary)] px-7 py-3 text-xs font-bold tracking-widest transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary)] hover:text-[var(--background)]"
                >
                    VOIR TOUS MES PROJETS
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 " />
                </a>
            </div>
        </section>
    );
}

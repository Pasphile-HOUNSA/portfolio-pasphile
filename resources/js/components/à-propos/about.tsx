const pasphileProfil = '/images/pasphileProfil.png';

export default function About() {
    return (
        <div id="about" className=" px-6 py-20 md:px-10 mx-auto max-w-4xl text-center">
            <h2 className="font-[Archivo Black,sans-serif] text-3xl uppercase leading-tight md:text-4xl">
                À propos <span className="text-(--primary)">de moi</span>
            </h2>

            <div className="mt-6 flex flex-col items-center gap-6 md:flex-row">
                <div className="flex-1 flex justify-center md:justify-start">
                    <div className="profile-bounce">
                        <img
                            src={pasphileProfil}
                            alt="Photo de profil"
                            className="rounded-lg shadow-lg w-full max-w-[320px] h-auto"
                        />
                    </div>
                </div>

                <div className="flex-1 text-start">
                    <p className="text-sm leading-relaxed text-justify text-(--muted-foreground)">
                        Je suis Mahugnon Pasphile Yédia Séeverin Géraud HOUNSA, développeur full‑stack et créateur d'expériences web basées à Abomey-Calavi. J'aide les startups et les entreprises à transformer des idées en produits numériques fiables et performants.
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-justify text-(--muted-foreground)">
                        J'interviens sur l'ensemble de la stack, avec une attention particulière à l'optimisation pour des applications rapides et accessibles. Je privilégie le code propre, les tests automatisés et les livraisons itératives.
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-justify text-(--muted-foreground)">
                        Parmi mes réalisations, j'ai conçu une application web de Covoiturage, une solution pour les déplacements urbains. Je suis disponible pour des missions, collaborations ou projets sur mesure — discutons-en.
                    </p>
                </div>


            </div>
        </div>
    );
}

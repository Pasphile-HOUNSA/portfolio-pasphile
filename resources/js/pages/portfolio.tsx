import { Head } from '@inertiajs/react';

import Header from '@/components/header/header';
import Hero from '@/components/hero/hero';
import Projets from '@/components/projets/projets';
import Competences from '@/components/compétences/competences';
// import Experiences from '@/components/expériences/experiences';
import Contact from '@/components/contact/contact';
import Footer from '@/components/footer/footer';
import About from '@/components/à-propos/about';

export default function Portfolio() {
    return (
        <>
            <Head title="Portfolio" />
            <div className="min-h-screen bg-(--background) font-sans text-(--foreground) selection:bg-(--accent-2)/30">
                <Header />
                <Hero />
                <Projets />
                <Competences />
                <About />
                {/* <Experiences /> */}
                <Contact />
                <Footer />
            </div>
        </>
    );
}

Portfolio.layout = (page: any) => page;

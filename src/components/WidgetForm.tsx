import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import otherImageUrl from '../assets/thought.svg'

const feedbeckTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: otherImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2x1 mb-4 flex flex-col items-center shandow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe o seu feedbeck</span>

                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbeckTypes).map(([key, value]) => {
                    return (
                        <button
                        className="bz-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col -items-center"
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}

            </div>

            <footer className="text-xs text-natural-400">
                Feito por <a href="https://andersondiasdev.web.app" className="underline underline-offset-2" target='_blank'>Anderson Dias</a>
            </footer>
        </div>
    )
}
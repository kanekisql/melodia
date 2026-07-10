import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineGlobeAlt } from 'react-icons/hi2'
import { Container } from '@shared/ui/Container'

export function Footer() {
  return (
    <footer
      id="acerca-de"
      className="relative z-0 border-t border-white/5 py-8 sm:py-10"
    >
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Información */}
        <div className="max-w-md">
          <h3 className="text-base font-semibold tracking-tight text-foreground">
            MelodIA
          </h3>

          <p className="mt-2 text-sm text-foreground-subtle">
            Experiencia musical integrado con IA desarrollada con react + typescript
          </p>
        </div>

        {/* Redes */}
        <nav aria-label="Redes sociales">
          <ul className="flex items-center gap-3 sm:gap-4">
            {/* GitHub */}
            <li>
              <a
                href="https://github.com/kanekisql/andre-cristobal-portfolio"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  text-foreground-subtle
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-0.5
                  hover:text-secondary
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/70
                "
              >
                <FaGithub
                  className="
                    text-[22px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/in/estheban-andre-malca-cristobal-a082a5416/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  text-foreground-subtle
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-0.5
                  hover:text-secondary
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/70
                "
              >
                <FaLinkedin
                  className="
                    text-[22px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>
            </li>

            {/* Portfolio */}
            <li>
              <a
                href="https://andre-cristobal-portfolio.vercel.app/"
                target="_blank"
                rel="noreferrer"
                aria-label="Portfolio"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  text-foreground-subtle
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-0.5
                  hover:text-secondary
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/70
                "
              >
                <HiOutlineGlobeAlt
                  className="
                    text-[22px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  )
}
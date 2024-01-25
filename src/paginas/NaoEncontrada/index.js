import BotaoPrincipal from 'componentes/BotaoPrincipal';
import styles from './NaoEncontrada.module.css';
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {
    const navegar = useNavigate()

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Page not found.
                </h1>

                <p className={styles.paragrafo}>
                    Are you sure this is what you were looking for ?
                </p>

                <p className={styles.paragrafo}>
                Wait a few moments and reload the page, or return to the home page.
                </p>

                <div className={styles.botaoContainer}
                onClick={()=> navegar("-1")}
                
                >
                    <button><BotaoPrincipal tamanho="lg">
                    To go back
                        </BotaoPrincipal></button>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="Cachorro de óculos e vestido como humano"
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>

    )
}
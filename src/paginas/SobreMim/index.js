import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/imagem2.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="About Me"
        >
            <h3 className={styles.subtitulo}>
                Hello, Im Lucas
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Lucas sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Hi, Im Lucas I am a student of Front End on Alura's Plataform and I glad to see you here.
            </p>
            <p className={styles.paragrafo}>
                My history on Web Development begins in 2020 on youtube, by watching "Curso em Video" of Professor "Gustavo Guanabara", I start learning Python, but I discovered my passion to JavaScript, Although i had to stop, because, I dont had a laptop to study, but I had already discovered what I wanted in my life.
            </p>
            <p className={styles.paragrafo}>
                Knowing what I wanted to do, I thought "I have to study more", so I took a technical course in Computer Networks on "SENAI", where one of the subjects was Web Development, which was the area in which I was most interested. On "SENAI" I learned HTML, CSS and JavaScript. 
            </p>
            <p className={styles.paragrafo}>
                Right after to finished "SENAI", I entered the systems development analysis faculty at "Unisanta Univertity" as an information technology Trainee at the Guaruja city hall and started studying web development on the "Alura" platform
            </p>
            <p className={styles.paragrafo}>
                My First Work was "Intranet.guaruja.sp.gov.br" a internal website of Guaruja city hall, developed by JavaScript, now Im Developing React apps, because im interested on frameworks and improve my skills
            </p>
        </PostModelo>
    )
}
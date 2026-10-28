// importação de imagens
import perfil from '@assets/perfil.jpg';
import fantastika from '@assets/fantastika.png';
import cartoon from '@assets/cartoon.png';
import outubro from '@assets/outubro.png';
import portfolio from '@assets/portfolio.png';
import witcher from '@assets/witcher.png';
import livros from '@assets/livros.png';

function Main(){
    return(
        <main>
            <section>
                <img src={perfil} alt="sou uma mulher negra, nessa foto estou usando um vestido preto com tule, uso óculos e estou maquiada com batom vermelho e cabelo solto cacheado." />
                <p>
                    Me chamo Lorrayne, sou mineira mas não sou muito chegada em café, mas amando programação! Atualmente, estou cursando análise e desenvolvimento de sistemas na Puc Minas, mas meus estudos vem de longa data...
                </p>
                <p>
                    ... Desde 2023, me aventuro como programadora, mas meus projetos são voltados para conclusão acadêmica, mal posso esperar para integrar uma equipe e ter desafios reais, conheça meus projetos até o momento e se gostou do meu trabalho entre em contato comigo!
                </p>
                <p>
                    Além da programação me divirto entre musicas e animes ou talvez tomando uma geladinha com quem amo! Minha banda favorita é o Bring me The Horizon e ainda não decidi se sou atleticana ou cruzeirense rsrsrs
                </p>
            </section>
            <section>
                <ul>
                    <li>
                        <h2>Fantastika</h2>
                        <img src={fantastika} alt="" />
                    </li>
                    <li>
                        <h2>Portfólio tentativa 1/10000</h2>
                        <img src={portfolio} alt="" />
                    </li>
                    <li>
                        <h2>Cartoon Network</h2>
                        <img src={cartoon} alt="" />
                    </li>
                    <li>
                        <h2>Desafio Outubro Rosa</h2>
                        <img src={outubro} alt="" />
                    </li>
                    <li>
                        <h2>The Witcher</h2>
                        <img src={witcher} alt="" />
                    </li>
                    <li>
                        <h2>Doação de Livros</h2>
                        <img src={livros} alt="" />
                    </li>
                </ul>
            </section>
            <section>
                <form>
                    
                </form>
            </section>
        </main>
    )
}

export default Main
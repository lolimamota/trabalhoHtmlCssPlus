import '@scss/global.scss';
import * as S from '@scss/footer.module.scss';

function Footer(){
    return(
        <footer>
            <hr className={S.classHR}/>
            <section>
                <h2>Fale comigo ou deixe seu contato</h2>
                <form>
                    <label htmlFor="nome">
                        Digite seu nome:
                    </label>
                    <input type="text" id='nome' value='Digite seu nome...'/>
                    <label htmlFor="telefone">
                        Digite seu número:
                    </label>
                    <input type="tel" name="telefone" id="telefone" value='(0XX) 9 XXXX XXXX' />
                </form>
            </section>
            <section>
                <button>
                    Github
                </button>
                <button>
                    Linkedin
                </button>
                <button>
                    WhatsApp
                </button>
            </section>
            <section>
                <h2>Lorrayne Caroline Lima Mota</h2>
                <h2>DS - 14 | 6382081800023466</h2>
            </section>
        </footer>
    )
}

export default Footer
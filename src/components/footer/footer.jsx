import '@scss/global.scss';
import * as S from '@scss/footer.module.scss';

function Footer(){
    return(
        <footer>
            <hr className={S.classHR}/>
            <h2>Lorrayne Caroline Lima Mota</h2>
            <h2>DS - 14 | 6382081800023466</h2>
        </footer>
    )
}

export default Footer
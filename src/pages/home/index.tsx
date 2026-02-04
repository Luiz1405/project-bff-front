import { Banner } from '../../components/Banner';
import { Categories } from '../../components/Categories';
import { Features } from '../../components/Features';
import { MainContainer } from '../../components/MainContainer';
import { NewsLetter } from '../../components/NewsLetter';
import { Products } from '../../components/Products';

const Home = () => {
    return <>
        <Banner src="/banner-carousel-1.png" alt=""/>
        <MainContainer>
            <Categories/>
            <Products/>
        </MainContainer>
        <Features/>
        <NewsLetter/>
    </>
}

export default Home
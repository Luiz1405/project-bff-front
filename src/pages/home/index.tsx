import banner1 from '../../../public/banner-carousel-1.png';
import { Banner } from '../../components/Banner';
import { Categories } from '../../components/Categories';
import { Features } from '../../components/Features';
import { MainContainer } from '../../components/MainContainer';
import { NewsLetter } from '../../components/NewsLetter';
import { Products } from '../../components/Products';

const Home = () => {
    return <>
        <Banner src={banner1} alt=""/>
        <MainContainer>
            <Categories/>
            <Products/>
        </MainContainer>
        <Features/>
        <NewsLetter/>
    </>
}

export default Home
import { Heading } from "../Heading"
import { Feature } from "./Feature"
import { FeatureList, FeaturesContainer } from "./styles"


export const Features = () => {
    return (<FeaturesContainer>
        <Heading>
            Conheça todas as nossas facilidades
        </Heading>
        <FeatureList>
            <Feature icon="/icons/x-diamond.svg" description="Ganhe 5% OFF em pagamentos via PIX" title="PAGUE PELO PIX"/>
            <Feature icon="/icons/vector.svg" description="Fique livre para trocar em até 30 dias." title="TROCA GRÁTIS"/>
            <Feature icon="/icons/subtract.svg" description="Moda responsável, que respeita o meio ambiente." title="TROCA GRÁTIS"/>
        </FeatureList>
    </FeaturesContainer>)
}
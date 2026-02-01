import { CardProduct } from "../CardProduct"
import { Heading } from "../Heading"
import { destaques } from "./mocks"
import { GridContainer, ProductContainer } from "./styled"


export const Products = () => {
    return <ProductContainer>
        <Heading>Produtos que estão bombando</Heading>
        <GridContainer>
            {destaques.map((product) => (
                <CardProduct key={product.image} product={product} />
            ))}
        </GridContainer>
    </ProductContainer>
}
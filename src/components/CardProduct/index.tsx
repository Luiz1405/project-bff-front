import type { Product } from "../Products/mocks";
import { Card, CardBody, CardContent, CardFooter, CardImage } from "./styles";


interface CardProductInterface {
    product: Product
}

export const CardProduct = ({product}: CardProducInterface) => {
    return (<Card>
        <CardImage src={product.image} alt={product.name} />
        <CardBody>
            <CardContent>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>{product.price}</strong>
            </CardContent>
            <CardFooter>
                <Button>Ver mais</Button>
            </CardFooter>
        </CardBody>
    </Card>

    )
}
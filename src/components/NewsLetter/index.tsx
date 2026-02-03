import { Button } from "../Button"
import { TextInput } from "../TextInput"
import { NewsLetterBox, NewsLetterForm, NewsLetterHeading } from "./styles"


export const NewsLetter = () => {
    return (<NewsLetterBox>
        <NewsLetterHeading>
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <strong>Cadastre-se!</strong>
        </NewsLetterHeading>
        <NewsLetterForm>
            <TextInput placeholder="Digite seu email"/>
            <Button>
                Enviar
            </Button>
        </NewsLetterForm>
    </NewsLetterBox>)
}
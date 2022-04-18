import logoImg from '../../assets/logo.svg';
import { Container, Content  } from './styles';

export function Header() {
    return (
        <Container >            
            <Content>
            <img src={ logoImg } alt="logo" />
            <h1>Finance Controller</h1>
            <button type="button">
                New Transaction
            </button>
            </Content>
        </Container >
    )
}
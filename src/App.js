import { styled } from "styled-components";
import GlobalContextProvider from "./context/context";

import Header from "./components/Header/Header";

import Main from "./components/Main";

const Wrapper = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: center;

    max-width: 100wv;
    min-height: 100vh;
    width: 100%;
`;

function App() {
    return (
        <GlobalContextProvider>
            <Wrapper>
                <Header />
                <Main />
            </Wrapper>
        </GlobalContextProvider>
    );
}

export default App;

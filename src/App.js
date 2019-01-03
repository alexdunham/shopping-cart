import React, { Component } from 'react';
import { Wrapper, Main, SideBar, Container } from './components/styles/Home';
import { setAllProducts } from './store/Actions';
import { connect } from 'react-redux';
import Products from './components/Products';
import Cart from './components/Cart';

class App extends Component {
    componentDidMount() {
        this.props.setAllProducts();
    }
    render() {
        return (
            <Container>
                <h1>Shopping App</h1>
                <Wrapper>
                    <Main>
                        <Products/>
                    </Main>
                    <SideBar>
                        <Cart/>
                    </SideBar>
                </Wrapper>
            </Container>
     
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setAllProducts: () => dispatch(setAllProducts())
});

export default connect(null, mapDispatchToProps)(App);

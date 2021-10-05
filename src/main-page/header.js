import logo from "./GloboLogo.png";
//import { Component } from "react"; para o uso de classes

const Header = ({subtitle}) => (
    <header className="row">
       <div className="col-md-5">
         <img src={logo} className="logo" alt="logo" />
       </div>
       <div className="col-md-7 mt-5 subtitle">
           {subtitle}
       </div>
    </header>
); //retorna jsx , props são os parametros passados entre os components
//({subtitle}) recebe um valor vindo de outro componente



//usando class
/*
class Header extends Component {
    render() {
        return(
            <header className="row">
                <div className="col-md-5">
                <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="cpç-md-7 mt-5 subtitle">
                    {this.props.subtitle}
                </div>
            </header> 
        );
    }
}
//ao usar class, devemos utilizar o this.props para capturar os parâmetros 
//é preferenciavel utilizar functions em vez de classes, pela complexidade de se trabalhar com classes
*/
export default Header;
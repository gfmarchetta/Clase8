'use strict'; //

const ReactElement = React.createElement
export default class Button extends React.Component{
    // render() {
    //     return (
    //         <div>
    //             <label>Hola Mundo</label>
    //             <button classNaame="Button">UN boton de react</button>
    //         </div>
    //     );
    // } esto no sirve no es javascript
    render() {
        return ReactElement('Button', {}, 'Super Boton')
    }

}
const domcontainer = document.getElementById('myApp');

ReactDOM.render(
    ReactElement(Button),
    domcontainer
);

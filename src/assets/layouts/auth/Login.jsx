const login = ({usuario, contraseña}) => {
    return (
        <form>
            <img src = "public/componente.png" alt="user" />
            <input value= {usuario} type="text"/>
            <input value= {contraseña} type="text"/>
            <input type="button" value="iniciar sesion" />
        </form>
    )
}
export default login
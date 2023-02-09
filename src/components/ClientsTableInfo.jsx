import '../css/clientsTableInfo.css'

function ClientsTableInfo({client}){
const showClientDetails= () => {
    console.log('hola')
}
    return(
        <div className="table-client-info__container">
            <p>{`${client.name} ${client.lastname}`}</p>
            <p>{client.id}</p>
            <p>{client.credits.length}</p>
            <p className='table__verCliente' onClick={showClientDetails}>VER CLIENTE</p>
        </div>
    )
}

export default ClientsTableInfo
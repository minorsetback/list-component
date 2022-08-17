function ListComponent({ data }) {
    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className="card">
                            <h1 className="title">{item.header}</h1>
                            <ul>
                                {item.options?.map((item, index) => {
                                    return (
                                        <li key={index + item}>{item}</li>
                                    )
                                })}
                            </ul>
                            <p className="text">{item.text}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ListComponent

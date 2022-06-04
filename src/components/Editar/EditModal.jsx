import { useState } from "react";

import updateDatabase from "../../helpers/updateDatabase";
const EditModal = ({ setModalEstao, id, valorBusqueda, setControllerGetDB }) => {
    const [input, setInput] = useState(valorBusqueda);

    const cerrarModal = () => {
        console.log("object");
        setModalEstao(false);
    };
    const handledChange = (e) => {
        setInput(e.target.value);
    };
    const handledSubmit = (e) => {
        e.preventDefault();
        updateDatabase(id, { valorBusqueda: input })
            .then((result) => {
                cerrarModal()
                setControllerGetDB(true);
            }).catch((err) => {
                console.log(err);
            });

    };

    return (
        <>
            <div className="modal" tabIndex="-1" style={{ display: "block" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Editar Busqueda: <strong>{valorBusqueda}</strong>
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => cerrarModal()}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handledSubmit}>
                                <div className="form-group">
                                    <label htmlFor="valorBusqueda">Valor de la busqueda</label>
                                    <input
                                        className="form-control"
                                        id="valorBusqueda"
                                        type="text"
                                        placeholder="Texto de la busqueda"
                                        onChange={handledChange}
                                        defaultValue={input}

                                    />
                                </div>
                                <button type="submit" className="btn btn-success col-3 m-2 ">
                                    Guardar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditModal;

import { useEffect, useState } from "react";
import { LayoutContenedor } from "./layout/LayoutContenedor";
import { Box, Button } from "@mui/material";

export const Lista = () => {
    const [repairRequests, setRepairRequests] = useState([]);

    useEffect(() => {
        // Función para obtener las solicitudes del localStorage
        const fetchRequests = () => {
            const storedRequests = JSON.parse(localStorage.getItem("repairRequests")) || [];
            setRepairRequests(storedRequests);
        };

        // Obtener solicitudes al montar el componente
        fetchRequests();
    }, []);

    const handleDelete = (id) => {
        const updatedRequests = repairRequests.filter(request => request.id !== id);
        setRepairRequests(updatedRequests);
        localStorage.setItem("repairRequests", JSON.stringify(updatedRequests));
    };

    return (
        <LayoutContenedor>
            <h1>Lista de Solicitudes de Reparación</h1>
            {repairRequests.length > 0 ? (
                <Box component={"ul"}>
                    {repairRequests.map((request) => (
                        <li key={request.id}>
                            <strong>Nombre:</strong> {request.nombre}, <strong>DNI:</strong> {request.dni},{" "}
                            <strong>Celular:</strong> {request.celular}, <strong>Fecha:</strong> {request.fecha},{" "}
                            <strong>Marca:</strong> {request.marca}, <strong>Modelo:</strong> {request.modelo},{" "}
                            <strong>Observación:</strong> {request.observacion}, <strong>Monto Total:</strong> {request.monto}
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => handleDelete(request.id)}
                                style={{ marginLeft: '10px' }}
                            >
                                Eliminar
                            </Button>
                        </li>
                    ))}
                </Box>
            ) : (
                <p>No hay solicitudes de reparación registradas.</p>
            )}
        </LayoutContenedor>
    );
};

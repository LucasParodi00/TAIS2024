import { Box, Button, FormHelperText, Grid2, MenuItem, Select, TextField, Typography } from "@mui/material";
import { LayoutContenedor } from "../layout/LayoutContenedor";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller, useForm } from "react-hook-form";
import { validaciones } from "./validaciones";
import dayjs from "dayjs";

export const Formulario = () => {

    const [fecha, setFecha] = useState();

    const {
        handleSubmit,
        register,
        control,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nombre: "",
            dni: "",
            celular: "",
            fecha: null,
            monto: "",
            marca: "",
            modelo: "",
            observacion: "",
        },
        mode: 'onBlur'
    });
    const handleMarca = (event) => {
        const marcaSeleccionada = event.target.value;
        console.log(marcaSeleccionada);

        setMarca(event.target.value)
    }

    const [selectedDate, setSelectedDate] = useState(null);
    const [error, setError] = useState('');

    const handleDateChange = (date) => {
        if (date && date.isBefore(dayjs(), 'day')) {
            setError('La fecha no puede ser anterior a la fecha actual.');
        } else {
            setError('');
            setSelectedDate(date);
        }
    };

    const onSubmit = (data) => {
        const idUnico = Date.now();

        const datos = {
            ...data,
            id: idUnico
        }

        const repairRequests =
            JSON.parse(localStorage.getItem("repairRequests")) || [];
        repairRequests.push(datos);
        localStorage.setItem("repairRequests", JSON.stringify(repairRequests));
        reset();
    };


    return (
        <LayoutContenedor>
            <Box component={'div'} >
                <h1>Nueva solicitud de reparación</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    < Grid2 container gap={1} justifyContent={"center"}>

                        <Grid2 size={5} display={"flex"} flexDirection={'column'} gap={'10px'} >
                            <TextField
                                type="text"
                                label='Nombre'
                                fullWidth
                                {...register('nombre', validaciones.nombre)}
                                error={!!errors.nombre}
                                helperText={errors.nombre?.message}
                            />
                            <Box component={'div'} display={"flex"} gap={'10px'}>
                                <TextField
                                    type="number"
                                    label='DNI'
                                    fullWidth
                                    {...register('dni', validaciones.dni)}
                                    error={!!errors.dni}
                                    helperText={errors.dni?.message}
                                />
                                <TextField
                                    type="number"
                                    label='Celular'
                                    fullWidth
                                    {...register('celular', validaciones.celular)}
                                    error={!!errors.celular}
                                    helperText={errors.celular?.message}
                                />
                            </Box>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Selecciona una fecha"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    minDate={dayjs()}
                                    renderInput={(params) => <TextField {...params} error={!!error} helperText={error} />}
                                />
                                {error && <Typography variant="caption" color="error">{error}</Typography>}
                            </LocalizationProvider>

                            <TextField
                                label='Monto Total'
                                type="number"
                                {...register('montoTotal')}

                            />
                            <Box>
                                <Controller
                                    name="marca"
                                    control={control}
                                    defaultValue=""
                                    rules={validaciones.marca}
                                    render={({ field }) => (
                                        <Select
                                            labelId="marca-label"
                                            {...field}
                                            error={!!errors.marca}
                                            fullWidth
                                        >
                                            <MenuItem value="Apple">Apple</MenuItem>
                                            <MenuItem value="Samsung">Samsung</MenuItem>
                                            <MenuItem value="Xiaomi">Xiaomi</MenuItem>
                                            <MenuItem value="Huawei">Huawei</MenuItem>
                                            <MenuItem value="OnePlus">OnePlus</MenuItem>
                                            <MenuItem value="Nokia">Nokia</MenuItem>
                                            <MenuItem value="Sony">Sony</MenuItem>
                                            <MenuItem value="Motorola">Motorola</MenuItem>
                                            <MenuItem value="Oppo">Oppo</MenuItem>
                                            <MenuItem value="Vivo">Vivo</MenuItem>
                                            <MenuItem value="LG">LG</MenuItem>
                                            <MenuItem value="Realme">Realme</MenuItem>
                                        </Select>
                                    )}
                                />

                                {errors.marca && (
                                    <FormHelperText error>{errors.marca.message}</FormHelperText>
                                )}
                            </Box>
                            <TextField
                                label='Modelo'
                                type="text"
                                fullWidth
                                {...register('modelo', validaciones.modelo)}
                                error={!!errors.modelo}
                                helperText={errors.modelo?.message}
                            />

                        </Grid2>
                        <Grid2 size={6}>
                            <TextField
                                label='Observación'
                                type="text"
                                fullWidth
                                multiline
                                rows={18}
                                {...register('observacion', validaciones.observacion)}
                                error={!!errors.observacion}
                                helperText={errors.observacion?.message}
                            />
                        </Grid2>
                    </Grid2>
                    <Button type="submit" variant="contained" color="success">Cargar</Button>
                </form>
            </Box >
        </LayoutContenedor >
    );
};

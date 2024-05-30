"use client";
import { Container, Box, TextField, Button, Typography, InputAdornment } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; 
import Link from 'next/link'
import React, { useState } from 'react'

export default function index() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                    }}
                >
                    <form>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3,
                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                                padding: 5,
                                borderRadius: 2,
                                width: '400px',
                            }}
                        >
                            <Typography variant="h4"
                                style={{ textAlign: 'center' }}
                            >
                                Registrarse
                            </Typography>

                            <TextField
                                id="name"
                                label="Nombre"
                                variant="filled"
                                name='name'
                                type='text'
                            />

                            <TextField
                                id="lastname"
                                label="Apellido(s)"
                                variant="filled"
                                name='lastname'
                                type='text'
                            />

                            <TextField
                                id="user"
                                label="Correo electrónico"
                                variant="filled"
                                name='user'
                                type='text'
                            />

                            <TextField
                                id="phone"
                                label="Teléfono"
                                variant="filled"
                                name='phone'
                                type='text'
                            />

                            <TextField
                                id="password"
                                label="Contraseña"
                                variant="filled"
                                name='password'
                                type={showPassword ? 'text' : 'password'}

                                InputProps={
                                    {
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {
                                                    showPassword ? <VisibilityOffIcon
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                        :
                                                        <VisibilityIcon
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            style={{ cursor: 'pointer' }}
                                                        />
                                                }
                                            </InputAdornment>
                                        )
                                    }
                                }
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Iniciar sesión
                            </Button>

                            <Typography variant="subtitle2"
                                style={{ textAlign: 'center' }}
                            >
                                ¿Ya eres un usuario? <Link href={'/'}
                                    style={{ textDecoration: 'none', color: '#42a5f5' }}
                                >Inicia sesión</Link>
                            </Typography>
                        </Box>
                    </form>

                </Box>
            </Container>
        </>
    )
}

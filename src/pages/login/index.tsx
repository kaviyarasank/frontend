import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react';
import Loader from '@/components/loader';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                frontEnd
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function Login() {

    const router = useRouter()
    const [loader, setLoader] = useState(false)

    const schema = z.object({
        username: z.string().min(1, { message: 'Username is required' }),
        password: z.string().min(1, { message: 'Password is required' }),
    });


    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    }: any = useForm<any>({
        resolver: zodResolver(schema), // Apply the zodResolver
    });


    // handled login api
    const handleRegistration = (data: any) => {
        setLoader(true)
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: data.username,
                password: data.password,
            })
        })
            .then(res => res.json())
            .then((response: any) => {
                setLoader(false)
                if (response?.token) {
                    sessionStorage.setItem("@frontend_test", response?.token)
                    router.push("/")
                }
            })
            .catch((error: any) => {
                setLoader(false)

            })
    };


    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" className='bg-white '>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5" className='mt-3'>
                        Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(handleRegistration)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="username"
                            label="Username"
                            name='username'
                            {...register('username')}
                        />
                        <small className="text-[#ef4444]">
                            {errors?.username && errors.username.message}
                        </small>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            {...register('password')}
                        />
                        <small className="text-[#ef4444]">
                            {errors?.password && errors.password.message}
                        </small>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 2, mb: 4 }} />
            </Container>
            {loader && <Loader/>}
        </ThemeProvider>
    );
}
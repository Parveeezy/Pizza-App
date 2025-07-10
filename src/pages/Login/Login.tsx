import {Headling} from "../../components/Headling/Headling.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {Link} from "react-router-dom";
import styles from './Login.module.css'
import {Input} from "../../components/Input/Input.tsx";
import {type FormEvent, useState} from "react";
import axios, {AxiosError} from "axios";
import {PREFIX} from "../../healpers/API.ts";

export interface LoginForm {
    email: {
        value: string
    }
    password: {
        value: string
    }
}

export const Login = () => {
    const [error, setError] = useState<string | null>()

    const submit = async (event: FormEvent) => {
        setError(null)
        event.preventDefault()
        const target = event.target as typeof event.target & LoginForm
        const {email, password} = target
        await sendLogin(email.value, password.value)
    }

    const sendLogin = async (email: string, password: string) => {
        try {
            const { data } = await axios.post(`${PREFIX}/auth/login`, {
                email,
                password
            })
            console.log(data)
        } catch (err) {
            if (err instanceof AxiosError) {
                setError(err.response?.data.message)
            }
        }
    }


    return (
        <div className={styles['login']}>
            <Headling className={styles['h1']}>Вход</Headling>
            <div className={styles['error']}>
                {error && <p>{error}</p>}
            </div>
            <form action="" className={styles['form']} onSubmit={submit}>
                <div className={styles['field']}>
                    <label htmlFor="email">Ваш email</label>
                    <Input
                        type="text"
                        id={'email'}
                        placeholder={'Email'}
                        name={'email'}
                    />
                </div>
                <div className={styles['field']}>
                    <label htmlFor="password">Ваш пароль</label>
                    <Input
                        type="password"
                        id={'password'}
                        placeholder={'Пароль'}
                        name={'password'}
                    />
                </div>
                <Button type={"submit"} appearance={"big"}>
                    Вход
                </Button>
            </form>
            <div className={styles['links']}>
                <p>Нет аккаунта?</p>
                <Link to={'/auth/register'}>Зарегистрироваться</Link>
            </div>
        </div>
    );
};
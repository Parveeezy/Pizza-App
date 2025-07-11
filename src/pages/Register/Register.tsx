import styles from "./Register.module.css"
import {Headling} from "../../components/Headling/Headling.tsx";
import {Input} from "../../components/Input/Input.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import {type FormEvent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../store/store.ts";
import {clearRegisterError, register} from "../../store/user.slice.ts";

export interface RegisterForm {
    email: {
        value: string
    }
    password: {
        value: string
    }
    name: {
        value: string
    }
}

export const Register = () => {
    const {jwt, registerErrorMessage} = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    useEffect(() => {
        if (jwt) {
            navigate('/')
        }
    }, [jwt, navigate])

    const submit = (event: FormEvent) => {
        event.preventDefault()
        dispatch(clearRegisterError())
        const target = event.target as typeof event.target & RegisterForm
        const {email, password, name} = target
        dispatch(register({email: email.value, password: password.value, name: name.value}))
    }


    return (
        <div className={styles['register']}>
            <Headling className={styles['h1']}>Регистрация</Headling>
            {
                registerErrorMessage &&
                <div className={styles['error']}>{registerErrorMessage}</div>
            }
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
                <div className={styles['field']}>
                    <label htmlFor="text">Ваше имя</label>
                    <Input
                        type="text"
                        id={'text'}
                        placeholder={'Имя'}
                        name={'name'}
                    />
                </div>
                <Button type={"submit"} appearance={"big"}>
                    Вход
                </Button>
            </form>
            <div className={styles['links']}>
                <p>Есть аккаунт?</p>
                <Link to={'/auth/login'}>Войти</Link>
            </div>
        </div>
    );
};
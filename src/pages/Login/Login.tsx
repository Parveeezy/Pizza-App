import {Headling} from "../../components/Headling/Headling.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import styles from './Login.module.css'
import {Input} from "../../components/Input/Input.tsx";
import {type FormEvent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {type AppDispatch, type RootState} from "../../store/store.ts";
import {clearLoginError, login} from "../../store/user.slice.ts";

export interface LoginForm {
    email: {
        value: string
    }
    password: {
        value: string
    }
}

export const Login = () => {
    const navigate = useNavigate()
    const {jwt, loginErrorMessage} = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>()
    console.log(loginErrorMessage)
    useEffect(() => {
        if (jwt) {
            navigate('/')
        }
    }, [jwt, navigate])

    const submit = async (event: FormEvent) => {
        dispatch(clearLoginError())
        event.preventDefault()
        const target = event.target as typeof event.target & LoginForm
        const {email, password} = target
        await sendLogin(email.value, password.value)
    }

    const sendLogin = async (email: string, password: string) => {
        dispatch(login({email, password}))
    }
    return (
        <div className={styles['login']}>
            <Headling className={styles['h1']}>Вход</Headling>
            {
                loginErrorMessage &&
                <div className={styles['error']}>{loginErrorMessage}</div>
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
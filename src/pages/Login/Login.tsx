import {Headling} from "../../components/Headling/Headling.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {Link} from "react-router-dom";
import styles from './Login.module.css'
import {Input} from "../../components/Input/Input.tsx";
import type {FormEvent} from "react";

export const Login = () => {

    const submit = (event: FormEvent) => {
        event.preventDefault()
        console.log(event)
    }

    return (
        <div className={styles['login']}>
            <Headling className={styles['h1']}>Вход</Headling>
            <form action="" className={styles['form']} onSubmit={submit}>
                <div className={styles['field']}>
                    <label htmlFor="email">Ваш email</label>
                    <Input
                        type="text"
                        id={'email'}
                        placeholder={'Email'}
                    />
                </div>
                <div className={styles['field']}>
                    <label htmlFor="password">Ваш пароль</label>
                    <Input
                        type="password"
                        id={'password'}
                        placeholder={'Пароль'}
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
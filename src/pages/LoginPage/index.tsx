import { useForm } from "react-hook-form"
import { LoginPageContainer } from "./styles"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../../components/Loading";
import axios from "../../services/axios";
import { toast } from "react-toastify";

export const LoginPage = function () {

    const [loadingStatus, setloadingStatus] = useState(true)

    const { register, handleSubmit } = useForm({})

    const navigate = useNavigate();

    const onSubmit = (data: any) => {

        async function fetchData(): Promise<any> {
            try {
                const response = await axios.post("/auth/", data)
                setloadingStatus(false)

                const { token } = response.data
                localStorage.setItem("token", token)

                setloadingStatus(true)
                navigate("/ativacao")
                return

            } catch (error: any) {
                setloadingStatus(true)
                toast.error(error.response.data.error)
                return
            }
        }

        fetchData()
    }

    return (
        <LoginPageContainer>
            <div className="Auth-form-container">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="Auth-form"
                >
                    <div className="Auth-form-content" style={{ minWidth: 260 }}>
                        <h3 className="Auth-form-title">Login</h3>
                        <div className="form-group mt-3">
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Digite seu Email"
                                {...register("email")}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Senha</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Digite sua Senha"
                                {...register("password")}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Esqueceu? <a href="https://api.whatsapp.com/send?phone=5524988441050&text=Oi%20Evandro!%20Preciso%20trocar%20a%20minha%20senha!">Deu ruim!</a>
                        </p>
                    </div>
                </form>

                <button
                    className="btn btn-secondary"
                    onClick={() => { navigate("/cadastrar") }}
                >Cadastrar</button>
            </div>
            <Loading status={loadingStatus}></Loading>
        </LoginPageContainer>
    )
}
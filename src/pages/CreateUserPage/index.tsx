import { useForm } from "react-hook-form"
import { CreateUserPageContainer } from "./style";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "../../services/axios";

export const CreateUserPage = function () {

    const [loadingStatus, setloadingStatus] = useState(true)

    const { register, handleSubmit } = useForm({})

    const navigate = useNavigate();

    const onSubmit = (data: any) => {

        let formErros = false

        if (data.name.length < 3 || data.name.length > 255) {
            toast.error("Nome inválido")
            formErros = true
        }

        if (data.email.length < 6 || data.email.length > 50) {
            toast.error("Email inválido")
            formErros = true
        }

        if (data.password.length < 6 || data.password.length > 50) {
            toast.error("Senha inválida")
            formErros = true
        }

        if (formErros) {
            return
        }

        async function fetchData(): Promise<any> {
            try {
                setloadingStatus(false)
                await axios.post("/user/create", data)

                navigate("/login")

                return;

            } catch (error: any) {
                setloadingStatus(true)
                toast.error(error.response.data.error)
                return
            }
        }

        fetchData()


    }

    return (
        <CreateUserPageContainer>
            <div className="Auth-form-container">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="Auth-form"
                >
                    <div className="Auth-form-content" style={{ minWidth: 260 }}>
                        <h3 className="Auth-form-title">Login</h3>
                        <div className="form-group mt-3">
                            <label>Nome</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Digite seu nome"
                                {...register("name")}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email</label>
                            <input
                                type="email"
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
                                Cadastrar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Loading status={loadingStatus}></Loading>
        </CreateUserPageContainer>
    )
}
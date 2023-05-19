import { useForm } from "react-hook-form";
import { useFormData } from "../../../context/formContext";
import { FormButtonNav } from "../FormButtonsNav";
import { FormStyled } from "../styles";

//types
import { FormStepTypes } from "../../../types/types";

export const FormMaterialUsed = ({ nextFormStep, prevFormStep, currentStep, orderStep }: FormStepTypes) => {

    const { register, handleSubmit } = useForm()

    const { setFormValues } = useFormData()

    const onSubmit = (data: any, e: any) => {
        e.preventDefault()
        setFormValues(data)
        nextFormStep()
    }

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)} style={currentStep == orderStep ? {} : { display: 'none' }} autoComplete="off">
            <h5>Material Utilizado</h5>
            <div className="row">
                <div className="col mb-1">
                    <label>Fibra</label>
                    <input
                        type="number"
                        inputMode="numeric"
                        className="input-number form-control"
                        id="fibra"
                        placeholder="0"
                        {...register("material_used.fibra", { valueAsNumber: true })}
                    />
                </div>
                <div className="col mb-1">
                    <label>Alça</label>
                    <input
                        type="number"
                        inputMode="numeric"
                        className="input-number form-control"
                        id="alca"
                        placeholder="0"
                        {...register("material_used.alca", { valueAsNumber: true })}
                    />
                </div>
                <div className="col mb-1">
                    <label>Nylon</label>
                    <input
                        type="number"
                        inputMode="numeric"
                        className="input-number form-control"
                        id="nylon"
                        placeholder="0"
                        {...register("material_used.nylon", { valueAsNumber: true })}
                    />
                </div>

            </div>
            <div className="row">
                <div className="col mb-1">
                    <label>PTO</label>
                    <input
                        type="number"
                        inputMode="numeric"
                        className="input-number form-control"
                        id="pto"
                        placeholder="0"
                        {...register("material_used.pto", { valueAsNumber: true })}
                    />
                </div>
                <div className="col mb-1">
                    <label>UTP</label>
                    <input
                        type="number"
                        inputMode="numeric"
                        className="input-number form-control"
                        id="cabo_utp"
                        placeholder="0"
                        {...register("material_used.cabo_utp", { valueAsNumber: true })}
                    />
                </div>
                <div className="col mb-1">
                    <label>Fixa Fio</label>
                    <input
                        type="number"
                        inputMode="numeric"
                        className="input-number form-control"
                        id="fixa_fio"
                        placeholder="0"
                        {...register("material_used.fixa_fio", { valueAsNumber: true })}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col mb-1">
                    <label>Conec. Rj45</label>
                    <input
                        type="number"
                        inputMode="numeric"
                        className="input-number form-control"
                        id="conector_rj45"
                        placeholder="0"
                        {...register("material_used.conector_rj45", { valueAsNumber: true })}
                    />
                </div>
                <div className="col mb-1">
                    <label>Conec. APC</label>
                    <input
                        type="number"
                        inputMode="numeric"
                        className="input-number form-control"
                        id="conector_apc"
                        placeholder="0"
                        {...register("material_used.conector_apc", { valueAsNumber: true })}
                    />
                </div>
                <div className="col mb-1">
                    <label>Conec. UPC</label>
                    <input
                        type="number"
                        inputMode="numeric"
                        className="input-number form-control"
                        id="conector_upc"
                        placeholder="0"
                        {...register("material_used.conector_upc", { valueAsNumber: true })}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col mb-1">
                    <label>Cord. APC/APC</label>
                    <input
                        type="number"
                        inputMode="numeric"
                        className="input-number form-control"
                        id="cordao_apc_apc"
                        placeholder="0"
                        {...register("material_used.cordao_apc_apc", { valueAsNumber: true })}
                    />
                </div>
                <div className="col mb-1">
                    <label>Cord. APC/UPC</label>
                    <input
                        type="number"
                        inputMode="numeric"
                        className="input-number form-control"
                        id="cordao_apc_upc"
                        placeholder="0"
                        {...register("material_used.cordao_apc_upc", { valueAsNumber: true })}
                    />
                </div>
            </div>
            <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
        </FormStyled>
    )
}
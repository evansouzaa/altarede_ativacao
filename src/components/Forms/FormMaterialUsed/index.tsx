import { useForm } from "react-hook-form";
import { useFormData } from "../../../context/formContext";
import { FormButtonNav } from "../FormButtonsNav";
import { FormStyled } from "../styles";

//types
import { FormStepTypes } from "../../../types/types";

export const FormMaterialUsed = ({ nextFormStep, prevFormStep, currentStep }: FormStepTypes) => {

    const { register, handleSubmit } = useForm()

    const { setFormValues } = useFormData()

    const onSubmit = (data: any, e: any) => {
        e.preventDefault()
        setFormValues(data)
        nextFormStep()
    }

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)} style={currentStep == 3 ? {} : { display: 'none' }} autoComplete="off">
            <h5>Material Utilizado</h5>
            <div className="row">
                <div className="col mb-1">
                    <label>Fibra</label>
                    <input type="number" inputMode="numeric" className="input-number form-control" id="fibra" placeholder="0" {...register("fibra", { valueAsNumber: true })} />
                </div>
                <div className="col mb-1">
                    <label>Conector APC</label>
                    <input type="number" inputMode="numeric" className="input-number form-control" id="conector_apc" placeholder="0" {...register("conector_apc", { valueAsNumber: true })} />
                </div>
                <div className="col mb-1">
                    <label>Conector UPC</label>
                    <input type="number" inputMode="numeric" className="input-number form-control" id="conector_upc" placeholder="0" {...register("conector_upc", { valueAsNumber: true })} />
                </div>
            </div>
            <div className="row">
                <div className="col mb-1">
                    <label>PTO</label>
                    <input type="number" inputMode="numeric" className="input-number form-control" id="pto" placeholder="0" {...register("pto", { valueAsNumber: true })} />
                </div>
                <div className="col mb-1">
                    <label>Cord. APC/APC</label>
                    <input type="number" inputMode="numeric" className="input-number form-control" id="cordao_apc-apc" placeholder="0" {...register("cordao_apc-apc", { valueAsNumber: true })} />
                </div>
                <div className="col mb-1">
                    <label>Cord. APC/UPC</label>
                    <input type="number" inputMode="numeric" className="input-number form-control" id="cordao_apc-upc" placeholder="0" {...register("cordao_apc-upc", { valueAsNumber: true })} />
                </div>
            </div>
            <div className="row">
                <div className="col mb-1">
                    <label>Alça</label>
                    <input type="number" inputMode="numeric" className="input-number form-control" id="alca" placeholder="0" {...register("alca", { valueAsNumber: true })} />
                </div>
                <div className="col mb-1">
                    <label>Nylon</label>
                    <input type="number" inputMode="numeric" className="input-number form-control" id="nylon" placeholder="0" {...register("nylon", { valueAsNumber: true })} />
                </div>
                <div className="col mb-1">
                    <label>Fixa Fio</label>
                    <input type="number" inputMode="numeric" className="input-number form-control" id="fixa_fio" placeholder="0" {...register("fixa_fio", { valueAsNumber: true })} />
                </div>
            </div>
            <div className="row">
                <div className="col mb-1">
                    <label>UTP</label>
                    <input type="number" inputMode="numeric" className="input-number form-control" id="cabo_utp" placeholder="0" {...register("cabo_utp", { valueAsNumber: true })} />
                </div>
                <div className="col mb-1">
                    <label>Conector Rj45</label>
                    <input type="number" inputMode="numeric" className="input-number form-control" id="conector_rj45" placeholder="0" {...register("conector_rj45", { valueAsNumber: true })} />
                </div>
            </div>
            <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
        </FormStyled>
    )
}
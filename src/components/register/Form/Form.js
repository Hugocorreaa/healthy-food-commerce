import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormWrapper } from "../../../styles/styles";
import { useCookies } from 'react-cookie';


const validationPost = yup
    .object({
        name: yup.string().required("Name is a Required field"),
        birthdate: yup.string().required("Date is a Required field"),
        cpf: yup.string().required("CPF is a Required field"),
        cep: yup.string().required("CEP is a Required field").max(9, "Cep must be at most 9 characters").min(8, "Cep must be at least 8 characters"),
        address: yup.string().required("address is a Required field"),
        city: yup.string().required("City is a Required field"),
        state: yup.string().required("State is a Required field"),
    })
    .required();

const Form = () => {
    const [cookies, setCookie] = useCookies(['data']);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(validationPost),
    });

    //API Handler
    const checkCEP = (e) => {

        const cep = e.target.value.replace(/\D/g, "");
        fetch(` https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {;
        setValue('address', data.logradouro);
        setValue('city', data.localidade);
        setValue('state', data.uf);
    })

    };

    // LocalStorage & Cookies
    const storageData = (data) => {
        setCookie('data', data, {path: '/'});
        localStorage.setItem("form", JSON.stringify(data));
        alert('You have been registered!')
    };

    return (
        <FormWrapper>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(storageData)}>
                <div className="fields">
                    <label>Name</label>
                    <div>
                        <input type="text" name="name" {...register("name")} />
                        <p className="error-message">{errors.name?.message}</p>
                    </div>
                </div>
                <div className="fields">
                    <label>Date of birth</label>
                    <div>
                        <input type="date" name="birthdate" {...register("birthdate")} />
                        <p className="error-message">{errors.birthdate?.message}</p>
                    </div>
                </div>
                <div className="fields">
                    <label>CPF</label>
                    <div>
                        <input type="text" name="cpf" {...register("cpf")} />
                        <p className="error-message">{errors.cpf?.message}</p>
                    </div>
                </div>
                <div className="fields">
                    <label>CEP</label>
                    <div>
                        <input type="text" name="cep" {...register("cep")} onBlur={checkCEP} placeholder="ex. 68908-642"/>
                        <p className="error-message">{errors.cep?.message}</p>
                    </div>
                </div>
                <div className="fields">
                    <label>Address</label>
                    <div>
                        <input type="text" name="address" readOnly {...register("address")} />
                        <p className="error-message">{errors.address?.message}</p>
                    </div>
                </div>
                <div className="fields">
                    <label>City</label>
                    <div>
                        <input type="text" name="city" readOnly {...register("city")} />
                        <p className="error-message">{errors.city?.message}</p>
                    </div>
                </div>
                <div className="fields">
                    <label>State</label>
                    <div>
                        <input type="text" name="state" readOnly {...register("state")} />
                        <p className="error-message">{errors.state?.message}</p>
                    </div>
                </div>
                <input type="submit" value="Register" className="button-submit" />
            </form>
        </FormWrapper>
    );
};

export default Form;

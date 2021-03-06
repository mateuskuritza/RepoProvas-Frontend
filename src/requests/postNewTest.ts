import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import INewTest from "../interfaces/INewTest";

export default function usePostNewTest() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    function sendTest(test: INewTest) {
        setLoading(true);
        axios.post(process.env.REACT_APP_HOST + "/tests", test)
            .then(onSuccess)
            .catch(onError);
    }

    const onSuccess = (res: AxiosResponse) => {
        setError(false);
        setLoading(false);
        alert("Teste enviado com sucesso!");
    };

    const onError = (error: AxiosError) => {
        setLoading(false);
        console.log(error)
        setError(true);
    };

    return { loading, error, sendTest };
}

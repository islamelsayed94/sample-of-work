import { useField, useForm, configure } from "vee-validate";
import { required } from "@vee-validate/rules";

export function useMovieValidation() {
    configure({
        generateMessage: ({ field }) => `${field} is required`,
    });

    const { handleSubmit } = useForm();

    const title = useField("title", required);
    const year = useField("year", required);

    return {
        handleSubmit,
        title,
        year,
    };
}

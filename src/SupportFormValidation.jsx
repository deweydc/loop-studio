

export default function SupportFormValidation(values) {
    //define errors
    let errors = {}

    //Name
    if (!values.name.trim()) {
        errors.name = "Name Required";
    }

    //Name
    if (!values.email) {
        errors.email = "Email Required";
    } else if (!/^[a-zA-Z0-9._%+=]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}$/.test(values.email)) {
        errors.email = "Email is invalid";
    }

    if (!values.comment) {
        errors.comment = "Tell us what we can help you with"
    }

    return errors;
}
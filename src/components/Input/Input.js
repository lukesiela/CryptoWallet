import React from "react";
import { Form, Input as SemanticInput } from "semantic-ui-react";
import classNames from "classnames";

function Input({ label, extraClassnames, ...inputProps}) {
    const inputClassnames = classNames("Input", {
        [extraClassnames]: !!extraClassnames,
    });

    return (
        <Form.Field>
            {label && <label>{label}</label>}
            <SemanticInput
                className={inputClassnames}
                {...inputProps}
            />
        </Form.Field>
    )

}

export default Input;


import React from "react"
import { Field } from "redux-form";
import styles from './FormsControl.module.css'

const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <Element {...input} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = Element('textarea');
export const Input = Element('input');

export const createField = (placeholder, name, validators, component, type) =>(
    <div>
    <Field
    placeholder={placeholder}
    name={name}
    validate={validators}
    component={component}
    type={type}
  /></div>)
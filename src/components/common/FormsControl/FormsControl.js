import React from "react"
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

// export const Textarea = ({ input, meta, ...props }) => {
//     const hasError = meta.error && meta.touched;
//     return (
//         <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//             <div>
//                 <textarea {...input} />
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

// export const Input = ({ input, meta, ...props }) => {
//     const hasError = meta.error && meta.touched;
//     return (
//         <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//             <div>
//                 <input {...input} />
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

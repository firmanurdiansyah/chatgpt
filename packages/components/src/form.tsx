import * as React from "react";
import { cx } from "./types";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { label?: string; description?: string; error?: string; }
export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({ label, description, error, id, className, ...props }, ref) {
  const inputId = id ?? React.useId();
  const descriptionId = `${inputId}-description`;
  const errorId = `${inputId}-error`;
  return <div className="ui-field"><label htmlFor={inputId} className="ui-field__label">{label}{props.required ? <span aria-hidden="true"> *</span> : null}</label><input {...props} ref={ref} id={inputId} aria-describedby={error ? errorId : description ? descriptionId : undefined} aria-invalid={error ? true : undefined} className={cx("ui-input", error && "ui-input--error", className)} />{description && !error ? <p id={descriptionId} className="ui-field__description">{description}</p> : null}{error ? <p id={errorId} className="ui-field__error" role="alert">{error}</p> : null}</div>;
});

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { label?: string; error?: string; }
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ label, error, id, className, ...props }, ref) { const inputId = id ?? React.useId(); return <div className="ui-field"><label htmlFor={inputId} className="ui-field__label">{label}</label><textarea {...props} ref={ref} id={inputId} aria-invalid={error ? true : undefined} className={cx("ui-textarea", error && "ui-textarea--error", className)} />{error ? <p className="ui-field__error" role="alert">{error}</p> : null}</div>; });

export function Select({ label, options, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string; options: readonly { value: string; label: string }[] }) { const id = props.id ?? React.useId(); return <div className="ui-field"><label htmlFor={id} className="ui-field__label">{label}</label><select {...props} id={id} className="ui-select">{options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}</select></div>; }

export function Checkbox({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) { const id = props.id ?? React.useId(); return <label htmlFor={id} className="ui-check"><input {...props} id={id} type="checkbox" className="ui-check__input" /><span className="ui-check__box" aria-hidden="true" />{label ? <span>{label}</span> : null}</label>; }

export function Switch({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) { const id = props.id ?? React.useId(); return <label htmlFor={id} className="ui-switch"><input {...props} id={id} type="checkbox" role="switch" className="ui-switch__input" /><span className="ui-switch__track" aria-hidden="true"><span /></span>{label ? <span>{label}</span> : null}</label>; }

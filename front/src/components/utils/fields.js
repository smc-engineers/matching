import React from 'react';
import { FormGroup, Col, ControlLabel } from 'react-bootstrap';


export const renderField = (field) => {
  const { input, placeholder, label, type, meta: {touched, error, warning} } = field
  const validationState = error ? 'error' : warning ? 'warning' : 'success';

  return(
    <FormGroup controlId={input.name} validationState={touched ? validationState : null } >
      <Col componentClass={ControlLabel} >{label}</Col>
      <Col>
        <input {...input} id={input.name} placeholder={placeholder} type={type} className="form-control" autoComplete="off" />
        {touched && error && <span className="invalid-input"><span className="glyphicon glyphicon-exclamation-sign"></span>{error}</span>}
      </Col>
    </FormGroup>
  )
}


export const renderCheckbox = (field) => {
  const { input, label, type,  meta:{touched, error } } = field
  return(
    <div>
      <label>
        <input className="auth-checkbox" type={type} checked={input.value === "ADMIN" || input.value === true? true : false} onChange={input.onChange} />
        {label}
        {touched && error && <span>{error}</span>}
      </label>
    </div>
  )
}

export const renderSelectEraName = (field) => {
  const { input, meta:{touched, error } } = field
  return(
    <div>
      <select {...input} id={input.name} >
        <option value="---">---</option>
        <option value="西暦">西暦</option>
        <option value="昭和">昭和</option>
        <option value="平成">平成</option>
      </select>
      {touched && error && <span className="invalid-input"><span className="glyphicon glyphicon-exclamation-sign"></span>{error}</span>}
    </div>
  )
}

export const renderSearchField = (field) => {
  const { input, meta:{touched, error } } = field
  return(
    <div>
      <input type="text" {...input} id={input.name} />
      {touched && error && <span className="invalid-input"><span className="glyphicon glyphicon-exclamation-sign"></span>{error}</span>}
    </div>
  )
}

export const renderNonValidateField = (field) => {
  const { input } = field
  return(
    <div>
      <input type="text" {...input} id={input.name} />
    </div>
  )
}

export const renderHiddenField = (field) => {
  const { input, meta:{ error } } = field
  return(
    <div>
      <input type="hidden" {...input} id={input.name} />
      {error && <span className="invalid-input">{error}</span>}
    </div>
  )
}

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0])
export const renderFileField = ({
   input:{value: omitValue, onChange, onBlur, ...inputProps },
   meta: {touched, error},
   ...props
 }) => {
  return(
    <div>
      <input
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        {...props.input}
        {...props}
      />
      { touched && error && <span className="invalid-input"><span className="glyphicon glyphicon-exclamation-sign"></span>{error}</span>}
    </div>
  )
}

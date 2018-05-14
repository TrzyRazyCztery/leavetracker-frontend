const regExpForEmail = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const minValue= (lowerBound, value) => value >= lowerBound;
const minLength = (length, value) => value.length >= length;
const presence = value => !!value;
const match = (value1, value2) => value1 === value2;
const formatCheck = (format, value) =>
  format.test(String(value).toLocaleLowerCase());

const validateMinValue = lowerBound => (context, errors, value) => {
  if (!minValue(lowerBound,value)) {
    errors[context.fieldName] = (errors[context.fieldName] || []).concat([
      `${context.displayedName} should be greater than ${lowerBound}.`
    ]);
  }
  return errors
};

const validatePresence = (context, errors, value) => {
  if (!presence(value)) {
    errors[context.fieldName] = (errors[context.fieldName] || []).concat([
      `${context.displayedName} not present.`
    ]);
  }
  return errors;
};

const validateFormat = format => (context, errors, value) => {
  if (!formatCheck(format, value)) {
    errors[context.fieldName] = (errors[context.fieldName] || []).concat([
      `${context.displayedName} has invalid format`
    ]);
  }
  return errors;
};

const validateMatch = (context, errors, value, value2) => {
  if (!match(value, value2)) {
    errors[context.fieldName] = (errors[context.fieldName] || []).concat([
      `${context.displayedName}'s doesn't match`
    ]);
  }
  return errors;
};
const validateMinLength = length => (context, errors, value) => {
  if (!minLength(length, value)) {
    errors[context.fieldName] = (errors[context.fieldName] || []).concat([
      `${context.displayedName} should have at least ${length} characters`
    ]);
  }
  return errors;
};

const validate = (context, ...validators) => (value, value2) => {
  return validators.reduce(
    (errors, validator) => validator(context, errors, value, value2),
    {}
  );
};

export const validateEmail = validate(
  {
    fieldName: 'email',
    displayedName: 'Email'
  },
  validatePresence,
  validateFormat(regExpForEmail)
);

export const validateDeskNumber = validate(
    {
      fieldName: 'id',
      displayedName: 'Desk Number'
    },
    validatePresence,
    validateMinValue(1)
);

export const validatePassword = validate(
  {
    fieldName: 'password',
    displayedName: 'Password '
  },
  validatePresence,
  validateMinLength(5)
);

export const validatePasswordConfirmation = validate(
  {
    fieldName: 'passwordConfirmation',
    displayedName: "Password's"
  },
  validateMatch
);

export const validateName = validate(
  {
    fieldName: 'name',
    displayedName: 'Name'
  },
  validatePresence
);

export const validateSurname = validate(
  {
    fieldName: 'surname',
    displayedName: 'Surname'
  },
  validatePresence
);

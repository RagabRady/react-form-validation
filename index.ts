/* eslint-disable */

export const checkDivOrFormValidations = (elem: any) => {
    var valid = true;
    var $inputs = <HTMLCollectionOf<HTMLInputElement>>(elem?.getElementsByTagName('input'))

    for (let index = 0; index < $inputs.length; index++) {
        const input = $inputs.item(index);
        if (input?.id) {
            var span = <HTMLSpanElement>(input?.nextElementSibling);
            if (span) {
                span.innerHTML = '';
            } else {
                span = document.createElement('span');
                span.className = 'text-danger';
                input?.parentNode?.insertBefore(span, input.nextElementSibling);
            }

            if (!input.checkValidity() || (input.required && input.value.trim() === '')) {
                if (input.validity.valueMissing || input.value.trim() === '') {
                    var requiredMsg = <string>input?.getAttribute('required_msg');
                    span.innerHTML = requiredMsg
                } else if (input.validity.patternMismatch) {
                    var patternMsg = <string>input?.getAttribute('pattern_msg');
                    span.innerHTML = patternMsg;
                } else if (input.validity.typeMismatch && input.type === 'email') {
                    var emailMsg = <string>input?.getAttribute('email_msg');
                    span.innerHTML = emailMsg;
                } else if (input.validity.typeMismatch) {
                    var typeMsg = <string>input?.getAttribute('type_msg');
                    span.innerHTML = typeMsg;
                } else if (input.validity.rangeOverflow) {
                    var maxMsg = <string>input?.getAttribute('max_msg');
                    span.innerHTML = maxMsg;
                } else if (input.validity.rangeUnderflow) {
                    var minMsg = <string>input?.getAttribute('min_msg');
                    span.innerHTML = minMsg;
                } else if (input.validity.tooShort) {
                    var minLengthMsg = <string>input?.getAttribute('minlength_msg');
                    span.innerHTML = minLengthMsg;
                } else if (input.validity.tooLong) {
                    var maxLengthMsg = <string>input?.getAttribute('maxlength_msg');
                    span.innerHTML = maxLengthMsg;
                }
                valid = false;
            }
        }

    }

    var $selects = <HTMLCollectionOf<HTMLSelectElement>>(elem?.getElementsByTagName('select'))

    for (let index = 0; index < $selects.length; index++) {
        const select = $selects.item(index);
        if (select?.id) {
            var span = <HTMLSpanElement>(select?.nextElementSibling);
            if (span) {
                span.innerHTML = '';
            } else {
                span = document.createElement('span');
                span.className = 'text-danger';
                select?.parentNode?.insertBefore(span, select.nextElementSibling);
            }

            if (!select.checkValidity() || (select.required && select.value.trim() === '')) {
                if (select.validity.valueMissing || select.value.trim() === '') {
                    var requiredMsg = <string>select?.getAttribute('required_msg');
                    span.innerHTML = requiredMsg
                }
                valid = false;
            }
        }
    }


    var $textAreas = <HTMLCollectionOf<HTMLTextAreaElement>>(elem?.getElementsByTagName('textarea'))

    for (let index = 0; index < $textAreas.length; index++) {
        const elem = $textAreas.item(index);

        if (elem?.id) {
            var span = <HTMLSpanElement>(elem?.nextElementSibling);
            if (span) {
                span.innerHTML = '';
            } else {
                span = document.createElement('span');
                span.className = 'text-danger';
                elem?.parentNode?.insertBefore(span, elem.nextElementSibling);
            }

            if (!elem?.checkValidity() || (elem?.required && elem?.value.trim() === '')) {
                if (elem?.validity.valueMissing || elem?.value.trim() === '') {
                    var requiredMsg = <string>elem?.getAttribute('required_msg');
                    span.innerHTML = requiredMsg
                }
                valid = false;
            }
        }
    }
    return valid;
}

export const chckInputValidation = (inputElement: any) => {
    if (inputElement.id) {
        var span = <HTMLSpanElement>(inputElement?.nextSibling);
        if (span) {
            span.innerHTML = '';
        } else {
            span = document.createElement('span');
            span.className = 'text-danger';
            inputElement?.parentNode?.insertBefore(span, inputElement.nextElementSibling);
        }

        if (!inputElement.checkValidity() || (inputElement.required && inputElement.value.trim() === '')) {
            if (inputElement.validity.valueMissing || inputElement.value.trim() === '') {
                var requiredMsg = <string>inputElement?.getAttribute('required_msg');
                span.innerHTML = requiredMsg
            } else if (inputElement.validity.patternMismatch) {
                var patternMsg = <string>inputElement?.getAttribute('pattern_msg');
                span.innerHTML = patternMsg;
            } else if (inputElement.validity.typeMismatch && inputElement.type === 'email') {
                var emailMsg = <string>inputElement?.getAttribute('email_msg');
                span.innerHTML = emailMsg;
            } else if (inputElement.validity.typeMismatch) {
                var typeMsg = <string>inputElement?.getAttribute('type_msg');
                span.innerHTML = typeMsg;
            } else if (inputElement.validity.rangeOverflow) {
                var maxMsg = <string>inputElement?.getAttribute('max_msg');
                span.innerHTML = maxMsg;
            } else if (inputElement.validity.rangeUnderflow) {
                var minMsg = <string>inputElement?.getAttribute('min_msg');
                span.innerHTML = minMsg;
            } else if (inputElement.validity.tooShort) {
                var minLengthMsg = <string>inputElement?.getAttribute('minlength_msg');
                span.innerHTML = minLengthMsg;
            } else if (inputElement.validity.tooLong) {
                var maxLengthMsg = <string>inputElement?.getAttribute('maxlength_msg');
                span.innerHTML = maxLengthMsg;
            }

            return false;
        }
        return true;
    }
    return true;
}



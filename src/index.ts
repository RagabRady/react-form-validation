export const checkValidation = (elem: any) => {
    let valid = true;
    const $inputs = elem.getElementsByTagName('input') as HTMLCollectionOf<HTMLInputElement>;

    for (let index = 0; index < $inputs.length; index++) {
        const input = $inputs.item(index);
        if (input?.id) {
            let span = input?.nextElementSibling as HTMLSpanElement;
            if (span) {
                span.innerHTML = '';
            } else {
                span = document.createElement('span');
                span.className = 'text-danger';
                input?.parentNode?.insertBefore(span, input.nextElementSibling);
            }

            if (!input.checkValidity() || (input.required && input.value.trim() === '')) {
                if (input.validity.valueMissing || input.value.trim() === '') {
                    const requiredMsg = input?.getAttribute('required_msg') as string;
                    span.innerHTML = requiredMsg;
                } else if (input.validity.patternMismatch) {
                    const patternMsg = input?.getAttribute('pattern_msg') as string;
                    span.innerHTML = patternMsg;
                } else if (input.validity.typeMismatch && input.type === 'email') {
                    const emailMsg = input?.getAttribute('email_msg') as string;
                    span.innerHTML = emailMsg;
                } else if (input.validity.typeMismatch) {
                    const typeMsg = input?.getAttribute('type_msg') as string;
                    span.innerHTML = typeMsg;
                } else if (input.validity.rangeOverflow) {
                    const maxMsg = input?.getAttribute('max_msg') as string;
                    span.innerHTML = maxMsg;
                } else if (input.validity.rangeUnderflow) {
                    const minMsg = input?.getAttribute('min_msg') as string;
                    span.innerHTML = minMsg;
                } else if (input.validity.tooShort) {
                    const minLengthMsg = input?.getAttribute('minlength_msg') as string;
                    span.innerHTML = minLengthMsg;
                } else if (input.validity.tooLong) {
                    const maxLengthMsg = input?.getAttribute('maxlength_msg') as string;
                    span.innerHTML = maxLengthMsg;
                }
                valid = false;
            }
        }
    }

    const $selects = elem.getElementsByTagName('select') as HTMLCollectionOf<HTMLSelectElement>;

    for (let index = 0; index < $selects.length; index++) {
        const select = $selects.item(index);
        if (select?.id) {
            let span = select?.nextElementSibling as HTMLSpanElement;
            if (span) {
                span.innerHTML = '';
            } else {
                span = document.createElement('span');
                span.className = 'text-danger';
                select?.parentNode?.insertBefore(span, select.nextElementSibling);
            }

            if (!select.checkValidity() || (select.required && select.value.trim() === '')) {
                if (select.validity.valueMissing || select.value.trim() === '') {
                    const requiredMsg = select?.getAttribute('required_msg') as string;
                    span.innerHTML = requiredMsg;
                } else if (select.validity.patternMismatch) {
                    const patternMsg = select?.getAttribute('pattern_msg') as string;
                    span.innerHTML = patternMsg;
                }
                valid = false;
            }
        }
    }

    const $textAreas = elem.getElementsByTagName('textarea') as HTMLCollectionOf<HTMLTextAreaElement>;

    for (let index = 0; index < $textAreas.length; index++) {
        const elem = $textAreas.item(index);

        if (elem?.id) {
            let span = elem?.nextElementSibling as HTMLSpanElement;
            if (span) {
                span.innerHTML = '';
            } else {
                span = document.createElement('span');
                span.className = 'text-danger';
                elem?.parentNode?.insertBefore(span, elem.nextElementSibling);
            }

            if (!elem?.checkValidity() || (elem?.required && elem?.value.trim() === '')) {
                if (elem?.validity.valueMissing || elem?.value.trim() === '') {
                    const requiredMsg = elem?.getAttribute('required_msg') as string;
                    span.innerHTML = requiredMsg;
                } else if (elem.validity.patternMismatch) {
                    const patternMsg = elem?.getAttribute('pattern_msg') as string;
                    span.innerHTML = patternMsg;
                } else if (elem.validity.tooShort) {
                    const minLengthMsg = elem?.getAttribute('minlength_msg') as string;
                    span.innerHTML = minLengthMsg;
                } else if (elem.validity.tooLong) {
                    const maxLengthMsg = elem?.getAttribute('maxlength_msg') as string;
                    span.innerHTML = maxLengthMsg;
                }
                valid = false;
            }
        }
    }
    return valid;
};

export const chckInputValidation = (inputElement: any) => {
    if (inputElement.id) {
        let span = inputElement?.nextSibling as HTMLSpanElement;
        if (span) {
            span.innerHTML = '';
        } else {
            span = document.createElement('span');
            span.className = 'text-danger';
            inputElement?.parentNode?.insertBefore(span, inputElement.nextElementSibling);
        }

        if (!inputElement.checkValidity() || (inputElement.required && inputElement.value.trim() === '')) {
            if (inputElement.validity.valueMissing || inputElement.value.trim() === '') {
                const requiredMsg = inputElement?.getAttribute('required_msg') as string;
                span.innerHTML = requiredMsg;
            } else if (inputElement.validity.patternMismatch) {
                const patternMsg = inputElement?.getAttribute('pattern_msg') as string;
                span.innerHTML = patternMsg;
            } else if (inputElement.validity.typeMismatch && inputElement.type === 'email') {
                const emailMsg = inputElement?.getAttribute('email_msg') as string;
                span.innerHTML = emailMsg;
            } else if (inputElement.validity.typeMismatch) {
                const typeMsg = inputElement?.getAttribute('type_msg') as string;
                span.innerHTML = typeMsg;
            } else if (inputElement.validity.rangeOverflow) {
                const maxMsg = inputElement?.getAttribute('max_msg') as string;
                span.innerHTML = maxMsg;
            } else if (inputElement.validity.rangeUnderflow) {
                const minMsg = inputElement?.getAttribute('min_msg') as string;
                span.innerHTML = minMsg;
            } else if (inputElement.validity.tooShort) {
                const minLengthMsg = inputElement?.getAttribute('minlength_msg') as string;
                span.innerHTML = minLengthMsg;
            } else if (inputElement.validity.tooLong) {
                const maxLengthMsg = inputElement?.getAttribute('maxlength_msg') as string;
                span.innerHTML = maxLengthMsg;
            }

            return false;
        }
        return true;
    }
    return true;
};

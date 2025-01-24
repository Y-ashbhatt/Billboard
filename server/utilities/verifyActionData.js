const verifyActionData = function (action_type, action_data) {
    try {
        const action_types = ['whatsapp', 'mail', 'customhtml', 'optionform', 'product'];
        if (!action_types.includes(action_type)) {
            throw new Error("Action type is not avialable")
        }

        let flag = false;
        let data = {};
        switch (action_type) {
            case 'whatsapp': if (action_data.whatsappnumber) {
                data = { whatsappnumber: action_data.whatsappnumber };
                flag = true;
            }
                break;
            case 'mail': if (action_data.mail) {
                data = { mail: action_data.mail }
                flag = true;
            }
                break;
            case 'customhtml': if (action_data.customhtml) {
                data = { customhtml: action_data.customhtml }
                flag = true;
            }
                break;
            case 'optionform': if (action_data.textFormat) {
                data = { textFormat: action_data.textFormat }
                flag = true;
            }
                break;
            case 'product': if (action_data.title && action_data.description && action_data.link) {
                data = { title: action_data.title, description: action_data.description, link: action_data.link }
                flag = true;
            }
                break;
            default: break;
        }
        return data;
    }
    catch (error) {
        throw new Error("Error Validataing action data");
    }
}

module.exports.verifyActionData = verifyActionData;
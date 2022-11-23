function isValid (type,str){
    switch (type) {
        case 'email':
            const mail = new RegExp( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ );
            return mail.test(str);
        break;
        case 'password':
            const password = new RegExp( /\w{8}\w*/ );
            return password.test(str);
        break;
        case 'name':
        case 'lastName':
            const name = new RegExp( /^[a-zA-Z]{3}[a-zA-Z]*$/ );
            return name.test(str);
        break;
        case 'document':
            const document = new RegExp( /^\d{8}$/ );
            return document.test(str);
        break;
        case 'phone':
            const phone = new RegExp( /^15\d{8}$/ );
            return phone.test(str);
        break;
        case 'patent':
            const patent = new RegExp( /^[a-zA-Z]{2}\d{3}[a-zA-Z]{2}$|^[a-zA-Z]{3}\d{3}$/ );
            return patent.test(str);
        break;
        case 'model':
        case 'brand':
        case 'color':
            const genericWords = new RegExp( /\w/ );
            return genericWords.test(str);
        break;
        case 'prodYear':
            const prodYear = new RegExp( /^19\d{2}$|^20\d{2}$/ );
            return prodYear.test(str);
        break;
        case 'ccard':
            const ccard = new RegExp( /^\d{16}$/ );
            return ccard.test(str);
        break;
        case 'ccname':
            const ccname = new RegExp( /[a-zA-Z]{4}[a-zA-Z]*/ );
            return ccname.test(str);
        break;
        default:
            return false;
    }
}

export { isValid };
 
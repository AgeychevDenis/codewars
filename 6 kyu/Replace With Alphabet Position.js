const alphabetPosition = (text) => text.toLowerCase().replace(/[^a-z]/g, '').split('').map(letter => letter.charCodeAt(0) - 96).join(' ')